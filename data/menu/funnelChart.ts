import { MenuItem } from '@/types';

export const FunnelChart: MenuItem[] = [
  {
    key: 'FunnelChart',
    icon: 'FilterAlt',
    tooltip: '漏斗图',
    children: [
      {
        component: 'GridList',
        props: {
          dataConfig: {
            type: 'static',
            data: [
              {
                title: '漏斗图',
                cover: '/cover/charts/funnelChart.png',
                api: {
                  data: [
                    {
                      name: 'Mon',
                      value: 500
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
                      value: 700
                    }
                  ],
                  baseSeriesOption: {
                    type: 'funnel',
                    left: '5%',
                    top: 20,
                    bottom: 20,
                    width: '90%',
                    minSize: '0%',
                    maxSize: '100%',
                    sort: 'descending',
                    gap: 2,
                    label: {
                      show: true,
                      position: 'inside'
                    },
                    itemStyle: {
                      borderColor: '#fff',
                      borderWidth: 1
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
                      text: '漏斗图'
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