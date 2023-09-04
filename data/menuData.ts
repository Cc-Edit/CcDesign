import { MenuItem } from '@/types';
import { ChartData } from './chartData';
import { WidgetData } from './widgetData';
import { TableData } from './tableData';

export const MenuData: MenuItem[] = [
  {
    key: 'layer',
    title: '结构',
    icon: 'Layers',
    desc: '页面元素结构,也可对元素进行快速操作',
    children: [
      {
        component: 'ComponentTree',
        props: {}
      }
    ]
  },
  {
    key: 'template',
    title: '模板',
    desc: '使用基础组件组合后的复杂组件',
    icon: 'AutoAwesomeMosaic',
    children: [
      {
        component: 'GridList',
        props: {
          dataConfig: {
            type: 'api',
            request: {
              url: '/api/template/list',
              method: 'get',
              options: {
                params: {
                  type: 1
                }
              },
              resultKey: 'data'
            },
            data: [1, 2, 3, 4, 5, 6, 7]
          },
          itemClass: 'w-full',
          itemComponent: 'TemplateItem',
          title: '模板组件',
          emptyText: '模板列表为空~'
        }
      }
    ]
  },
  // {
  //   key: 'element',
  //   title: '素材',
  //   icon: 'Extension'
  // },
  {
    key: 'widget',
    title: '组件',
    icon: 'Widgets',
    desc: '包含常用基础元素组件',
    children: [
      {
        component: 'TabList',
        props: {
          data: WidgetData,
          cancelSelect: false,
          defaultIndex: 0,
          containerClass: '',
          delay: 0
        }
      }
    ]
  },
  {
    key: 'table',
    title: '表格',
    desc: '包含常用表格组件',
    icon: 'TableChart',
    children: [
      {
        component: 'GridList',
        props: {
          dataConfig: {
            type: 'static',
            data: TableData
          },
          itemClass: 'w-full',
          title: 'DataV Table'
        }
      }
    ]
  },
  {
    key: 'form',
    title: '表单',
    icon: 'ListAlt'
  },
  {
    key: 'chart',
    title: '图表',
    icon: 'AutoGraph',
    desc: '包含常用Echarts图表组件',
    children: [
      {
        component: 'TabList',
        props: {
          data: ChartData,
          cancelSelect: false,
          defaultIndex: 0,
          containerClass: '',
          delay: 0
        }
      }
    ]
  },
  {
    key: 'map',
    title: '地图',
    icon: 'Public'
  }
];