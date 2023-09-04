import { MenuItem } from '@/types';

export const BarChart: MenuItem[] = [
  {
    key: 'barChart',
    icon: 'Equalizer',
    tooltip: '柱状图',
    children: [
      {
        component: 'GridList',
        props: {
          dataConfig: {
            type: 'static',
            data: [
              {
                title: '基础柱状图',
                cover: '/cover/charts/baseBar.png',
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
                    type: 'bar'
                  }
                },
                event: [],
                attribute: {
                  componentName: 'Echarts',
                  useConfig: 'baseBar',
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
                      text: '基础柱状图'
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
                title: '刻度对齐柱状图',
                cover: '/cover/charts/centerBar.png',
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
                    type: 'bar'
                  },
                  basexAxisOption: {
                    axisTick: {
                      alignWithLabel: true
                    }
                  }
                },
                event: [],
                attribute: {
                  componentName: 'Echarts',
                  useConfig: 'baseBar',
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
                      text: '刻度对齐柱状图'
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
                title: '横向柱状图',
                cover: '/cover/charts/ycategoryBar.png',
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
                    date: 'y-l',
                    value: 'x-b'
                  },
                  baseSeriesOption: {
                    type: 'bar'
                  },
                  basexAxisOption: {
                    type: 'value'
                  },
                  baseyAxisOption: {
                    type: 'category',
                    axisTick: {
                      alignWithLabel: true
                    }
                  }
                },
                event: [],
                attribute: {
                  componentName: 'Echarts',
                  useConfig: 'baseBar',
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
                      text: '横向柱状图'
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
                title: '堆叠柱状图',
                cover: '/cover/charts/stackBar.png',
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
                    type: 'bar',
                    stack: 'total'
                  },
                  basexAxisOption: {
                    axisTick: {
                      alignWithLabel: true
                    }
                  }
                },
                event: [],
                attribute: {
                  componentName: 'Echarts',
                  useConfig: 'baseBar',
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
                      text: '堆叠柱状图'
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
                title: '横向堆叠柱状图',
                cover: '/cover/charts/ycategoryStackBar.png',
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
                    date: 'y-l',
                    value: 'x-b',
                    value1: 'x-b'
                  },
                  baseSeriesOption: {
                    type: 'bar',
                    stack: 'total'
                  },
                  basexAxisOption: {
                    type: 'value'
                  },
                  baseyAxisOption: {
                    type: 'category',
                    axisTick: {
                      alignWithLabel: true
                    }
                  }
                },
                event: [],
                attribute: {
                  componentName: 'Echarts',
                  useConfig: 'baseBar',
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
                      text: '横向堆叠柱状图'
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
      },
      {
        component: 'GridList',
        props: {
          dataConfig: {
            type: 'static',
            data: [
              {
                title: '胶囊柱图',
                cover: '/cover/datav/chart/DvCapsuleChart.png',
                api: {
                  data: [
                    {
                      name: 'Mon',
                      value: 200
                    },
                    {
                      name: 'Tue',
                      value: 100
                    },
                    {
                      name: 'Wed',
                      value: 400
                    },
                    {
                      name: 'Thu',
                      value: 800
                    },
                    {
                      name: 'Fri',
                      value: 180
                    },
                    {
                      name: 'Sat',
                      value: 290
                    },
                    {
                      name: 'Sun',
                      value: 200
                    }
                  ]
                },
                event: [],
                attribute: {
                  componentName: 'DvCapsuleChart',
                  useConfig: 'baseCapsuleChart',
                  position: {
                    width: 440,
                    height: 210
                  },
                  style: {
                    backgroundColor: {
                      r: 107,
                      g: 103,
                      b: 103,
                      a: 1
                    }
                  },
                  options: {}
                }
              },
              {
                title: '锥形柱图(自定义图片)',
                cover: '/cover/datav/chart/DvColumnChart.png',
                api: {
                  data: [
                    {
                      name: 'Mon',
                      value: 200
                    },
                    {
                      name: 'Tue',
                      value: 100
                    },
                    {
                      name: 'Wed',
                      value: 400
                    },
                    {
                      name: 'Thu',
                      value: 800
                    },
                    {
                      name: 'Fri',
                      value: 180
                    },
                    {
                      name: 'Sat',
                      value: 290
                    },
                    {
                      name: 'Sun',
                      value: 200
                    }
                  ],
                  img: ['/icon/level/first.png', '/icon/level/second.png', '/icon/level/third.png', '', '', '', '']
                },
                event: [],
                attribute: {
                  componentName: 'DvColumnChart',
                  useConfig: 'baseColumnChart',
                  position: {
                    width: 440,
                    height: 210
                  },
                  style: {
                    backgroundColor: {
                      r: 107,
                      g: 103,
                      b: 103,
                      a: 1
                    }
                  },
                  options: {}
                }
              },
              {
                title: '锥形柱图(默认图片)',
                cover: '/cover/datav/chart/DvColumnChart1.png',
                api: {
                  data: [
                    {
                      name: 'Mon',
                      value: 200
                    },
                    {
                      name: 'Tue',
                      value: 100
                    },
                    {
                      name: 'Wed',
                      value: 400
                    },
                    {
                      name: 'Thu',
                      value: 800
                    },
                    {
                      name: 'Fri',
                      value: 180
                    },
                    {
                      name: 'Sat',
                      value: 290
                    },
                    {
                      name: 'Sun',
                      value: 200
                    }
                  ]
                },
                event: [],
                attribute: {
                  componentName: 'DvColumnChart',
                  useConfig: 'baseColumnChart',
                  position: {
                    width: 440,
                    height: 210
                  },
                  style: {
                    backgroundColor: {
                      r: 107,
                      g: 103,
                      b: 103,
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