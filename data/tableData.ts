export const TableData: Record<string, any>[] = [
  {
    title: '轮播表',
    cover: '/cover/datav/table/DvScrollBoard.png',
    api: {
      data: [
        {
          日期: 'Mon',
          值: 200
        },
        {
          日期: 'Tue',
          值: 100
        },
        {
          日期: 'Wed',
          值: 400
        },
        {
          日期: 'Thu',
          值: 800
        },
        {
          日期: 'Fri',
          值: 180
        },
        {
          日期: 'Sat',
          值: 290
        },
        {
          日期: 'Sun',
          值: 200
        }
      ]
    },
    event: [],
    attribute: {
      componentName: 'DvScrollBoard',
      useConfig: 'baseScrollBoard',
      position: {
        width: 440,
        height: 210
      },
      style: {
        backgroundColor: {
          r: 102,
          g: 107,
          b: 110,
          a: 0
        }
      },
      options: {}
    }
  },
  {
    title: '排名轮播表',
    cover: '/cover/datav/table/baseScrollRankingBoard.png',
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
      componentName: 'DvScrollRankingBoard',
      useConfig: 'baseScrollRankingBoard',
      position: {
        width: 440,
        height: 210
      },
      style: {
        backgroundColor: {
          r: 62,
          g: 65,
          b: 66,
          a: 1
        }
      },
      options: {}
    }
  }
];