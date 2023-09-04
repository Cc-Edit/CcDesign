import { useState } from 'react';
import { useAppSelector } from '@/store';
const usePreviewStyle = () => {
  const [containerStyle, setContainerStyle] = useState({});
  const [pageStyle, setPageStyle] = useState({});
  const pageConfig = useAppSelector(state => state.design.page);
  const computedContainerStyle = () => {
    const { opacity = 100, height = 0, width = 0, backgroundColor, backgroundImage, backgroundRepeat, scaleType, title } = pageConfig;
    const page = {
      width: `${width}px`,
      height: `${height}px`
    };
    const container: Record<string, any> = {
      opacity: `${opacity}%`,
      backgroundColor: backgroundColor ? `rgba(${backgroundColor.r},${backgroundColor.g},${backgroundColor.b},${backgroundColor.a})` : '',
      transformOrigin: `left top`
    };
    if (backgroundImage) {
      Object.assign(container, {
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed'
      });
      switch (backgroundRepeat) {
        case 'full':
          Object.assign(container, {
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%'
          });
          break;
        case 'repeat':
          Object.assign(container, {
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto'
          });
          break;
        case 'auto':
          Object.assign(container, {
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto'
          });
          break;
        default:
          break;
      }
    }
    const { clientWidth, clientHeight } = document.documentElement; // 页面宽高
    const heightScale = clientHeight / height; // 高度比
    const widthScale = clientWidth / width; // 宽度比
    const scaleWidth = width * heightScale; // 等高场景下的实际宽
    const scaleHeight = height * widthScale; // 等宽场景下的实际高

    // 页面缩放方案
    switch (scaleType) {
      case 'fullWidth': // 水平方向适应屏幕，高度自适应
        Object.assign(container, {
          width: `${width}px`,
          height: `${clientHeight / widthScale}px`,
          overflowY: 'auto',
          transform: `scale(${widthScale})`
        });
        // 缩放后高度 < 容器高度，居中偏移
        if (clientHeight / widthScale > scaleHeight) {
          Object.assign(page, {
            transform: `translateY(${(clientHeight / widthScale - height) / 2}px)`
          });
        }
        break;
      case 'fullHeight': // 垂直方向适应屏幕，水平自适应
        Object.assign(container, {
          width: `${clientWidth / heightScale}px`,
          height: `${height}px`,
          overflowX: 'auto',
          transform: `scale(${heightScale})`
        });
        // 缩放后宽度 < 容器宽度，居中偏移
        if (clientWidth / heightScale > scaleWidth) {
          Object.assign(page, {
            transform: `translateX(${(clientWidth / heightScale - width) / 2}px)`
          });
        }
        break;
      case 'cover': // 取水平垂直方向中最长边适应缩放
        if (heightScale < widthScale) {
          Object.assign(container, {
            width: `${clientWidth / heightScale}px`,
            height: `${height}px`,
            overflow: 'hidden',
            transform: `scale(${heightScale})`
          });
          // 缩放后宽度 < 容器宽度，居中偏移
          if (clientWidth / heightScale > scaleWidth) {
            Object.assign(page, {
              transform: `translateX(${(clientWidth / heightScale - width) / 2}px)`
            });
          }
        } else {
          Object.assign(container, {
            width: `${width}px`,
            height: `${clientHeight / widthScale}px`,
            overflow: 'hidden',
            transform: `scale(${widthScale})`
          });
          // 缩放后高度 < 容器高度，居中偏移
          if (clientHeight / widthScale > scaleHeight) {
            Object.assign(page, {
              transform: `translateY(${(clientHeight / widthScale - height) / 2}px)`
            });
          }
        }
        break;
      case 'disable': // 水平与垂直方向适应屏幕
        Object.assign(container, {
          width: `${width}px`,
          height: `${height}px`,
          overflow: 'hidden',
          transform: `scale(${widthScale},${heightScale})`
        });
        break;
      default:
        Object.assign(container, {
          width: `${width}px`,
          height: `${height}px`,
          overflow: 'hidden',
          transform: `scale(${widthScale},${heightScale})`
        });
        break;
    }
    setPageStyle(page);
    setContainerStyle(container);
    document.title = title;
  };
  return {
    pageStyle, containerStyle, computedContainerStyle
  };
};
export default usePreviewStyle;