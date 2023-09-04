import { useAppDispatch, useAppSelector } from '@/store';
import { useRef, useState, useEffect } from 'react';
import { updateLines } from '@/store/slice/Design';
import { DarkPalette, LightPalette } from '@/components/Design/data/rulerConfig';
import useThemeSwitch from '@/components/Design/hook/useThemeSwitch';
import { delay } from '@/utils/common';

const useRulerProps = () => {
  const { theme } = useThemeSwitch();
  const thick = 16;
  const screensRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  // 页面缩放
  const [scale, setScale] = useState(2);
  // 页面样式
  const pageConfig = useAppSelector(state => state.design.page);
  const { width = 0, height = 0, opacity = 100, backgroundColor, backgroundImage, backgroundRepeat } = pageConfig;
  useEffect(() => {
    // 页面样式
    const containerStyle = {
      width: `${width}px`,
      height: `${height}px`,
      opacity: `${opacity}%`,
      backgroundColor: backgroundColor ? `rgba(${backgroundColor.r},${backgroundColor.g},${backgroundColor.b},${backgroundColor.a})` : '',
      transform: `scale(${scale})`
    };
    if (backgroundImage) {
      Object.assign(containerStyle, {
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed'
      });
      switch (backgroundRepeat) {
        case 'full':
          Object.assign(containerStyle, {
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%'
          });
          break;
        case 'repeat':
          Object.assign(containerStyle, {
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto'
          });
          break;
        case 'auto':
          Object.assign(containerStyle, {
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto'
          });
          break;
        default:
          break;
      }
    }
    if (containerRef.current) {
      Object.assign(containerRef.current.style, containerStyle);
    }
  }, [width, height, opacity, backgroundColor, scale, backgroundImage, backgroundRepeat]);

  // 辅助线
  const lines = useAppSelector(state => state.design.lines);
  const handleLineChange = (newLine: {h: number[], v: number[]}) => {
    dispatch(updateLines(newLine));
  };
  // 辅助线切换
  const [isShowReferLine, setShowReferLine] = useState(true);
  const onCornerClick = () => {
    setShowReferLine(!isShowReferLine);
  };
  // 标尺偏移
  const [position, setPosition] = useState({
    startX: 0,
    startY: 0
  });
  // 画布尺寸
  const [canvasSize, setCanvasSize] = useState({
    width: 0,
    height: 0
  });
  // 动态调整画布大小
  function resizeCanvas() {
    if (!screensRef.current) return;
    const screens = screensRef.current;
    const screensRect = screens.getBoundingClientRect();
    setCanvasSize({
      width: screensRect.width - 16,
      height: screensRect.height - 16
    });
  }
  // 初始化画板
  function initCanvasView() {
    if (!canvasRef.current || !screensRef.current) return;
    const screens = screensRef.current;
    const canvasRect = canvasRef.current.getBoundingClientRect();
    const screensRect = screens.getBoundingClientRect();
    screens.scrollLeft = (canvasRect.width - screensRect.width) / 2;
    screens.scrollTop = (canvasRect.height - screensRect.height) / 2;
  }
  // 滚动
  function handleScroll() {
    if (!containerRef.current || !screensRef.current) return;
    const screensRect = screensRef.current.getBoundingClientRect();
    const canvasRect = containerRef.current.getBoundingClientRect();
    const startX = (screensRect.left + thick - canvasRect.left) / scale;
    const startY = (screensRect.top + thick - canvasRect.top) / scale;
    setPosition({ startX, startY });
  }
  // 放大缩小
  function handleWheel(e: any) {
    if (e.ctrlKey || e.metaKey) {
      const nextScale = parseFloat(Math.max(0.2, scale - e.deltaY / 500).toFixed(2));
      setScale(nextScale);
    }
  }
  // 事件监听
  const resizeObserver = new ResizeObserver(entries => {
    resizeCanvas();
  });
  useEffect(() => {
    if (!screensRef.current) return () => {};
    screensRef.current?.addEventListener('scroll', handleScroll, { passive: true });
    screensRef.current?.addEventListener('wheel', handleWheel, { passive: true });
    handleScroll();
    return () => {
      screensRef.current?.removeEventListener('wheel', handleWheel);
      screensRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, [scale]);
  useEffect(() => {
    if (!screensRef.current) return () => {};
    resizeObserver.observe(screensRef.current);
    delay(600).then(() => {
      initCanvasView();
    });
    return () => {
      screensRef.current && resizeObserver.unobserve(screensRef.current as Element);
    };
  }, [screensRef, canvasRef, containerRef]);

  // 整理参数
  const rulerProps = {
    scale,
    thick,
    verLineArr: lines.v,
    horLineArr: lines.h,
    isShowReferLine,
    ...position,
    ...canvasSize,
    palette: theme === 'dark' ? DarkPalette : LightPalette,
    shadow: {
      x: 0,
      y: 0,
      width,
      height
    },
    handleLineChange,
    onCornerClick
  };
  return {
    screensRef,
    canvasRef,
    containerRef,
    rulerProps
  };
};
export default useRulerProps;