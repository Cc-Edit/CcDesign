import { MenuItem } from '@/types';
import { BarChart } from './menu/barChart';
import { LineChart } from './menu/lineChart';
import { PieChart } from './menu/pieChart';
import { ScatterChart } from './menu/scatterChart';
import { FunnelChart } from './menu/funnelChart';
import { SpeedChart } from './menu/speedChart';
import { DropletChart } from './menu/dropletChart';
export const ChartData: MenuItem[] = [
  ...BarChart,
  ...LineChart,
  ...PieChart,
  ...ScatterChart,
  ...FunnelChart,
  ...SpeedChart,
  ...DropletChart
];