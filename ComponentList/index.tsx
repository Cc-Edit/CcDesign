import { MenuData } from '@/components/Design/data/menuData';
import TabList from '@/components/Design/components/TabList';

export default function ComponentList() {
  return (
    <div className='h-full shrink-0 flex'>
      <TabList data={MenuData} defaultIndex={2} />
    </div>
  );
}