import { MenuItem } from '@/types';

export const ScatterChart: MenuItem[] = [
  {
    key: 'ScatterChart',
    icon: 'ScatterPlot',
    tooltip: '散点图',
    children: [
      {
        component: 'GridList',
        props: {
          dataConfig: {
            type: 'static',
            data: [
              {
                title: '基础散点图',
                cover: '/cover/charts/pointChart.png',
                api: {
                  data: [
                    [1.1, 1.04],
                    [2.0, 2.04],
                    [3.0, 3.34],
                    [5.0, 4.04],
                    [7.0, 7.94],
                    [10.0, 8.04],
                    [8.07, 6.95],
                    [13.0, 7.58],
                    [9.05, 8.81],
                    [11.0, 8.33],
                    [14.0, 7.66],
                    [13.4, 6.81]
                  ],
                  baseSeriesOption: {
                    type: 'scatter',
                    symbolSize: 20
                  }
                },
                event: [],
                attribute: {
                  componentName: 'Echarts',
                  useConfig: 'basePie',
                  position: {
                    width: 440,
                    height: 210
                  },
                  style: {
                    backgroundColor: {
                      r: 255,
                      g: 255,
                      b: 255,
                      a: 1
                    }
                  },
                  options: {
                    title: {
                      textStyle: {
                        fontSize: 11
                      },
                      text: '基础散点图'
                    },
                    legend: {
                      show: false,
                      type: 'plain'
                    },
                    grid: {
                      show: true,
                      containLabel: true,
                      left: 10,
                      top: 30,
                      right: 10,
                      bottom: 5
                    },
                    tooltip: {}
                  }
                }
              }
            ]
          },
          itemComponent: 'BaseItem',
          itemClass: 'w-full',
          title: 'ECharts'
        }
      }
    ]
  }
];