import { lazy, Suspense } from 'react';
const DeleteForever = lazy(() => import('@mui/icons-material/DeleteForever'));
const BubbleChart = lazy(() => import('@mui/icons-material/BubbleChart'));
const SsidChart = lazy(() => import('@mui/icons-material/SsidChart'));
const Equalizer = lazy(() => import('@mui/icons-material/Equalizer'));
const Extension = lazy(() => import('@mui/icons-material/Extension'));
const Public = lazy(() => import('@mui/icons-material/Public'));
const AutoGraph = lazy(() => import('@mui/icons-material/AutoGraph'));
const Layers = lazy(() => import('@mui/icons-material/Layers'));
const TableChart = lazy(() => import('@mui/icons-material/TableChart'));
const ListAlt = lazy(() => import('@mui/icons-material/ListAlt'));
const Widgets = lazy(() => import('@mui/icons-material/Widgets'));
const AutoAwesomeMosaic = lazy(() => import('@mui/icons-material/AutoAwesomeMosaic'));
const SwapVert = lazy(() => import('@mui/icons-material/SwapVert'));
const SwapHoriz = lazy(() => import('@mui/icons-material/SwapHoriz'));
const ZoomOutMap = lazy(() => import('@mui/icons-material/ZoomOutMap'));
const DoDisturb = lazy(() => import('@mui/icons-material/DoDisturb'));
const HelpOutline = lazy(() => import('@mui/icons-material/HelpOutline'));
const AlignHorizontalCenter = lazy(() => import('@mui/icons-material/AlignHorizontalCenter'));
const AlignHorizontalLeft = lazy(() => import('@mui/icons-material/AlignHorizontalLeft'));
const AlignHorizontalRight = lazy(() => import('@mui/icons-material/AlignHorizontalRight'));
const AlignVerticalBottom = lazy(() => import('@mui/icons-material/AlignVerticalBottom'));
const AlignVerticalTop = lazy(() => import('@mui/icons-material/AlignVerticalTop'));
const AlignVerticalCenter = lazy(() => import('@mui/icons-material/AlignVerticalCenter'));
const ControlCamera = lazy(() => import('@mui/icons-material/ControlCamera'));
const FormatItalic = lazy(() => import('@mui/icons-material/FormatItalic'));
const Title = lazy(() => import('@mui/icons-material/Title'));
const CopyAll = lazy(() => import('@mui/icons-material/CopyAll'));
const VerticalAlignTop = lazy(() => import('@mui/icons-material/VerticalAlignTop'));
const VerticalAlignBottom = lazy(() => import('@mui/icons-material/VerticalAlignBottom'));
const Store = lazy(() => import('@mui/icons-material/Store'));
const PieChart = lazy(() => import('@mui/icons-material/PieChart'));
const ScatterPlot = lazy(() => import('@mui/icons-material/ScatterPlot'));
const FilterAlt = lazy(() => import('@mui/icons-material/FilterAlt'));
const Speed = lazy(() => import('@mui/icons-material/Speed'));
const WaterDrop = lazy(() => import('@mui/icons-material/WaterDrop'));
const SmartButton = lazy(() => import('@mui/icons-material/SmartButton'));
const Pending = lazy(() => import('@mui/icons-material/Pending'));
const BorderOuter = lazy(() => import('@mui/icons-material/BorderOuter'));
const FilterVintage = lazy(() => import('@mui/icons-material/FilterVintage'));
const IconMap: Record<string, any> = {
  DeleteForever,
  BubbleChart,
  SsidChart,
  Equalizer,
  Extension,
  Public,
  AutoGraph,
  Layers,
  TableChart,
  ListAlt,
  Widgets,
  SwapVert,
  SwapHoriz,
  ZoomOutMap,
  DoDisturb,
  HelpOutline,
  AlignHorizontalCenter,
  AlignHorizontalLeft,
  AlignHorizontalRight,
  AlignVerticalBottom,
  AlignVerticalCenter,
  AlignVerticalTop,
  ControlCamera,
  FormatItalic,
  Title,
  PieChart,
  CopyAll,
  VerticalAlignTop,
  ScatterPlot,
  VerticalAlignBottom,
  Store,
  FilterAlt,
  Speed,
  WaterDrop,
  SmartButton,
  Pending,
  BorderOuter,
  FilterVintage,
  AutoAwesomeMosaic
};
type IconLoaderProp = {
  className?: string,
  icon: string,
  onClick?: Function
}
export default function IconLoader({ icon, className, onClick }: IconLoaderProp) {
  const IconEle = IconMap[icon] || IconMap.HelpOutline;
  return (
    <Suspense fallback={<div>Hi, This page is Loading...</div>}>
      {
        <IconEle className={className} onClick={onClick} fontSize='small' />
      }
    </Suspense>
  );
}