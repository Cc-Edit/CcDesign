import { useAppSelector } from '@/store';
import { useEffect } from 'react';
import ComponentItem from '@/components/Design/components/ComponentItem';
import EmptyIcon from '@/components/Svg/Empty';
import usePreviewStyle from '@/components/Design/hook/usePreviewStyle';
import useEventHandler from '@/components/Design/hook/useEventHandler';

export default function Preview() {
  const { pageStyle, containerStyle, computedContainerStyle } = usePreviewStyle();
  const pageConfig = useAppSelector(state => state.design.page);
  const layoutData = useAppSelector(state => state.design.layout);
  useEffect(() => {
    function handleResize() {
      computedContainerStyle();
    }
    computedContainerStyle();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [pageConfig]);
  const elements = layoutData.map(component => {
    const { id } = component;
    return <ComponentItem key={id} component={component} isSelect={false} isPreview={true}></ComponentItem>;
  });
  return (
    <div id='preview' style={containerStyle} className='relative'>
      <div style={pageStyle} >
        {
          elements.length === 0
            ? <div className='pb-2 h-full w-full flex flex-col justify-center items-center content-center'>
              <EmptyIcon size={240}/>
              <b className='text-center text-zinc-500'>设计内容为空</b>
            </div>
            : elements
        }
      </div>
    </div>
  );
}