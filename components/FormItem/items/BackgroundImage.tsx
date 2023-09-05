import { Button, OutlinedInput } from '@mui/material';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { uploadFiles } from '@api/oss';
import { useSnackbar } from 'notistack';
import { Domain } from '@/config/constant';
import styles from '@/components/Design/components/FormItem/items/FormItem.module.css';
interface BackgroundImageProps {
  [key: string]: any,
  onChange: Function
}
const clearImage = '/illustrations/upload.png';

export default function BackgroundImage(props: BackgroundImageProps) {
  const { enqueueSnackbar } = useSnackbar();
  const { className, defaultValue = '/illustrations/upload.png', value, showInput = true, onChange, ...prop } = props;
  const [showButton, setShowButton] = useState(false);
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const inputTarget = event.target;
    const { files } = inputTarget;
    if (files && files.length > 0) {
      const file = files[0];
      uploadFiles([file])
        .then(res => {
          if (res?.isOk) {
            const { data } = res;
            const [imageId] = data as string[];
            const imageUrl = `${Domain.baseOSS}/${imageId}.${file.type.replace('image/', '')}`;
            onChange?.(imageUrl);
          } else {
            enqueueSnackbar(`图片上传失败：${res?.msg}`, {
              variant: 'error'
            });
          }
        })
        .catch(e => {
          enqueueSnackbar(`图片上传失败: 上传异常`, {
            variant: 'error'
          });
        });
    }
  }
  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    onChange?.(event.target.value === clearImage ? '' : event.target.value);
  }
  function resetBackgroundImage() {
    onChange?.('');
  }
  const computedValue: string = value || defaultValue;

  const buttonGroup = (
    <>
      <Button className='mr-2' variant='outlined' component='label' size='small' >
        上传<input hidden accept='.png, .jpg, .jpeg' type='file' onChange={handleChange} />
      </Button>
      <Button variant='outlined' size='small' onClick={resetBackgroundImage}>
        移除背景
      </Button>
    </>
  );
  return (
    <div className={`${className} relative h-38`}>
      <OutlinedInput
        className={`${styles.textField} mb-2`}
        value={computedValue}
        onChange={handleChangeInput}
      />
      <div className='relative h-28 opacity-80 border border-solid dark:border-zinc-600 border-zinc-300'>
        <Image
          alt='页面'
          src={computedValue}
          fill
          sizes='100%'
        />
        <div className='bg-zinc-600 dark:bg-zinc-800 bg-opacity-0 dark:bg-opacity-0 hover:bg-opacity-90 dark:hover:bg-opacity-90 flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 z-10 transition-all duration-300 ' onMouseLeave={() => { setShowButton(false); }} onMouseEnter={() => { setShowButton(true); }}>
          {
            showButton && buttonGroup
          }
        </div>
      </div>
    </div>
  );
}