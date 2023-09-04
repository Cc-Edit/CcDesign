import Image from 'next/image';
import { DragEvent } from 'react';
interface BaseItemProps {
  cover?: string
  title?: string
  componentName?: string
  attribute?: Record<string, any>
  event?: Record<string, any>[]
  api?: Record<string, any>
}
export default function BaseItem(props: BaseItemProps) {
  const { title, cover = '/baseComponent.png', attribute = {}, api = {}, event = [] } = props;
  const { componentName } = attribute;
  const titleEle = title ? <div className='absolute top-0 left-0 right-0 h-6 leading-6 pl-2 text-xs bg-opacity-60 bg-zinc-300 dark:bg-zinc-600 z-10'>
    {title}
  </div> : '';
  function dragStart(e: DragEvent) {
    e.stopPropagation();
    const dragInfo = {
      componentName,
      name: title,
      cover,
      attribute,
      api,
      event
    };
    e.dataTransfer.setData('dragInfo', JSON.stringify(dragInfo));
  }
  return (
    <div className='w-full h-32 relative rounded border border-solid mb-2 cursor-pointer bg-neutral-100 dark:bg-neutral-800 border-zinc-300 dark:border-zinc-500 hover:bg-neutral-200 dark:hover:bg-neutral-700'>
      {titleEle}
      <div
        className={`${title ? 'top-6' : 'top-0'} absolute left-0 right-0 bottom-0`}
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
    </div>
  );
}