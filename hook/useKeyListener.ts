import { useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { copyComponents, deleteComponents, pasteComponent, selectComponents } from '@/store/slice/Design';

const useKeyListener = () => {
  const dispatch = useAppDispatch();
  const selectIds = useAppSelector(state => state.design.selectIds);
  const copyId = useAppSelector(state => state.design.copyId);
  const attribute = useAppSelector(state => state.design.attribute);
  function deleteComponent(target: HTMLElement) {
    if (selectIds && selectIds.length > 0) {
      dispatch(deleteComponents(selectIds));
      dispatch(selectComponents([]));
    }
  }
  function copyComponentId() {
    if (selectIds && selectIds.length === 1) {
      const [selectId] = selectIds;
      dispatch(copyComponents(selectId));
    }
  }
  function selectAllComponent() {
    dispatch(selectComponents(Object.keys(attribute)));
  }
  const handleKeyup = useCallback((event: KeyboardEvent) => {
    const { target, altKey, ctrlKey, shiftKey, metaKey, key } = event;
    // 输入框内的按键事件屏蔽
    if (['TEXTAREA', 'INPUT'].includes(((target as HTMLElement)?.tagName))) {
      return;
    }
    switch (key.toLowerCase()) {
      case 'backspace':
        deleteComponent(target as HTMLElement);
        break;
      case 'a':
        if (ctrlKey || metaKey) {
          selectAllComponent();
        }
        break;
      case 'c':
        if (ctrlKey || metaKey) {
          copyComponentId();
        }
        break;
      case 'v':
        if (ctrlKey || metaKey) {
          if (copyId) {
            dispatch(pasteComponent(''));
          }
        }
        break;
      default:
        break;
    }
  }, [copyId, attribute, selectIds]);
  useEffect(() => {
    document.addEventListener('keydown', handleKeyup);
    return () => {
      document.removeEventListener('keydown', handleKeyup);
    };
  }, [selectIds]);
};
export default useKeyListener;