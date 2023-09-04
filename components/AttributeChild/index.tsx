import { pageConfig } from '@/components/Design/data/config/pageConfig';
import FormItem from '@/components/Design/components/FormItem';
import Loading from './Loading';
import { useAppSelector } from '@/store';
import { AttributeItem } from '@/types';
import { useState, useEffect } from 'react';

export default function AttributeChild() {
  const selectIds = useAppSelector(state => state.design.selectIds);
  const storeAttr = useAppSelector(state => state.design.attribute);
  const [loading, setLoading] = useState(false);
  const [attributes, setAttributes] = useState<AttributeItem[][] | null>(null);
  const [stickyRows, setStickyRows] = useState<number[] | null>(null);

  useEffect(() => {
    if (!selectIds || selectIds.length === 0) {
      // 渲染页面配置
      const { attributes, stickyRows } = pageConfig;
      setAttributes(attributes);
      setStickyRows(stickyRows);
    } else if (selectIds.length === 1) {
      setLoading(true);
      const [selectElementId] = selectIds;
      const { componentName, useConfig = 'default' } = storeAttr[selectElementId];
      if (componentName) {
        import(`/src/bailu/components/${componentName}/config/${useConfig}`).then(({ default: elementConfig }) => {
          const { attributes, stickyRows } = elementConfig;
          setAttributes(attributes);
          setStickyRows(stickyRows);
          setLoading(false);
        }).catch(() => {
          setLoading(false);
          setAttributes(null);
          setStickyRows([]);
        });
      } else {
        setLoading(false);
        setAttributes(null);
        setStickyRows([]);
      }
    } else {
      // 多选组件,暂时先渲染页面配置
      const { attributes, stickyRows } = pageConfig;
      setAttributes(attributes);
      setStickyRows(stickyRows);
    }
  }, [selectIds, storeAttr]);

  const attrElements = (attributes && stickyRows) ? attributes.map((rowConfig, rowIndex) => {
    let rowData = rowConfig.map((element, index) => {
      return <FormItem key={`${rowIndex}-${index}`} {...element} />;
    });
    return (
      <div
        key={rowIndex}
        className={`${stickyRows?.includes(rowIndex) ? 'sticky top-0 z-10' : ''} mb-2 w-full flex flex-row shrink-0 basis-0 flex-wrap justify-start`}
      >
        {
          rowData
        }
      </div>
    );
  }) : <div className='w-full h-full flex justify-center items-center'><span className='text-xs text-red-400'>配置项加载异常</span></div>;

  return (
    loading ? <Loading text='配置项加载中···' /> : attrElements
  );
}