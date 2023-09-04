import { MouseEvent } from 'react';
import RulerWrapper from './RulerWrapper';
import { SketchRulerProps } from './type';
import EyesIcon from '@/components/Svg/EyesIcon';
import { Tooltip } from '@mui/material';

export default function SketchRuler(props: SketchRulerProps) {
  const { ratio, palette } = props;
  const canvasConfigs = {
    ratio,
    bgColor: palette.bgColor,
    longfgColor: palette.longfgColor,
    shortfgColor: palette.shortfgColor,
    fontColor: palette.fontColor,
    shadowColor: palette.shadowColor,
    lineColor: palette.lineColor,
    borderColor: palette.borderColor
  };

  function preventDefault(e: MouseEvent) {
    e.preventDefault();
  }
  // 辅助线新增函数
  function onLineChange(arr: number[], vertical: boolean) {
    const { horLineArr, verLineArr, handleLineChange } = props;
    const newLines = vertical
      ? { h: horLineArr, v: [...arr] }
      : { h: [...arr], v: verLineArr };
    handleLineChange(newLines);
  }

  const {
    width, height, scale, handleLineChange,
    thick, shadow, startX, startY, cornerActive,
    horLineArr, verLineArr, onCornerClick,
    palette: { bgColor, borderColor },
    isShowReferLine, handleShowReferLine
  } = props;

  const { x, y, width: w, height: h } = shadow;

  const commonProps = {
    scale,
    canvasConfigs,
    onLineChange,
    isShowReferLine,
    handleShowReferLine
  };

  return (
    <div id='mb-ruler' className='sketch_ruler' onContextMenu={preventDefault}>
      {/* 水平方向 */}
      <RulerWrapper thick={thick} width={width} height={thick} start={startX} lines={horLineArr} selectStart={x} selectLength={w} {...commonProps} />
      {/* 竖直方向 */}
      <RulerWrapper thick={thick} width={thick} height={height} start={startY} lines={verLineArr} selectStart={y} selectLength={h} vertical {...commonProps} />
      <Tooltip title={isShowReferLine ? '隐藏辅助线' : '显示辅助线'}>
        <div className='sketch_corner' style={{ backgroundColor: bgColor, width: `${thick}px`, height: `${thick}px`, borderColor }} onClick={onCornerClick}>
          <EyesIcon close={!isShowReferLine} color={'#d4d4d8'} size={15}></EyesIcon>
        </div>
      </Tooltip>
    </div>
  );
}

SketchRuler.defaultProps = {
  isShowReferLine: true,
  handleShowReferLine: () => {},
  thick: 16,
  horLineArr: [100, 200],
  verLineArr: [100, 200],
  scale: 1,
  startX: 0,
  startY: 0,
  ratio: 1,
  shadow: {
    x: 200,
    y: 100,
    width: 200,
    height: 400
  },
  palette: {
    bgColor: 'rgba(225,225,225, 0)', // ruler bg color
    longfgColor: '#BABBBC', // ruler longer mark color
    shortfgColor: '#C8CDD0', // ruler shorter mark color
    fontColor: '#7D8694', // ruler font color
    shadowColor: '#E8E8E8', // ruler shadow color
    lineColor: '#EB5648',
    borderColor: '#DADADC'
  }
};