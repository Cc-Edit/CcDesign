import { useAppDispatch } from '@/store';
import { useRef, DragEvent } from 'react';
import { getUid } from '@/components/Design/utils/common';
import { addComponent } from '@/store/slice/Design';
// 画板添加元素逻辑
const useAddComponent = (scale: number) => {
  const dispatch = useAppDispatch();
  const containerRef = useRef<HTMLDivElement>(null);

  function dragOver(event: DragEvent) {
    event.preventDefault();
  }
  function drop(e: DragEvent) {
    let dragInfo = e.dataTransfer.getData('dragInfo');
    const { componentName, cover, attribute = {}, api = {}, event = [], name } = JSON.parse(dragInfo);
    const { id: templateId = '', position = {}, ...otherProps } = attribute;
    const clientRect = (containerRef.current as HTMLDivElement).getBoundingClientRect();
    const { width = 440, height = 210 } = position;
    Object.assign(position, {
      left: parseInt(`${(e.clientX - clientRect.left) / scale}`) - (width / 2),
      top: parseInt(`${(e.clientY - clientRect.top) / scale}`) - (height / 2),
      rotate: 0,
      z: 1
    });
    const id = getUid();
    dispatch(addComponent({
      component: {
        id,
        name: componentName,
        child: []
      },
      attribute: {
        ...otherProps,
        name,
        id,
        cover,
        templateId,
        position
      },
      api,
      event
    }));
  }
  return {
    dragOver,
    drop,
    containerRef
  };
};
export default useAddComponent;