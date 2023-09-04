import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { OnDragEnd, OnResizeEnd, OnResize, OnDrag, OnRotate } from 'react-moveable';
import { updateEleAttr } from '@/store/slice/Design';

// moveable 事件处理
const useMoveEvents = () => {
  const dispatch = useAppDispatch();
  const attributeMap = useAppSelector(state => state.design.attribute);
  function onResize(e: OnResize) {
    const { width, height } = e;
    Object.assign(e.datas, {
      width,
      height
    });
    e.target.style.width = `${e.width}px`;
    e.target.style.height = `${e.height}px`;
    e.target.style.transform = e.drag.transform;
  }
  function onDrag(e: OnDrag) {
    const { left, top, width, height } = e;
    Object.assign(e.datas, {
      left,
      top,
      width,
      height
    });
    e.target.style.transform = e.transform;
  }
  function onRotate(e: OnRotate) {
    const { rotate } = e;
    Object.assign(e.datas, {
      rotate: rotate % 360
    });
    e.target.style.transform = e.drag.transform;
  }
  // 调整大小结束后
  const onResizeEnd = useCallback((e: OnResizeEnd) => {
    const id = e.target.id;
    if (Object.keys(e.datas).length === 0) return;
    const { width, height } = e.datas;
    const attribute = attributeMap[id];
    const { position } = attribute;
    if (attribute) {
      dispatch(updateEleAttr({
        ...attribute,
        position: {
          ...position,
          width,
          height
        }
      }));
    }
    Object.assign(e.target.style, {
      width: `${width}px`,
      height: `${height}px`,
      transform: `rotate(${position.rotate}deg)`
    });
  }, [attributeMap]);

  // 旋转结束后
  const onRotateEnd = useCallback((e: OnResizeEnd) => {
    const id = e.target.id;
    if (Object.keys(e.datas).length === 0) return;
    const { rotate = 0 } = e.datas;
    const attribute = attributeMap[id];
    const { position } = attribute;
    if (attribute) {
      dispatch(updateEleAttr({
        ...attribute,
        position: {
          ...position,
          rotate
        }
      }));
    }
    Object.assign(e.target.style, {
      transform: `rotate(${rotate}deg)`
    });
  }, [attributeMap]);

  // 拖拽结束后
  const onDragEnd = useCallback((e: OnDragEnd) => {
    const id = e.target.id;
    if (Object.keys(e.datas).length === 0) return;
    const { left, top, width, height } = e.datas;
    const attribute = attributeMap[id];
    const { position } = attribute;
    if (attribute) {
      dispatch(updateEleAttr({
        ...attribute,
        position: {
          ...position,
          left,
          top,
          width,
          height
        }
      }));
    }
    Object.assign(e.target.style, {
      left: `${left}px`,
      top: `${top}px`,
      width: `${width}px`,
      height: `${height}px`,
      transform: `rotate(${position.rotate}deg)`
    });
  }, [attributeMap]);

  return {
    onDrag,
    onRotate,
    onResize,
    onResizeEnd,
    onRotateEnd,
    onDragEnd
  };
};

export default useMoveEvents;
