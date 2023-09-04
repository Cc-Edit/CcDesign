import { autoDispatch, useAppSelector } from '@/store';
import { get } from 'lodash';

const useFormItemBind = (mapping:Record<string, any>) => {
  const { key: mappingKey = '' } = mapping;
  const selectIds = useAppSelector(state => state.design.selectIds);
  let key = mappingKey;
  // 单个组件选中时，关联其attribute
  if (selectIds && selectIds.length === 1) {
    const [eleId] = selectIds;
    if (key.indexOf('api.') === 0) {
      key = key.slice(4);
      key = `design.api.${eleId}.${key}`;
    } else if (key.indexOf('event.') === 0) {
      key = key.slice(6);
      key = `design.event.${eleId}.${key}`;
    } else {
      switch (key) {
        case 'api':
          key = `design.api.${eleId}`;
          break;
        case 'event':
          key = `design.event.${eleId}`;
          break;
        default:
          key = `design.attribute.${eleId}.${key}`;
          break;
      }
    }
  }
  const value = useAppSelector(state => get(state, key, undefined));
  function handleChange(value: any) {
    mappingKey !== '' && autoDispatch({
      key,
      value
    });
  }
  if (mappingKey === '') {
    return {
      value: null,
      onChange: () => {}
    };
  }
  return {
    value,
    handleChange
  };
};
export default useFormItemBind;
