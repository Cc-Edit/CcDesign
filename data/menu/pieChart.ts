import { MenuItem } from '@/types';

export const PieChart: MenuItem[] = [
  {
    key: 'PieChart',
    icon: 'PieChart',
    tooltip: '饼图',
    children: [
      {
        component: 'GridList',
        props: {
          dataConfig: {
            type: 'static',
            data: [
              {
                title: '基础饼图',
                cover: '/cover/charts/basePie.png',
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
                  baseSeriesOption: {
                    type: 'pie'
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
                      text: '基础饼图'
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
              },
              {
                title: '环形图',
                cover: '/cover/charts/doughnutPie.png',
                api: {
                  data: [
                    {
                      name: 'Mon',
                      value: 200
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
                    }
                  ],
                  baseSeriesOption: {
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                      show: false,
                      position: 'center'
                    },
                    emphasis: {
                      label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
                      }
                    },
                    labelLine: {
                      show: false
                    }
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
                      text: '环形图'
                    },
                    legend: {
                      show: true,
                      type: 'plain'
                    },
                    grid: {
                      show: false,
                      containLabel: false,
                      left: 10,
                      top: 30,
                      right: 10,
                      bottom: 5
                    },
                    tooltip: {
                      trigger: 'item'
                    }
                  }
                }
              },
              {
                title: '圆角环形图',
                cover: '/cover/charts/borderRadiusPie.png',
                api: {
                  data: [
                    {
                      name: 'Mon',
                      value: 200
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
                    }
                  ],
                  baseSeriesOption: {
                    type: 'pie',
                    radius: ['40%', '70%'],
                    itemStyle: {
                      borderRadius: 10,
                      borderColor: '#fff',
                      borderWidth: 1
                    },
                    label: {
                      show: false,
                      position: 'center'
                    },
                    emphasis: {
                      label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
                      }
                    },
                    labelLine: {
                      show: false
                    }
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
                      text: '圆角环形图'
                    },
                    legend: {
                      show: true,
                      type: 'plain'
                    },
                    grid: {
                      show: false,
                      containLabel: false,
                      left: 10,
                      top: 30,
                      right: 10,
                      bottom: 5
                    },
                    tooltip: {
                      trigger: 'item'
                    }
                  }
                }
              },
              {
                title: '玫瑰图',
                cover: '/cover/charts/nightingalePie.png',
                api: {
                  data: [
                    {
                      name: 'Mon',
                      value: 20
                    },
                    {
                      name: 'Wed',
                      value: 40
                    },
                    {
                      name: 'Thu',
                      value: 50
                    },
                    {
                      name: 'Fri',
                      value: 18
                    },
                    {
                      name: 'Sat',
                      value: 29
                    }
                  ],
                  baseSeriesOption: {
                    type: 'pie',
                    radius: [10, 90],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                      borderRadius: 8
                    }
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
                      text: '玫瑰图'
                    },
                    legend: {
                      show: false,
                      type: 'plain'
                    },
                    grid: {
                      show: false,
                      containLabel: false,
                      left: 10,
                      top: 30,
                      right: 10,
                      bottom: 5
                    },
                    tooltip: {
                      trigger: 'item'
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
                title: '动态环图',
                cover: '/cover/datav/chart/DvRingChart.png',
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
                  componentName: 'DvRingChart',
                  useConfig: 'baseRingChart',
                  position: {
                    width: 440,
                    height: 210
                  },
                  style: {
                    backgroundColor: {
                      r: 80,
                      g: 85,
                      b: 87,
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