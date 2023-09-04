import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { List, ListItemButton, ListItemText, Collapse as MuiCollapse } from '@mui/material';
import { useState, useEffect } from 'react';
import FormItem from '@/components/Design/components/FormItem';
import { AttributeItem } from '@/types';
import { useAppSelector } from '@/store';
interface CollapseProps {
  child: ((comAttr:Record<string, any>) => AttributeItem[][]) | AttributeItem[][]
  [key: string]: any
}
export default function Collapse(props: CollapseProps) {
  const { className, label, value, defaultValue, onChange, child } = props;
  const selectIds = useAppSelector(state => state.design.selectIds);
  const [selectId] = selectIds; 
  const storeAttr = useAppSelector(state => state.design.attribute);
  let childData = null;
  if (typeof child === 'function') {
    childData = child(storeAttr[selectId]);
  } else {
    childData = child;
  }
  const [open, setOpen] = useState(value ?? defaultValue);
  useEffect(() => {
    setOpen(value ?? defaultValue);
    if (open !== value) {
      onChange?.(open);
    }
  }, [value]);
  const handleChange = () => {
    setOpen(!open);
    onChange?.(!open);
  };
  const panelEle = childData.map((rowConfig, rowIndex) => {
    let childData = rowConfig.map((childEle, cin) => {
      return <FormItem key={`${rowIndex}-${cin}`} {...childEle} />;
    });
    return (
      <div key={rowIndex} className='mb-2 w-full flex flex-row shrink-0 basis-0 flex-wrap justify-start'>
        {
          childData
        }
      </div>
    );
  });
  return (
    <div className={`${className} form-collapse `} >
      <List component='div'>
        <ListItemButton onClick={handleChange} className={open ? 'rounded-b-none' : ''}>
          <ListItemText primary={label} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <MuiCollapse in={open} timeout='auto' unmountOnExit>
          {
            panelEle
          }
        </MuiCollapse>
      </List>
    </div>
  );
}