import { useState, useEffect } from 'react';
import DesignHead from '@/components/Design/DesignHead';
import ComponentAttr from '@/components/Design/ComponentAttr';
import ComponentList from '@/components/Design/ComponentList';
import ComponentEdit from '@/components/Design/ComponentEdit';
export default function DesignLayout() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div className='absolute left-0 right-0 top-0 bottom-0 flex flex-col overflow-hidden'>
      <DesignHead show={show} />
      <div className='flex-1 w-full flex flex-row flex-nowrap overflow-hidden'>
        <ComponentList />
        <ComponentEdit show={show} />
        <ComponentAttr show={show} />
      </div>
    </div>
  );
}