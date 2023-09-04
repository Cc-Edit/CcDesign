import { getData } from '@/components/Design/utils/request';
import EmptyContainer from '@/components/Design/components/EmptyContainer';
import { dataConfigProp } from '@/types';
import { useState, useEffect } from 'react';
import loadable from '@loadable/component';
interface GridListProps {
  dataConfig: dataConfigProp
  itemClass?: string
  emptyText?: string
  itemComponent?: string
  title?: string
}
const ElementComponent = loadable((props: {is: string}) => import(`../ListItem/${props.is}`), {
  fallback: <div>Loading...</div>,
  cacheKey: props => props.is
});

function ListItem(prop: Record<string, any>) {
  const { child, data, className, onChange = () => {} } = prop;
  return (
    <div className={`${className} pl-2`}>
      <ElementComponent is={child} {...{ ...data, onChange } } />
    </div>
  );
}

export default function GridList(props: GridListProps) {
  const { dataConfig, title, emptyText = '空列表', itemClass = 'w-full', itemComponent = 'BaseItem' } = props;
  const [data, setData] = useState([]);
  function handleChange() {
    getData(dataConfig).then(res => {
      setData(res as []);
    });
  }
  useEffect(() => {
    getData(dataConfig).then(res => {
      setData(res as []);
    });
  }, [dataConfig]);
  let children = data.length === 0 ? <EmptyContainer className='mb-20' text={emptyText} /> : data.map((item, index) => <ListItem key={index} data={item} onChange={handleChange} className={itemClass} child={itemComponent} />);
  return (
    <div className={`flex flex-row flex-wrap content-start overflow-x-hidden hideScroll p-0.5 pb-4 pr-0 shrink-0`} >
      {
        title && <div className='w-full leading-8 text-sm border-left ml-2 overflow-hidden'>{title}</div>
      }
      {
        children
      }
    </div>
  );
}