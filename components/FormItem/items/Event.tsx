import {
  Button,
  MenuItem,
  TextField
} from '@mui/material';
import { set } from 'lodash';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Add, Cancel, Save } from '@mui/icons-material';
import { ChangeEvent, useEffect, useState } from 'react';
import { EventListItem, EventForm } from './EventHandler';

interface EventProps {
  [key: string]: any,
  onChange: Function
}
interface EventItem {
  type?: string,
  action?: Record<string, any>
}

export default function Event(props: EventProps) {
  const { className, tips, value, onChange, ...prop } = props;
  const [eventList, setEventList] = useState<EventItem[]>(value || []);
  const [newEvent, setNewEvent] = useState<EventItem|null>(null);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  function onSave() {
    if (newEvent) {
      const newEventList = [
        ...eventList
      ];
      if (editIndex !== null) {
        newEventList.splice(editIndex, 1, newEvent);
      } else {
        newEventList.push(newEvent);
      }
      setEventList(newEventList);
      setNewEvent(null);
      setEditIndex(null);
      onChange?.(newEventList);
    }
  }
  function onCancel() {
    setNewEvent(null);
    setEditIndex(null);
  }
  function onDelete(index: number) {
    const newEventList = [...eventList.slice(0, index), ...eventList.slice(index + 1)];
    setEventList(newEventList);
    onChange?.(newEventList);
  }
  function onEdit(index: number) {
    const targetEvent = eventList[index];
    if (targetEvent) {
      setNewEvent(targetEvent);
      setEditIndex(index);
    }
  }
  function handleAdd() {
    setNewEvent({});
    setEditIndex(null);
  }
  function handleDataChange(event: ChangeEvent<HTMLInputElement> | SelectChangeEvent, key: string, baseAction: Record<string, any>) {
    const value = event.target.value;
    const newEventData = {
      ...newEvent,
      action: baseAction
    };
    set(newEventData, key, value);
    setNewEvent(newEventData);
  }
  const eventListChild = eventList.map((item, index) => {
    return <EventListItem key={`${item.type}-${index}`} editIndex={editIndex} index={index} eventData={item} onDelete={onDelete} onEdit={onEdit} />;
  });
  return (
    <div className={`${className}`}>
      <div className={`${eventListChild.length === 0 ? 'h-0' : ''} overflow-hidden w-full flex flex-col`}>
        <div className='border-left text-sm mb-1'>已添加事件</div>
        {
          eventListChild
        }
      </div>
      <EventForm {...{ newEvent, handleDataChange, onCancel, onSave }} />
      <div className={`${newEvent ? 'opacity-0' : ''} overflow-hidden transition-all duration-300 mt-2 flex items-center justify-center`}>
        {
          <Button variant='outlined' startIcon={<Add />} onClick={handleAdd}>
            添加事件
          </Button>
        }
      </div>
    </div>
  );
}