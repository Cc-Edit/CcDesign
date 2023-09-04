import Image from 'next/image';
import { DragEvent, useState } from 'react';
import { Avatar, Tooltip } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';
import { dateFormat } from '@/utils/common';
import { deleteTemplate } from '@/api/template';
import { useConfirm } from 'material-ui-confirm';
import { useSnackbar } from 'notistack';
interface TemplateItemProps {
  cover?: string
  name: string
  uuid: string
  templateStr: string
  createUser: Record<string, any>
  createDate: number
  onChange?: Function
}
export default function TemplateItem(props: TemplateItemProps) {
  const { onChange, createDate, name = '', uuid, cover = '/baseComponent.png', templateStr, createUser = {}} = props;
  const confirm = useConfirm();
  const { enqueueSnackbar } = useSnackbar();
  const [showDelete, setShowDelete] = useState(false);
  function dragStart(e: DragEvent) {
    e.stopPropagation();
    try {
      const template = JSON.parse(templateStr);
      const { component, attribute = {}, api = {}, event = [] } = template;
      const dragInfo = {
        componentName: component.name,
        cover,
        attribute,
        api,
        event
      };
      e.dataTransfer.setData('dragInfo', JSON.stringify(dragInfo));
    } catch (e) {
      enqueueSnackbar(`模板解析失败`, {
        variant: 'warning'
      });
    }
  }
  function handleDelete() {
    confirm({ title: '❗️  警告', description: `删除之后不可恢复，确认要删除模板吗？`, confirmationText: '确认', cancellationText: '取消' })
      .then(() => {
        deleteTemplate(uuid).then(({ isOk, msg }) => {
          if (isOk) {
            enqueueSnackbar(`删除成功`, {
              variant: 'success'
            });
            onChange?.();
          } else {
            enqueueSnackbar(`删除失败：${msg}`, {
              variant: 'warning'
            });
          }
        })
          .catch(error => {
            enqueueSnackbar(`删除失败：${Array.isArray(error?.error) ? error?.error.shift() : error.msg}`, {
              variant: 'error'
            });
          });
      })
      .catch(() => {});
  }
  return (
    <div className='w-full h-36 relative rounded border border-solid mb-2 cursor-pointer bg-neutral-100 dark:bg-neutral-800 border-zinc-300 dark:border-zinc-500 '>
      <div
        className='h-6 z-10 dark:text-zinc-100 text-zinc-800  dark:bg-zinc-700 bg-zinc-300 bg-opacity-70'
        onMouseLeave={() => { setShowDelete(false); }} onMouseEnter={() => { setShowDelete(true); }}
      >
        <Tooltip title={name}>
          <b className='overflow-hidden whitespace-nowrap flex flex-row items-center text-xs p-1 absolute top-0 left-0 right-10 pl-2'>
            <i className='border-0 border-l-2 border-dashed border-yellow-500 block bg-amber-500 mr-2 w-1 h-3'></i>
            {name}
          </b>
        </Tooltip>
        <Tooltip title={`删除模板`}>
          <DeleteForever className={`${showDelete ? '' : 'w-0 overflow-hidden'} transition-all duration-300 absolute top-1 right-2 text-base`} onClick={handleDelete}/>
        </Tooltip>
      </div>
      <div
        className='top-6 absolute left-0 right-0 bottom-6'
        onDragStart={dragStart}
      >
        <Image
          alt=''
          src={cover}
          fill
          sizes='100%'
          style={{
            userSelect: 'none',
            objectFit: 'cover'
          }}
        />
      </div>
      <div className='absolute bottom-0 left-0 right-0 pl-2 h-6 dark:bg-zinc-700 bg-zinc-300 '>
        <Tooltip title={`创建时间`}>
          <span className='text-xs dark:text-zinc-300 text-zinc-700 overflow-ellipsis'>
           {createDate && dateFormat(createDate, 'Y-M-D h:m')}
          </span>
        </Tooltip>
        <Tooltip title={`创建者：${createUser?.name}`}>
          <Avatar className='border border-solid border-amber-600 w-5 h-5 absolute top-0.5 bottom-0.5 right-2' src={createUser?.avatar} />
        </Tooltip>
      </div>
    </div>
  );
}