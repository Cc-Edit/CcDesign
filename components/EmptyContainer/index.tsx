import Image from 'next/image';
export default function EmptyContainer({ className = '', childClassName = 'w-52 h-52', text = '暂无数据' }: {className?:string, childClassName?: string, text?: string}) {
  return (
    <div className={`relative h-full w-full overflow-hidden flex flex-row justify-center items-center ${className}`}>
      <div className={`${childClassName} relative select-none shrink-0`}>
        <Image
          alt=''
          src='/illustrations/techny-searching-the-web-on-tablet.png'
          fill
          style={{
            userSelect: 'none',
            objectFit: 'contain'
          }}
        />
        <span className='text-zinc-400 text-sm bottom-0 left-0 right-0 absolute text-center'>{text}</span>
      </div>
    </div>
  );
}