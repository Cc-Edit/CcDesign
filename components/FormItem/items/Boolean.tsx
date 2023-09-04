import { Switch } from '@mui/material';
import { ChangeEvent, useEffect } from 'react';
interface BooleanProps {
  [key: string]: any
  onChange?: Function
}
export default function Boolean(props: BooleanProps) {
  const { className, defaultValue, value, onChange, ...prop } = props;
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange?.(event.target.checked);
  }
  const computedValue: boolean = value ?? defaultValue ?? false;
  useEffect(() => {
    if (computedValue !== value) {
      onChange?.(computedValue);
    }
  }, []);
  return (
    <div className={`${className}`}>
      <Switch checked={computedValue} onChange={handleChange} {...prop} />
    </div>
  );
}