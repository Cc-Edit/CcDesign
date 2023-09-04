import ThemeSwitch from '@/components/ThemeSwitch';
import HeadMenu from '@/components/HeadMenu';
import { ArrowBack } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/store';
interface DesignHeadProps {
  show: boolean
}
export default function DesignHead({ show }: DesignHeadProps) {
  const router = useRouter();
  const pageData = useAppSelector(state => state.design.page);
  const { title } = pageData;
  function goBack() {
    router.back();
  }
  return (
    <div className={`${show ? 'h-12' : 'h-0'} flex shrink-0  w-full relative design-line border-b overflow-hidden duration-300 delay-100 transition-all`}>
      <div className='h-12 flex justify-center items-center ml-2 cursor-pointer pl-2 pr-2' onClick={goBack}>
        <ArrowBack className='cursor-pointer' />
      </div>
      <h3 className='mb-0 mt-0 absolute text-base left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
        {
          title
        }
      </h3>
      <HeadMenu className='absolute top-1/2 -translate-y-1/2 right-20' />
      <ThemeSwitch className='absolute right-4 top-1/2 -translate-y-1/2'/>
    </div>
  );
}