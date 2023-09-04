import { MouseEvent, useRef, useEffect } from 'react';
import { drawHorizontalRuler, drawVerticalRuler } from './utils';
import { CanvasRulerProps } from '../type';

const getValueByOffset = (offset: number, start: number, scale: number) => Math.round(start + offset / scale);

export default function CanvasRuler(props: CanvasRulerProps) {
  const { width, height, canvasConfigs, vertical, start, scale, selectStart, selectLength } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  function updateCanvasContext() {
    const { ratio } = canvasConfigs;
    if (canvasRef.current) {
      // 比例宽高
      canvasRef.current.width = width * ratio;
      canvasRef.current.height = height * ratio;
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.font = `${12 * ratio}px -apple-system, "Helvetica Neue", ".SFNSText-Regular", "SF UI Text", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Zen Hei", sans-serif`;
        ctx.lineWidth = 1;
        ctx.textBaseline = 'middle';
      }
    }
  }
  function drawRuler() {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      const options = { scale, width, height, canvasConfigs };
      if (vertical) {
        drawVerticalRuler(context as CanvasRenderingContext2D, start, { y: selectStart, height: selectLength }, options);
      } else {
        drawHorizontalRuler(context as CanvasRenderingContext2D, start, { x: selectStart, width: selectLength }, options);
      }
    }
  }

  const handleClick = (e: MouseEvent) => {
    const { vertical, scale, start, onAddLine } = props;
    const offset = vertical ? e.nativeEvent.offsetY : e.nativeEvent.offsetX;
    onAddLine(getValueByOffset(offset, start, scale));
  };
  const handleEnter = (e: MouseEvent) => {
    const { vertical, scale, start, onIndicatorShow } = props;
    const offset = vertical ? e.nativeEvent.offsetY : e.nativeEvent.offsetX;
    onIndicatorShow(getValueByOffset(offset, start, scale));
  };
  const handleMove = (e: MouseEvent) => {
    const { vertical, scale, start, onIndicatorMove } = props;
    const offset = vertical ? e.nativeEvent.offsetY : e.nativeEvent.offsetX;
    onIndicatorMove(getValueByOffset(offset, start, scale));
  };
  const handleLeave = () => props.onIndicatorHide();
  useEffect(() => {
    updateCanvasContext();
    drawRuler();
  }, [width, height, start, canvasConfigs, scale]);

  return (
    <canvas className='canvas_ruler'
            ref={canvasRef}
            onClick={handleClick}
            onMouseEnter={handleEnter}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
    />
  );
}