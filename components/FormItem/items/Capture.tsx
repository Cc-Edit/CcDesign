import Image from 'next/image';
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import html2canvas from 'html2canvas';
import { Button, LinearProgress } from '@mui/material';
import { uploadFiles } from '@api/oss';
import { Domain } from '@/config/constant';
import { useAppSelector } from '@/store';
interface CaptureProps {
  [key: string]: any
  onChange?: Function
}
export default function Capture(props: CaptureProps) {
  const { enqueueSnackbar } = useSnackbar();
  const [covering, setCovering] = useState(false);
  const { className, value, onChange, ...prop } = props;
  const defaultValue = '/illustrations/templatePage.png';
  const coverImage = value || defaultValue;
  const pageConfig = useAppSelector(state => state.design.page);

  function removeCoverHandler() {
    onChange?.('');
  }
  function genCoverImage() {
    setCovering(true);
    const canvas = document.getElementById('designContainer') as HTMLElement;
    const { backgroundColor } = pageConfig;
    html2canvas(canvas as HTMLElement, {
      allowTaint: true,
      useCORS: true,
      scale: 0.25,
      backgroundColor: `rgba(${backgroundColor.r},${backgroundColor.g},${backgroundColor.b},${backgroundColor.a})`
    }).then(canvas => {
      canvas.toBlob(blob => {
        if (blob) {
          const file = new File([blob], 'cover', {
            type: 'image/png'
          });
          uploadFiles([file])
            .then(res => {
              if (res?.isOk) {
                const { data } = res;
                const [coverImageId] = data as string[];
                onChange?.(`${Domain.baseOSS}/${coverImageId}.png`);
              } else {
                enqueueSnackbar(`生成封面图失败：${res?.msg}`, {
                  variant: 'error'
                });
              }
              setCovering(false);
            })
            .catch(e => {
              const { msg = '上传异常' } = e || {};
              enqueueSnackbar(`生成封面图失败: ${msg}`, {
                variant: 'error'
              });
              setCovering(false);
            });
        } else {
          enqueueSnackbar(`生成封面图失败：截取失败`, {
            variant: 'error'
          });
          setCovering(false);
        }
      });
    })
      .catch(error => {
        enqueueSnackbar(`生成封面图失败：工具异常`, {
          variant: 'error'
        });
        setCovering(false);
      });
  }
  return (
    <div className={`${className}`}>
      <div className='w-full h-28 relative border border-solid dark:border-zinc-600 border-zinc-300'>
        <Image
          alt='封面'
          src={coverImage}
          fill
          sizes='100vh'
          style={{
            objectFit: 'cover',
            userSelect: 'none',
            pointerEvents: 'none'
          }}
        />
      </div>
      <div className='w-full mt-2 flex flex-row justify-between items-center'>
        <Button
          className='relative pl-5 pr-5'
          size='small'
          disabled={covering}
          variant='outlined'
          color='primary'
          onClick={genCoverImage}
        >
          {
            covering ? '生成中···' : '生成封面'
          }
          {
            covering && <LinearProgress className='h-0.5 absolute bottom-0 left-0 right-0 text-yellow-400 text-opacity-30'
                                          color='inherit'/>
          }
        </Button>
        <Button
          className='relative pl-5 pr-5'
          size='small'
          variant='outlined'
          onClick={removeCoverHandler}
        >移除封面</Button>
      </div>
    </div>
  );
}