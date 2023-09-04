import {
  Button,
  MenuItem,
  TextField
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Cancel, Save, DeleteForever, Edit } from '@mui/icons-material';
import { ChangeEvent, useState } from 'react';

interface EventItem {
  type?: string,
  action?: Record<string, any>
}
interface EventListItemProp{
  eventData: EventItem
  index: number
  editIndex?: number | null
  onDelete?: (index: number) => void
  onEdit?: (index: number) => void
}
const EventTypeMap: Record<string, any> = {
  none: '无',
  click: '点击',
  dblclick: '双击',
  mouseleave: '鼠标划过'
};
const ActionNameMap: Record<string, any> = {
  none: '无',
  jump: '当前页面跳转',
  open: '新页面打开'
};
export function EventListItem({ eventData, editIndex = null, index, onDelete = () => {}, onEdit = () => {} }: EventListItemProp) {
  const { type = '', action = {}} = eventData;
  const [showButton, setShowButton] = useState(false);
  return (
    <div
      className={`${editIndex === index ? 'dark:border-amber-500 border-amber-500 border-dashed -translate-x-1' : 'dark:border-neutral-700 border-neutral-300 border-solid'} relative rounded overflow-hidden mt-1 mb-1 pl-3 pr-2 pt-1 pb-1 ml-1 mr-1 flex flex-col justify-start items-start border `}
      onMouseLeave={() => { setShowButton(false); }}
      onMouseEnter={() => { setShowButton(true); }}
    >
      <i className='absolute left-0 top-0 bottom-0 w-1 bg-amber-300'></i>
      <div className='leading-7 text-xs'>当元素<span className='font-bold text-amber-700'>{EventTypeMap[type]}</span>时，执行<span className='font-bold text-amber-700'>{ActionNameMap[action.name]}</span></div>
      {(action.name === 'jump' || action.name === 'open') && <div className='leading-7 text-xs'>跳转地址为：<span className='font-bold text-amber-700'>{action.url}</span></div>}
      <div className={`${showButton ? 'w-18' : 'w-0'} overflow-hidden transition-all duration-300 flex justify-center items-center absolute right-0 top-0 bottom-0`}>
        <Edit className='w-6 h-6 cursor-pointer mr-2' onClick={() => { onEdit(index); }} />
        <DeleteForever className='w-6 h-6 cursor-pointer' onClick={() => { onDelete(index); }} />
      </div>
    </div>
  );
}
interface EventFormProp {
  newEvent: EventItem | null
  handleDataChange: (event: ChangeEvent<HTMLInputElement> | SelectChangeEvent, key: string, baseAction: Record<string, any>) => void
  onCancel: () => void
  onSave: () => void
}
export function EventForm({ newEvent, handleDataChange, onCancel, onSave }: EventFormProp) {
  const eventTypeChild = Object.keys(EventTypeMap).map((key: string, index: number) => {
    return <MenuItem key={index} value={key}>{EventTypeMap[key]}</MenuItem>;
  });
  const actionNameChild = Object.keys(ActionNameMap).map((key: string, index: number) => {
    return <MenuItem key={index} value={key}>{ActionNameMap[key]}</MenuItem>;
  });
  return (
    <div className={`w-full overflow-hidden ${newEvent ? 'opacity-100' : 'opacity-0 h-0'} transition-all duration-300 mt-2`}>
      <div className='overflow-hidden w-full border border-dashed border-amber-400 pl-4 pr-4 pt-2 pb-4 rounded'>
        <div className='border-left text-sm mb-4 '>新增事件</div>
        <div className='w-full mb-2'>
          <div className='w-1/3 inline-block text-xs'>事件类型</div>
          <Select value={newEvent?.type || 'none'} onChange={(e: SelectChangeEvent) => handleDataChange(e, 'type', {})} className='h-8 w-2/3'>
            { eventTypeChild }
          </Select>
        </div>
        <div className={`${newEvent?.type && newEvent?.type !== 'none' ? 'h-8' : 'h-0'} overflow-hidden mb-2 transition-all duration-300`}>
          <div className='w-1/3 inline-block text-xs'>动作类型</div>
          <Select value={newEvent?.action?.name || 'none'} onChange={(e: SelectChangeEvent) => handleDataChange(e, 'action.name', {})} className='h-8 w-2/3'>
            { actionNameChild }
          </Select>
        </div>
        <div className={`${newEvent?.action?.name && newEvent?.action?.name !== 'none' ? 'h-24' : 'h-0'} overflow-hidden mb-2 transition-all duration-300`}>
          <div className='w-1/3 inline-block text-xs'>跳转地址</div>
          <TextField
            className={`w-2/3`}
            multiline
            rows={4}
            value={newEvent?.action?.url || ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleDataChange(e, 'action.url', { name: newEvent?.action?.name, done: Boolean(e.target.value) })}
          ></TextField>
        </div>
        <div className={`transition-all duration-300 flex flex-row justify-around items-center`}>
          <Button variant='outlined' className={`${!newEvent?.action?.done ? ' opacity-30 ' : ''} text-amber-400 border-amber-400 `} disabled={!newEvent?.action?.done} startIcon={<Save />} onClick={onSave}>
            保存
          </Button>
          <Button variant='outlined' className='dark:text-neutral-500 dark:border-neutral-500 dark:hover:bg-neutral-800 text-neutral-400 border-neutral-400 hover:bg-neutral-200' startIcon={<Cancel />} onClick={onCancel}>
            取消
          </Button>
        </div>
      </div>
    </div>
  );
}