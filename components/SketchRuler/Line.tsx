import { useState, MouseEvent } from 'react';
import { LineProps } from './type';
export default function Line(props: LineProps) {
  const { vertical, start, index, thick, scale, onMouseDown, onRelease, onRemove, lineColor } = props;
  const [stateValue, setValue] = useState(props.value);

  function handleDown(event: MouseEvent) {
    const startD = vertical ? event.clientY : event.clientX;
    onMouseDown();
    const onMove = (e: MouseEvent) => {
      const currentD = vertical ? e.clientY : e.clientX;
      const newValue = Math.round(stateValue + (currentD - startD) / scale);
      setValue(newValue);
    };
    const onEnd = () => {
      onRelease(stateValue, index);
      // @ts-ignore
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onEnd);
    };
    // @ts-ignore
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd);
  }
  function handleRemove() {
    onRemove(index);
  }

  const offset = (stateValue - start) * scale;
  if (offset < 0) return null;
  const lineStyle = vertical ? { top: offset } : { left: offset };

  return (
    <div className='canvas_line' style={{
      ...lineStyle,
      borderColor: lineColor,
      cursor: vertical ? 'ns-resize' : 'ew-resize'
    }} onMouseDown={handleDown}>
      <div className='action' style={{
        ...(vertical ? { left: `${thick}px` } : { top: `${thick}px` })
      }}>
        <span className='del' onClick={handleRemove}>&times;</span>
        <span className='value'>{stateValue}</span>
      </div>
    </div>
  );
}