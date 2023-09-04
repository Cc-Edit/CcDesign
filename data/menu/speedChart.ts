import { MenuItem } from '@/types';

export const SpeedChart: MenuItem[] = [
  {
    key: 'SpeedChart',
    icon: 'Speed',
    tooltip: '仪表盘',
    children: [
      {
        component: 'GridList',
        props: {
          dataConfig: {
            type: 'static',
            data: [
              {
                title: '基础仪表盘',
                cover: '/cover/charts/speedChart.png',
                api: {
                  data: [
                    {
                      value: 50,
                      name: 'SCORE'
                    }
                  ],
                  baseSeriesOption: {
                    type: 'gauge',
                    detail: {
                      formatter: '{value}',
                      valueAnimation: true,
                      fontSize: 20,
                      offsetCenter: [0, '50%']
                    }
                  }
                },
                event: [],
                attribute: {
                  componentName: 'Echarts',
                  useConfig: 'baseGauge',
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
                      text: '基础仪表盘'
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