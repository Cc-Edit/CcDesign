import { MenuItem } from '@/types';

export const LineChart: MenuItem[] = [
  {
    key: 'lineChart',
    icon: 'SsidChart',
    tooltip: '折线图',
    children: [
      {
        component: 'GridList',
        props: {
          dataConfig: {
            type: 'static',
            data: [
              {
                title: '基础折线图',
                cover: '/cover/charts/baseLine.png',
                api: {
                  data: [
                    {
                      date: 'Mon',
                      value: 200
                    },
                    {
                      date: 'Tue',
                      value: 100
                    },
                    {
                      date: 'Wed',
                      value: 400
                    },
                    {
                      date: 'Thu',
                      value: 800
                    },
                    {
                      date: 'Fri',
                      value: 180
                    },
                    {
                      date: 'Sat',
                      value: 290
                    },
                    {
                      date: 'Sun',
                      value: 200
                    }
                  ],
                  mapping: {
                    date: 'x-b',
                    value: 'y-l'
                  },
                  baseSeriesOption: {
                    type: 'line'
                  }
                },
                event: [],
                attribute: {
                  componentName: 'Echarts',
                  useConfig: 'baseLine',
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
                      text: '基础折线图'
                    },
                    legend: {
                      show: true,
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
              },
              {
                title: '平滑折线图',
                cover: '/cover/charts/smoothLine.png',
                api: {
                  data: [
                    {
                      date: 'Mon',
                      value: 200
                    },
                    {
                      date: 'Tue',
                      value: 100
                    },
                    {
                      date: 'Wed',
                      value: 400
                    },
                    {
                      date: 'Thu',
                      value: 800
                    },
                    {
                      date: 'Fri',
                      value: 180
                    },
                    {
                      date: 'Sat',
                      value: 290
                    },
                    {
                      date: 'Sun',
                      value: 200
                    }
                  ],
                  mapping: {
                    date: 'x-b',
                    value: 'y-l'
                  },
                  baseSeriesOption: {
                    type: 'line',
                    smooth: true
                  }
                },
                event: [],
                attribute: {
                  componentName: 'Echarts',
                  useConfig: 'baseLine',
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
                      text: '平滑折线图'
                    },
                    legend: {
                      show: true,
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
              },
              {
                title: '面积图',
                cover: '/cover/charts/areaLine.png',
                api: {
                  data: [
                    {
                      date: 'Mon',
                      value: 200
                    },
                    {
                      date: 'Tue',
                      value: 100
                    },
                    {
                      date: 'Wed',
                      value: 400
                    },
                    {
                      date: 'Thu',
                      value: 800
                    },
                    {
                      date: 'Fri',
                      value: 180
                    },
                    {
                      date: 'Sat',
                      value: 290
                    },
                    {
                      date: 'Sun',
                      value: 200
                    }
                  ],
                  mapping: {
                    date: 'x-b',
                    value: 'y-l'
                  },
                  baseSeriesOption: {
                    type: 'line',
                    smooth: true,
                    areaStyle: {}
                  }
                },
                event: [],
                attribute: {
                  componentName: 'Echarts',
                  useConfig: 'baseLine',
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
                      text: '面积图'
                    },
                    legend: {
                      show: true,
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
              },
              {
                title: '堆叠折线图',
                cover: '/cover/charts/stackLine.png',
                api: {
                  data: [
                    {
                      date: 'Mon',
                      value: 200,
                      value1: 130
                    },
                    {
                      date: 'Tue',
                      value: 100,
                      value1: 220
                    },
                    {
                      date: 'Wed',
                      value: 400,
                      value1: 180
                    },
                    {
                      date: 'Thu',
                      value: 800,
                      value1: 290
                    },
                    {
                      date: 'Fri',
                      value: 180,
                      value1: 100
                    },
                    {
                      date: 'Sat',
                      value: 290,
                      value1: 270
                    },
                    {
                      date: 'Sun',
                      value: 200,
                      value1: 240
                    }
                  ],
                  mapping: {
                    date: 'x-b',
                    value: 'y-l',
                    value1: 'y-l'
                  },
                  baseSeriesOption: {
                    type: 'line'
                  }
                },
                event: [],
                attribute: {
                  componentName: 'Echarts',
                  useConfig: 'baseLine',
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
                      text: '堆叠折线图'
                    },
                    legend: {
                      show: true,
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
              },
              {
                title: '面积堆叠图',
                cover: '/cover/charts/areaStack.png',
                api: {
                  data: [
                    {
                      date: 'Mon',
                      value: 200,
                      value1: 130
                    },
                    {
                      date: 'Tue',
                      value: 100,
                      value1: 220
                    },
                    {
                      date: 'Wed',
                      value: 400,
                      value1: 180
                    },
                    {
                      date: 'Thu',
                      value: 800,
                      value1: 290
                    },
                    {
                      date: 'Fri',
                      value: 180,
                      value1: 100
                    },
                    {
                      date: 'Sat',
                      value: 290,
                      value1: 270
                    },
                    {
                      date: 'Sun',
                      value: 200,
                      value1: 240
                    }
                  ],
                  mapping: {
                    date: 'x-b',
                    value: 'y-l',
                    value1: 'y-l'
                  },
                  baseSeriesOption: {
                    type: 'line',
                    areaStyle: {}
                  }
                },
                event: [],
                attribute: {
                  componentName: 'Echarts',
                  useConfig: 'baseLine',
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
                      text: '面积堆叠图'
                    },
                    legend: {
                      show: true,
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