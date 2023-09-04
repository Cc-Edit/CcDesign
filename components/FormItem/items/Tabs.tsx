import styles from './FormItem.module.css';
import { Tabs as MuiTabs, Tab } from '@mui/material';
import { useState, SyntheticEvent, ReactNode, useEffect } from 'react';
import { AttributeItem } from '@/types';
import FormItem from '@/components/Design/components/FormItem';
interface TabsProps {
  [key: string]: any
  onChange?: Function
}
interface TabsConfig {
  label: string
  value: string
  config: AttributeItem[][]
}
interface TabPanelProps {
  children?: React.ReactNode;
  selectTab: string;
  value: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, selectTab, ...other } = props;
  return (
    <div
      role='tabpanel'
      hidden={value !== selectTab}
      id={`vertical-tabpanel-${selectTab}`}
      aria-labelledby={`vertical-tab-${selectTab}`}
      {...other}
    >
      {value === selectTab && children}
    </div>
  );
}
export default function Tabs(props: TabsProps) {
  const { className, value, defaultValue, onChange, child = [], ...prop } = props;
  const [active, setActive] = useState<string>(value ?? defaultValue);
  useEffect(() => {
    setActive(value ?? defaultValue);
    if (active !== value) {
      onChange?.(open);
    }
  }, [value]);
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setActive(newValue);
    onChange?.(newValue);
  };
  const panelChild: ReactNode[] = [];
  const tabChild: ReactNode[] = [];
  child.forEach((element: TabsConfig, index: number) => {
    const { label, config } = element;
    const panelEle = config.map((rowConfig, rowIndex) => {
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
    panelChild.push(
      <TabPanel key={`${index}`} value={element.value} selectTab={active}>
        {
          panelEle
        }
      </TabPanel>
    );
    tabChild.push(<Tab className={styles.muiTabItem} value={element.value} key={`${index}`} label={label} />);
  });
  return (
    <>
      <div className={`tabs ${className} bg-neutral-50 dark:bg-neutral-900 z-10 border-0 border-b border-solid border-zinc-300 dark:border-zinc-600`}>
        <MuiTabs
          className={styles.muiTab}
          value={active}
          onChange={handleChange}
          {...prop}
        >
          {
            tabChild
          }
        </MuiTabs>
      </div>
      <div className='pt-2 w-full'>
        {
          panelChild
        }
      </div>
    </>
  );
}