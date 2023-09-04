import { MenuItem } from '@/types';

export const DropletChart: MenuItem[] = [
  {
    key: 'DropletChart',
    icon: 'WaterDrop',
    tooltip: '水位图',
    children: [
      {
        component: 'GridList',
        props: {
          dataConfig: {
            type: 'static',
            data: [
              {
                title: '水位图',
                cover: '/cover/charts/dropletChart.png',
                api: {
                  data: [
                    {
                      value: 0.5,
                      itemStyle: {
                        color: '#294D99'
                      }
                    },
                    {
                      value: 0.3,
                      itemStyle: {
                        color: '#5980d2'
                      }
                    },
                    {
                      value: 0.4,
                      itemStyle: {
                        color: '#6f99f3'
                      }
                    }
                  ],
                  baseSeriesOption: {
                    type: 'liquidFill',
                    itemStyle: {
                      opacity: 0.6
                    },
                    label: {
                      show: true,
                      color: '#294D99',
                      insideColor: '#fff',
                      fontSize: 20,
                      fontWeight: 'bold',
                      align: 'center',
                      baseline: 'middle',
                      position: 'inside'
                    },
                    emphasis: {
                      itemStyle: {
                        opacity: 0.9
                      }
                    }
                  }
                },
                event: [],
                attribute: {
                  componentName: 'Echarts',
                  useConfig: 'dropletChart',
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
                      text: '水位图'
                    }
                  }
                }
              }
            ]
          },
          itemComponent: 'BaseItem',
          itemClass: 'w-full',
          title: 'ECharts'
        }
      },
      {
        component: 'GridList',
        props: {
          dataConfig: {
            type: 'static',
            data: [
              {
                title: '水位图',
                cover: '/cover/datav/chart/DvWaterLevelPond.png',
                api: {
                  data: [10, 30, 60]
                },
                event: [],
                attribute: {
                  componentName: 'DvWaterLevelPond',
                  useConfig: 'baseWaterLevelPond',
                  position: {
                    width: 220,
                    height: 105
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

                  }
                }
              },
              {
                title: '进度池',
                cover: '/cover/datav/chart/DvPercentPond.png',
                api: {},
                event: [],
                attribute: {
                  componentName: 'DvPercentPond',
                  useConfig: 'basePercentPond',
                  position: {
                    width: 220,
                    height: 105
                  },
                  style: {
                    backgroundColor: {
                      r: 88,
                      g: 88,
                      b: 88,
                      a: 1
                    }
                  },
                  options: {}
                }
              }
            ]
          },
          itemComponent: 'BaseItem',
          itemClass: 'w-full',
          title: 'DataV Chart'
        }
      }
    ]
  }
];