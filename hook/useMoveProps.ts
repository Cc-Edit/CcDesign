import { MoveableProps } from 'react-moveable';
import { useAppSelector } from '@/store';

const otherOptions = {
  useResizeObserver: false, // 当元素大小变化后自动调节外边框大小
  checkInput: false, // 允许输入框输入
  edge: [],
  zoom: 1, // 操作手柄比例
  origin: false // 中心点是否显示
};
const snapOptions = {
  snappable: true, // 边缘吸附
  snapThreshold: 0, // 吸附距离
  snapGap: true, // 画块辅助线
  snapElement: true, // 基于元素的辅助线
  snapCenter: true, // 中心辅助线
  snapDigit: 0, // 吸附距离
  snapVertical: true, // 垂直辅助线
  snapHorizontal: true, // 水平辅助线
  isDisplaySnapDigit: true, // 是否显示辅助线距离
  bounds: { left: 0, top: 0, right: 0, bottom: 0, position: 'css' }, // 操作区域
  snapDirections: { left: true, top: true, right: true, bottom: true, center: true, middle: true },
  elementSnapDirections: { left: true, top: true, right: true, bottom: true, center: true, middle: true }
};
const defaultDragProp = {
  draggable: true,
  edgeDraggable: false, // 是否可以拖动边框移动
  hideThrottleDragRotateLine: true, // 隐藏辅助线
  throttleDragRotate: 1, // 节流旋转角度
  startDragRotate: 0, // 起始角度
  throttleDrag: 1 // 节流开关
};
const defaultResizeProp = {
  resizable: true,
  keepRatio: false, // 保持宽高比例
  throttleResize: 1, // resize 节流
  renderDirections: ['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se']
};
const defaultRotateProp = {
  rotatable: true,
  rotationPosition: 'top',
  throttleRotate: 1 // Rotate 节流
};
// moveable options处理
const useMoveProps = () => {
  const selectIds = useAppSelector(state => state.design.selectIds);
  const linesConfig = useAppSelector(state => state.design.lines);
  const pageConfig = useAppSelector(state => state.design.page);
  const { width, height } = pageConfig;
  const { v = [], h = [] } = linesConfig;
  const verticalGuidelines = [0, height, ...h]; // 水平辅助线作用于垂直方向
  const horizontalGuidelines = [0, width, ...v];// 垂直辅助线作用于水平方向
  const selectElementStr = selectIds.map(id => `[id='${id}']`).join('');
  const elementGuidelines = selectElementStr ? Array.from(document.querySelectorAll(`.canvasEle:not(${selectElementStr})`)) : [];
  return {
    moveProp: {
      ...defaultDragProp,
      ...defaultRotateProp,
      ...otherOptions,
      ...defaultResizeProp,
      ...snapOptions,
      verticalGuidelines,
      horizontalGuidelines,
      elementGuidelines
    } as MoveableProps
  };
};

export default useMoveProps;
