import { ComponentConfig } from '@/types';

export const pageConfig:ComponentConfig = {
  stickyRows: [0],
  attributes: [
    [
      {
        type: 'Text',
        props: {
          text: '页面配置',
          size: 'text-sm',
          className: 'w-full font-bold border-b text-center'
        }
      }
    ],
    [
      {
        type: 'Text',
        props: {
          text: '尺寸 (px)'
        }
      },
      {
        type: 'Number',
        mapping: {
          key: 'design.page.width'
        },
        props: {
          className: 'flex-1 pl-1 pr-1',
          min: 1,
          max: 99999,
          endAdornment: 'W'
        }
      },
      {
        type: 'Number',
        mapping: {
          key: 'design.page.height'
        },
        props: {
          className: 'flex-1 pl-1 pr-1',
          min: 1,
          max: 99999,
          endAdornment: 'H'
        }
      }
    ],
    [
      {
        type: 'Text',
        props: {
          text: '不透明度'
        }
      },
      {
        type: 'Slider',
        mapping: {
          key: 'design.page.opacity'
        },
        props: {
          className: 'flex-1 pl-1 pr-1',
          min: 0,
          max: 100,
          step: 1
        }
      },
      {
        type: 'Number',
        mapping: {
          key: 'design.page.opacity'
        },
        props: {
          className: 'w-20 pl-1 pr-1',
          min: 0,
          max: 100,
          endAdornment: '%'
        }
      }
    ],
    [
      {
        type: 'Text',
        props: {
          text: '背景颜色'
        }
      },
      {
        type: 'Color',
        mapping: {
          key: 'design.page.backgroundColor'
        },
        props: {
          defaultValue: {
            r: 182,
            g: 215,
            b: 228,
            a: 1
          },
          className: 'flex-1 pl-1 pr-1'
        }
      }
    ],
    [
      {
        type: 'Text',
        props: {
          text: '页面缩放'
        }
      },
      {
        type: 'ButtonGroup',
        mapping: {
          key: 'design.page.scaleType'
        },
        props: {
          className: 'flex-1 pl-1 pr-1',
          isRadio: true,
          options: [
            {
              icon: 'SwapHoriz',
              value: 'fullWidth',
              tips: '水平方向适应屏幕，高度自适应'
            },
            {
              icon: 'SwapVert',
              value: 'fullHeight',
              tips: '垂直方向适应屏幕，水平自适应'
            },
            {
              icon: 'ZoomOutMap',
              value: 'fullScreen',
              tips: '水平与垂直方向适应屏幕'
            },
            {
              icon: 'DoDisturb',
              value: 'disable',
              tips: '水平与垂直方向适应屏幕'
            }
          ],
          defaultValue: 'disable'
        }
      }
    ],
    [
      {
        type: 'Text',
        props: {
          text: '开关'
        }
      },
      {
        type: 'Boolean',
        mapping: {
          key: 'design.page.testBoolean'
        },
        props: {
          className: 'flex-1 pl-1 pr-1',
          defaultValue: true
        }
      }
    ],
    [
      {
        type: 'Text',
        props: {
          text: '字符串'
        }
      },
      {
        type: 'String',
        mapping: {
          key: 'design.page.testText'
        },
        props: {
          className: 'flex-1 pl-1 pr-1',
          defaultValue: '123',
          placeholder: '111'
        }
      }
    ],
    [
      {
        type: 'Text',
        props: {
          text: '内容'
        }
      },
      {
        type: 'TextArea',
        mapping: {
          key: 'design.page.testTextArea'
        },
        props: {
          className: 'flex-1 pl-1 pr-1',
          rows: 4,
          defaultValue: '123',
          placeholder: '111'
        }
      }
    ],
    [
      {
        type: 'Tabs',
        mapping: {
          key: 'design.page.testTabs'
        },
        props: {
          className: 'w-full',
          variant: 'fullWidth',
          defaultValue: 'tab2',
          child: [
            {
              label: '记录标签1',
              value: 'tab1',
              config: [
                [
                  {
                    type: 'Text',
                    props: {
                      text: '此tab数据会根据mapping保存到数据库，下次打开还在当前位置',
                      className: 'flex-1 pl-1 pr-1'
                    }
                  }
                ]
              ]
            },
            {
              label: '记录标签2',
              value: 'tab2',
              config: [
                [
                  {
                    type: 'Text',
                    props: {
                      text: '开关2'
                    }
                  },
                  {
                    type: 'Boolean',
                    props: {
                      className: 'flex-1 pl-1 pr-1',
                      defaultValue: false
                    }
                  }
                ]
              ]
            }
          ]
        }
      }
    ],
    [
      {
        type: 'Tabs',
        props: {
          className: 'w-full',
          variant: 'fullWidth',
          defaultValue: 'tab1',
          child: [
            {
              label: '复位标签1',
              value: 'tab1',
              config: [
                [
                  {
                    type: 'Text',
                    props: {
                      text: '此tab数据不会被保存，每次刷新都会自动复位',
                      className: 'flex-1 pl-1 pr-1'
                    }
                  }
                ]
              ]
            },
            {
              label: '复位标签2',
              value: 'tab2',
              config: [
                [
                  {
                    type: 'Text',
                    props: {
                      text: '开关2'
                    }
                  },
                  {
                    type: 'Boolean',
                    props: {
                      className: 'flex-1 pl-1 pr-1',
                      defaultValue: false
                    }
                  }
                ]
              ]
            }
          ]
        }
      }
    ],
    [
      {
        type: 'Collapse',
        props: {
          className: 'flex-1 pl-1 pr-1',
          label: '复位Collapse',
          defaultValue: true,
          child: [
            [
              {
                type: 'Text',
                props: {
                  text: '展开收起状态不会被保存，每次刷新都会自动复位',
                  className: 'flex-1 pl-1 pr-1'
                }
              }
            ],
            [
              {
                type: 'Text',
                props: {
                  text: '开关2'
                }
              },
              {
                type: 'Boolean',
                props: {
                  className: 'flex-1 pl-1 pr-1',
                  defaultValue: false
                }
              }
            ]
          ]
        }
      }
    ],
    [
      {
        type: 'Collapse',
        mapping: {
          key: 'design.page.testCollapse'
        },
        props: {
          className: 'flex-1 pl-1 pr-1',
          label: '记录Collapse',
          defaultValue: true,
          child: [
            [
              {
                type: 'Text',
                props: {
                  text: '展开收起状态会被保存到数据库，下次打开会维持状态',
                  className: 'flex-1 pl-1 pr-1'
                }
              }
            ],
            [
              {
                type: 'Text',
                props: {
                  text: '开关2'
                }
              },
              {
                type: 'Boolean',
                props: {
                  className: 'flex-1 pl-1 pr-1',
                  defaultValue: false
                }
              }
            ]
          ]
        }
      }
    ]
  ]
};