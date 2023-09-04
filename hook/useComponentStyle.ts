import { useAppSelector } from '@/store';
import { isHideMenu } from '@/config/constant';
// 元素样式
const useComponentStyle = (componentId: string) => {
  const attributeMap = useAppSelector(state => state.design.attribute);
  const apiMap = useAppSelector(state => state.design.api);
  const eventMap = useAppSelector(state => state.design.event);
  const elementAttr = attributeMap[componentId] || {};
  const api = apiMap[componentId] || {};
  const event = eventMap[componentId] || {};
  const { position = {}, style = {}} = elementAttr;
  const { left = 0, top = 0, width = 100, height = 80, z = 1, rotate = 0 } = position;
  const { backgroundColor = {}, backgroundImage, backgroundRepeat, borderColor = {}, borderRadius = 0, borderWidth = 0, borderStyle = 'solid' } = style;

  const eleStyle = {
    left: `${left}px`,
    top: `${top}px`,
    width: `${width}px`,
    height: `${height}px`,
    transform: `rotate(${rotate}deg)`,
    borderRadius: `${borderRadius}px`,
    borderStyle,
    borderWidth: `${borderWidth}px`,
    backgroundColor: `rgba(${backgroundColor.r},${backgroundColor.g},${backgroundColor.b},${backgroundColor.a})`,
    borderColor: `rgba(${borderColor.r},${borderColor.g},${borderColor.b},${borderColor.a})`,
    zIndex: z
  };
  if (backgroundImage) {
    Object.assign(eleStyle, {
      backgroundImage: `url(${backgroundImage})`,
      backgroundAttachment: 'fixed'
    });
    switch (backgroundRepeat) {
      case 'full':
        Object.assign(eleStyle, {
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%'
        });
        break;
      case 'repeat':
        Object.assign(eleStyle, {
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto'
        });
        break;
      case 'auto':
        Object.assign(eleStyle, {
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto'
        });
        break;
      default:
        break;
    }
  }
  return {
    eleStyle,
    elementAttr,
    api,
    event
  };
};
export default useComponentStyle;