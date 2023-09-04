import EmptyContainer from '@/components/Design/components/EmptyContainer';
import loadable from '@loadable/component';
type ComponentProp = {
  is: string
  componentProp?: Record<string, any>
}
const ComponentArr = ['ComponentTree', 'EmptyContainer', 'GridList', 'TabList', 'Attribute'];
const ListComponent = loadable((props: {name: string}) => import(`./components/${props.name}/index.tsx`), {
  fallback: <div>Loading...</div>,
  cacheKey: props => props.name
});
export default function Component(props: ComponentProp) {
  const componentName = props.is || 'EmptyContainer';
  const hasComponent = ComponentArr.includes(componentName);
  return hasComponent ? <ListComponent name={componentName} {...props.componentProp} /> : <EmptyContainer />;
} 