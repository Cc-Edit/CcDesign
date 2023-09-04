import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectComponents } from '@/store/slice/Design';

// 元素选中与取消选中
const useSelectComponent = () => {
  const dispatch = useAppDispatch();
  const selectIds = useAppSelector(state => state.design.selectIds);
  const [target, setTarget] = useState<HTMLElement[]>([]);

  useEffect(() => {
    const selectElements: HTMLElement[] = [];
    selectIds.forEach(id => {
      const ele = document.getElementById(`${id}`);
      ele && selectElements.push(ele);
    });
    setTarget(selectElements);
  }, [selectIds]);

  function cancelSelect(e: Event) {
    const target = e.target as HTMLDivElement;
    const isCanvasEle = `${target?.className}`.indexOf('canvasEle') > -1;
    // 点击的不是画板元素
    if (target !== document.body && !isCanvasEle && selectIds && selectIds.length > 0) {
      dispatch(selectComponents([]));
    }
  }

  useEffect(() => {
    document.addEventListener('click', cancelSelect);
    return () => {
      document.removeEventListener('click', cancelSelect);
    };
  }, [selectIds]);

  return {
    target
  };
};

export default useSelectComponent;
