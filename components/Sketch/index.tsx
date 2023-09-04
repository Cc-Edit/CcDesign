import SketchRuler from '@/components/Design/components/SketchRuler';
import style from './Sketch.module.css';
import { sketchProps } from '@/components/Design/data/rulerConfig';
import DraggableContainer from '@/components/Design/components/DraggableContainer';
import useRulerProps from '@/components/Design/hook/useRulerProps';

export default function Sketch() {
  const { rulerProps, screensRef, containerRef, canvasRef } = useRulerProps();

  return (
    <div className='w-full h-full overflow-hidden z-10 relative transition-all duration-700' style={{ opacity: rulerProps.width === 0 ? '0' : '100' }}>
      <SketchRuler {...sketchProps} {...rulerProps}/>
      <div ref={screensRef} className={style.screens} >
        <div ref={canvasRef} className={style.canvas}>
          <div ref={containerRef} id='designContainer' className={style.container} >
            <DraggableContainer scale={rulerProps.scale} />
          </div>
        </div>
      </div>
    </div>
  );
}