import Component from '@/components/Design/Component';
type ChildrenComponentProp = {
  childData?: Record<string, any> | Record<string, any>[]
}
export default function ComponentFactory(props: ChildrenComponentProp) {
  const { childData = null } = props;
   if (childData instanceof Array) {
    return childData.map((item, index) => <Component key={`${item.component}-${index}`} is={ item.component || ''} componentProp={item.props} />);
  } else {
    return <Component is={ childData?.component || ''} componentProp={childData?.props} />;
  }
}