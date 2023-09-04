import { TextField } from '@mui/material';
import { ChangeEvent, useEffect } from 'react';
interface TextAreaProps {
  [key: string]: any
  onChange?: Function
}
export default function TextArea(props: TextAreaProps) {
  const { className, defaultValue, value, onChange, ...prop } = props;
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange?.(event.target.value);
  }
  const computedValue = value ?? defaultValue;
  useEffect(() => {
    if (computedValue !== value) {
      onChange?.(computedValue);
    }
  }, []);
  return (
    <div className={`${className} mt-1`}>
      <TextField
        className='w-full'
        multiline
        value={computedValue}
        onChange={handleChange}
        {...prop}
        ></TextField>
    </div>
  );
}