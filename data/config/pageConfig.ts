import { ComponentConfig } from '@/types';

export const pageConfig:ComponentConfig = {
  stickyRows: [0],
  attributes: [
    [
      {
        type: 'Text',
        props: {
          text: '页面配置',
          opacity: false,
          size: 'text-sm',
          className: 'w-full font-bold border-b text-center'
        }
      }
    ],
    [
      {
        type: 'Text',
        props: {
          text: '页面标题'
        }
      },
      {
        type: 'String',
        mapping: {
          key: 'design.page.title'
        },
        props: {
          className: 'flex-1 pl-1 pr-1',
          defaultValue: '页面标题',
          placeholder: '请输入页面标题'
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
          endAdornment: 'W',
          defaultValue: 1920
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
          endAdornment: 'H',
          defaultValue: 1080
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
          step: 1,
          defaultValue: 100
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
          endAdornment: '%',
          defaultValue: 100
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
          text: '背景图片'
        }
      },
      {
        type: 'BackgroundImage',
        mapping: {
          key: 'design.page.backgroundImage'
        },
        props: {
          className: 'flex-1 pl-1 pr-1'
        }
      }
    ],
    [
      {
        type: 'Text',
        props: {
          text: '背景类型'
        }
      },
      {
        type: 'ButtonGroup',
        mapping: {
          key: 'design.page.backgroundRepeat'
        },
        props: {
          className: 'flex-1 pl-1 pr-1',
          isRadio: true,
          options: [
            {
              text: '适应屏幕',
              value: 'full',
              tips: '缩放背景图片撑满整个屏幕'
            },
            {
              text: '重复',
              value: 'repeat',
              tips: '水平垂直方向重复使用背景图片填充'
            },
            {
              text: '原始大小',
              value: 'auto',
              tips: '使用背景图片的原始大小'
            }
          ],
          defaultValue: 'full'
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
              value: 'cover',
              tips: '取水平垂直方向中最长边适应缩放'
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
          text: '封面图'
        }
      },
      {
        type: 'Capture',
        mapping: {
          key: 'design.page.cover'
        },
        props: {
          className: 'flex-1 pl-1 pr-1'
        }
      }
    ]
  ]
};