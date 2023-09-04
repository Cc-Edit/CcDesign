import { useState } from 'react';
import CanvasRuler from './CanvasRuler';
import Line from './Line';
import { RulerWrapperProps } from './type';

export default function RulerWrapper(props: RulerWrapperProps) {
  const { vertical = false, start, scale, width, thick, height, lines, onLineChange, handleShowReferLine, isShowReferLine, selectStart, selectLength, canvasConfigs } = props;
  const { lineColor } = canvasConfigs;
  const [state, setState] = useState({
    isDraggingLine: false,
    showIndicator: false,
    value: 0
  });
  function handleIndicatorShow(value: number) {
    !state.isDraggingLine && setState({ ...state, showIndicator: true, value });
  }
  function handleIndicatorMove(value: number) {
    state.showIndicator && setState({ ...state, value });
  }
  function handleIndicatorHide() {
    setState({ ...state, showIndicator: false });
  }
  function handleNewLine(value: number) {
    onLineChange([...lines, value], vertical);
    !isShowReferLine && handleShowReferLine();
  }

  function handleLineDown() {
    setState({
      ...state,
      isDraggingLine: true
    });
  }
  function handleLineRemove(index: number) {
    const newLine = [...lines];
    newLine.splice(index, 1);
    onLineChange(newLine, vertical);
  }

  function handleLineRelease(value: number, index: number) {
    setState({
      ...state,
      isDraggingLine: false
    });
    // 左右或上下超出时, 删除该条对齐线
    const offset = value - start;
    const maxOffset = (vertical ? height : width) / scale;

    if (offset < 0 || offset > maxOffset) {
      handleLineRemove(index);
    } else {
      const newLine = [...lines];
      newLine[index] = value;
      onLineChange(newLine, vertical);
    }
  }

  const { showIndicator, value } = state;
  const className = vertical ? 'v_container' : 'h_container';
  const indicatorOffset = (value - start) * scale;
  const indicatorStyle = vertical ? { top: indicatorOffset, borderColor: lineColor } : { left: indicatorOffset, borderColor: lineColor };
  const style = {
    left: vertical ? 0 : `${thick}px`,
    top: vertical ? `${thick}px` : 0,
    width: vertical ? `${thick + 1}px` : `calc(100% - ${thick}px)`,
    height: vertical ? `calc(100% - ${thick}px)` : `${thick + 1}px`,
    borderColor: canvasConfigs.borderColor
  };
  return (
    <div className={className} style={style} >
      <CanvasRuler
        vertical={vertical}
        scale={scale}
        width={width}
        height={height}
        start={start}
        selectStart={selectStart}
        selectLength={selectLength}
        canvasConfigs={canvasConfigs}
        onAddLine={handleNewLine}
        onIndicatorShow={handleIndicatorShow}
        onIndicatorMove={handleIndicatorMove}
        onIndicatorHide={handleIndicatorHide}
      />
      {
        isShowReferLine
        && <div className='lines'>
          {
            lines.map((v: number, i: number) => <Line
                key={v + i}
                index={i}
                value={v >> 0}
                scale={scale}
                start={start}
                thick={thick}
                lineColor={lineColor}
                vertical={vertical}
                onRemove={handleLineRemove}
                onMouseDown={handleLineDown}
                onRelease={handleLineRelease}
              />
            )
          }
        </div>
      }
      {
        showIndicator
        && <div className='indicator' style={indicatorStyle}>
          <span className='value'>{value}</span>
        </div>
      }
    </div>
  );
}