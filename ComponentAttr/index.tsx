import AttributeChild from '@/components/Design/components/AttributeChild';
import { useAppSelector } from '@/store';
import { useEffect, useState } from 'react';
import { delay } from '@/utils/common';
interface ComponentAttrProps {
  show: boolean
}
export default function ComponentAttr({ show }: ComponentAttrProps) {
  const selectIds = useAppSelector(state => state.design.selectIds);
  const [selectId = ''] = selectIds;
  const showAttr = useAppSelector(state => state.global.showAttr);
  const [firstDelay, setFirstDelay] = useState('delay-300');

  useEffect(() => {
    // 留出首次动画时间
    delay(300).then(() => {
      setFirstDelay('');
    });
  }, [show]);

  return (
    <div className={`${show && showAttr ? 'w-72' : 'w-0'} ${firstDelay} duration-300 transition-all overflow-hidden`}>
      <div className={`w-72 attribute h-full design-line border-l shrink-0 hideScroll `} onClick={e => e.stopPropagation()} >
        <AttributeChild key={selectId} />
      </div>
    </div>
  );
}