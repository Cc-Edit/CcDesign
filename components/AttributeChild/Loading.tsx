import { CircularProgress } from '@mui/material';

export default function Loading({ text = '加载中···' }) {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <CircularProgress />
      <span className='h-8 leading-8 text-xs'>{text}</span>
    </div>
  );
}