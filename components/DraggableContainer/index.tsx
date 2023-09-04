import Moveable from 'react-moveable';
import style from './DraggableContainer.module.css';
import ComponentItem from '@/components/Design/components/ComponentItem';
import { useAppSelector } from '@/store';
import useSelectComponent from '@/components/Design/hook/useSelectComponent';
import useMoveEvents from '@/components/Design/hook/useMoveEvents';
import useAddComponent from '@/components/Design/hook/useAddComponent';
import useMoveProps from '@/components/Design/hook/useMoveProps';

interface DraggableContainerProp {
  scale: number
}
export default function DraggableContainer({ scale }:DraggableContainerProp) {
  const layoutData = useAppSelector(state => state.design.layout);
  const selectIds = useAppSelector(state => state.design.selectIds);
  const { target } = useSelectComponent();
  const { dragOver, containerRef, drop } = useAddComponent(scale);
  const { onDrag, onRotate, onResize, onResizeEnd, onDragEnd, onRotateEnd } = useMoveEvents();
  const { moveProp } = useMoveProps();
  const elements = layoutData.map(component => {
    const { id } = component;
    const isSelect = selectIds.indexOf(id) > -1;
    return <ComponentItem key={id} component={component} isSelect={isSelect} ></ComponentItem>;
  });
  return (
    <div id='canvas' ref={containerRef} className={style.root} onDragOver={dragOver} onDrop={drop}>
      {
        elements
      }
      <Moveable
          target={target}
          {...moveProp}
          {...{ onDrag, onRotate, onResize, onResizeEnd, onDragEnd, onRotateEnd }}
          zoom={1 / scale}
        />
    </div>
  );
}