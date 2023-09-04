import Image from 'next/image';
import { MouseEvent, useEffect, useRef } from 'react';
import { ListItemButton, Tooltip } from '@mui/material';
import IconLoader from '@/components/Design/DynamicLoader/IconLoader';
import { Component } from '@/store/slice/Design';

interface TreeItemProp {
  component: Component
  attrItem: Record<string, any>
  isSelect: boolean,
  handleListItemClick: (event:MouseEvent, selectId: string) => void,
  handleEvents: (event:MouseEvent, type: string, component: Component, componentAttr: Record<string, any>) => void
}
export default function TreeItem({ component, isSelect, attrItem, handleListItemClick, handleEvents }: TreeItemProp) {
  const listItem = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (listItem.current && isSelect) {
      listItem.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isSelect]);
  return (
    <ListItemButton
      className='mb-1 p-0'
      key={component.id}
      selected={isSelect}
      onClick={event => handleListItemClick(event, component.id)}>
      <div ref={listItem} className='w-full h-14 rounded-sm flex flex-row justify-start items-center'>
        <div className='relative w-16 ml-2 mr-2 h-10 border border-solid border-neutral-200 dark:border-neutral-600'>
          <Image
            alt='封面'
            src={attrItem.cover}
            fill
            sizes='100vw'
            style={{
              objectFit: 'contain',
              userSelect: 'none',
              pointerEvents: 'none'
            }}
          />
        </div>
        <div className='p-1 h-full flex-1 flex flex-col justify-center items-start relative'>
          <span className={`${isSelect ? 'text-xs' : 'text-sm'} transition-all duration-300 overflow-ellipsis`}>{attrItem.name}</span>
          <div className={`${isSelect ? 'h-8' : 'h-0'}  transition-all duration-300 overflow-hidden flex w-full flex-row justify-start items-end`}>
            <Tooltip title='删除元素'>
              <div className='w-5 h-5'>
                <IconLoader className='mr-1' icon='DeleteForever' onClick={(e: MouseEvent) => handleEvents(e, 'delete', component, attrItem)} />
              </div>
            </Tooltip>
            <Tooltip title='复制元素'>
              <div className='w-5 h-5'>
                <IconLoader className='mr-1' icon='CopyAll' onClick={(e: MouseEvent) => handleEvents(e, 'copy', component, attrItem)} />
              </div>
            </Tooltip>
            <Tooltip title='保存为组件模板'>
              <div className='w-5 h-5'>
                <IconLoader className='mr-1' icon='Store' onClick={(e: MouseEvent) => handleEvents(e, 'template', component, attrItem)} />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </ListItemButton>
  );
}