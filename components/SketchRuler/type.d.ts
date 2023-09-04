import { MouseEvent } from 'react';

export type Lines = {
  v: number[]
  h: number[]
}
type CanvasConfig = {
  ratio: number
  bgColor: string
  longfgColor: string
  shortfgColor: string
  fontColor: string
  shadowColor: string
  lineColor: string
  borderColor: string
}
export interface SketchRulerProps {
  scale: number
  ratio: number
  thick: number
  width: number
  height: number
  startX: number
  startY: number
  isShowReferLine: boolean
  cornerActive: boolean
  horLineArr: number[]
  verLineArr: number[]
  shadow: {
    x: number
    y: number
    width: number
    height: number
  }
  palette: {
    bgColor: string
    longfgColor: string
    shortfgColor: string
    fontColor: string
    shadowColor: string
    lineColor: string
    borderColor: string
  }
  handleLineChange: (lines: Lines) => void
  onCornerClick: (e: MouseEvent) => void
  handleShowReferLine: () => void
}

export interface RulerWrapperProps {
  vertical?: boolean
  scale: number
  thick: number
  width: number
  height: number
  start: number
  lines: number[]
  selectStart: number
  selectLength: number
  canvasConfigs: CanvasConfig,
  onLineChange: (lines: number[], vertical: boolean) => void
  isShowReferLine: boolean
  handleShowReferLine: () => void
}
export interface CanvasRulerProps {
  vertical: boolean
  start: number
  scale: number
  width: number
  height: number
  canvasConfigs: CanvasConfig,
  selectStart: number
  selectLength: number
  onAddLine: (offset: number) => void
  onIndicatorShow:(offset: number) => void
  onIndicatorMove: (offset: number) => void
  onIndicatorHide: () => void
}
export interface LineProps {
  index: number
  start: number
  vertical: boolean
  thick: number
  lineColor: string
  scale: number
  value: number
  onRemove: (index: number) => void
  onMouseDown: () => void
  onRelease: (value: number, index: number) => void
}