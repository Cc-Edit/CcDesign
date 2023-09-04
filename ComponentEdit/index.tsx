import Sketch from '@/components/Design/components/Sketch';
import useKeyListener from '@/components/Design/hook/useKeyListener';
interface ComponentEditProps {
  show: boolean
}
export default function ComponentEdit({ show }: ComponentEditProps) {
  useKeyListener();
  return (
    <div className='flex-1 overflow-hidden z-10 relative'>
      <Sketch />
    </div>
  );
}