import loadable from '@loadable/component';
import { AttributeItem } from '@/types';
import useFormItemBind from '@/components/Design/hook/useFormItemBind';

const FormElements = loadable((props: Record<string, any>) => import(`./items/${props.name}`), {
  fallback: <div>Loading...</div>,
  cacheKey: props => props.name
});

export default function FormItem({ type, props, mapping = {}}: AttributeItem) {
  const { value, handleChange } = useFormItemBind(mapping);
  return <FormElements name={type} value={value} onChange={handleChange} {...props } />;
}