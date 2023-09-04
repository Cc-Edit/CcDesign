import { MouseEvent } from 'react';
import { selectComponents } from '@/store/slice/Design';
import { useAppDispatch, useAppSelector } from '@/store';
interface EventItem {
  type: string,
  action: Record<string, any>
}
const useEventHandler = (isPreview = false) => {
  const dispatch = useAppDispatch();
  const eventMap = useAppSelector(state => state.design.event);

  function eventHandler(e: MouseEvent) {
    const id = e.currentTarget?.id;
    const originType = e.type;
    const events: EventItem[] = eventMap[id];
    if (events && events.length > 0) {
      events.forEach(item => {
        const { type, action } = item;
        if (type === originType) {
          const { name } = action;
          switch (name) {
            case 'jump':
              window.location.href = action.url;
              break;
            case 'open':
              window.open(action.url, '_blank');
              break;
            default:
              break;
          }
        }
      });
    }
  }
  function pickTarget(e: MouseEvent) {
    const id = e.currentTarget?.id;
    if (id) {
      dispatch(selectComponents([id]));
    }
    e.stopPropagation();
  }
  if (isPreview) {
    return {
      onClick: eventHandler,
      onDoubleClick: eventHandler,
      onMouseLeave: eventHandler
    };
  } else {
    return {
      onClick: pickTarget,
      onDoubleClick: () => {},
      onMouseLeave: () => {}
    };
  }
};
export default useEventHandler;