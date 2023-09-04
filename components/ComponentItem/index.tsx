import useComponentStyle from '@/components/Design/hook/useComponentStyle';
import useEventHandler from '@/components/Design/hook/useEventHandler';
import loadable from '@loadable/component';
const ElementComponent = loadable((props: {is: string}) => import(`@/bailu/components/${props.is}`), {
  fallback: <div>Loading...</div>,
  cacheKey: props => props.is
});
type ComponentItemProp = {
  component: Record<string, any>
  isPreview?: boolean
  isSelect: boolean
}
export default function ComponentItem({ isPreview = false, component }: ComponentItemProp) {
  const { id, name } = component;
  const { onClick, onDoubleClick, onMouseLeave } = useEventHandler(isPreview);
  const { eleStyle, elementAttr, api, event } = useComponentStyle(id);
  return <div id={id} style={eleStyle} {...{ onClick, onDoubleClick, onMouseLeave }} className={`${!isPreview ? 'select' : ''} canvasEle absolute overflow-hidden`} >
    <ElementComponent is={name} {...{ attribute: elementAttr, api, event }} />
  </div>;
}