import { SketchRulerProps } from '@/components/Design/components/SketchRuler/type';

export const DarkPalette = {
  bgColor: '#3f3f46', // ruler bg color
  longfgColor: '#fafafa', // ruler longer mark color
  shortfgColor: '#e4e4e7', // ruler shorter mark color
  fontColor: '#cbd5e1', // ruler font color
  shadowColor: '#8796A5', // ruler shadow color
  lineColor: '#ea580c',
  borderColor: '#71717a'
};

export const LightPalette = {
  bgColor: '#f4f4f5', // ruler bg color
  longfgColor: '#a1a1aa', // ruler longer mark color
  shortfgColor: '#d4d4d8', // ruler shorter mark color
  fontColor: '#94a3b8', // ruler font color
  shadowColor: '#94a3b8', // ruler shadow color
  lineColor: '#ef4444',
  borderColor: '#d4d4d8'
};

export const sketchProps: SketchRulerProps = {
  ratio: 2,
  scale: 2,
  startX: 0,
  startY: 0,
  thick: 16,
  width: 1000,
  height: 1000,
  shadow: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  horLineArr: [],
  verLineArr: [],
  isShowReferLine: true, // 显示参考线
  cornerActive: true,
  palette: LightPalette,
  handleLineChange: () => {},
  onCornerClick: () => {},
  handleShowReferLine: () => {}
};