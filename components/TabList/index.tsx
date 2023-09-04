import { List, ListItemText, ListItemIcon, ListItemButton, Divider, Tooltip } from '@mui/material';
import { useState, useEffect, Fragment } from 'react';
import { delay } from '@/utils/common';
import { MenuItem } from '@/types';
import IconLoader from '@/components/Design/DynamicLoader/IconLoader';
import ComponentFactory from '@/components/Design/ComponentFactory';
import InfoIcon from '@mui/icons-material/Info';

interface TabListProp {
  data: MenuItem[], // 列表数据
  containerClass?: string // 容器样式，控制宽度
  defaultIndex?: number // 默认选中下标
  delay?: number, // 是否演出展开，显示动画
  cancelSelect?: boolean // 是否可以取消选中
}
export default function TabList(props: TabListProp) {
  const { cancelSelect = true, delay: delayTime = 300, containerClass = 'w-72 border-r', data, defaultIndex = 0 } = props;
  const [selectMenu, setSelectMenu] = useState<MenuItem | null>();
  const [show, setShow] = useState(false);

  function handleClick(menu: MenuItem) {
    if (cancelSelect && menu.key === selectMenu?.key) {
      setSelectMenu(null);
    } else {
      setSelectMenu(menu);
    }
  }

  const listItem = data.map((menu, index) => {
    return (
      <Fragment key={menu.key}>
        <Tooltip title={menu.tooltip} placement='right-start'>
          <ListItemButton
            className={`${selectMenu?.key === menu.key && 'active'} w-10 grow-0 rounded-sm p-1 flex-col flex justify-center content-center`}
            onClick={() => { handleClick(menu); }}
          >
            {
              menu.icon && <ListItemIcon className='justify-center'>
                <IconLoader className='w-5 h-5' icon={menu.icon} />
              </ListItemIcon>
            }
            {
              menu.title && <ListItemText className='m-0 text-xs scale-90 block'> {menu.title} </ListItemText>
            }
          </ListItemButton>
        </Tooltip>
        <Divider className='w-10' />
      </Fragment>
    );
  });

  useEffect(() => {
    delay(delayTime).then(() => {
      setSelectMenu(data[defaultIndex] || null);
      setShow(true);
    });
  }, []);
  let ListElement = selectMenu ? <ComponentFactory key={selectMenu.key} childData={selectMenu.children} /> : null;
  return (
    <div className={`flex flex-col flex-nowrap overflow-hidden flex-1 max-h-full`} >
      <div className='flex-1 flex flex-row flex-nowrap overflow-hidden'>
        <List className={`${show ? 'w-12' : 'w-0'} shrink-0 menu-list duration-300 transition-all overflow-hidden p-0 design-line border-r flex flex-col justify-start items-center`}>
          {
            listItem
          }
        </List>
        <div className={`${selectMenu ? containerClass : 'w-0'} flex flex-col flex-1 design-line duration-300 transition-all overflow-x-hidden hideScroll `}>
          {
            selectMenu?.desc && <div className='w-full leading-8 h-8 shrink-0 text-xs design-line border-b pl-2 pr-2 flex flex-row overflow-hidden justify-start items-center'><InfoIcon sx={{ fontSize: 16, marginRight: 1 }}/>{selectMenu?.desc }</div>
          }
          {
            ListElement
          }
        </div>
      </div>
    </div>
  );
}