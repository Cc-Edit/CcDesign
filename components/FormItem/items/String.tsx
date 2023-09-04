import styles from './FormItem.module.css';
import { OutlinedInput } from '@mui/material';
import { ChangeEvent, useEffect } from 'react';
interface StringProps {
  [key: string]: any
  onChange?: Function
}
export default function String(props: StringProps) {
  const { className, defaultValue, value, onChange, ...prop } = props;
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange?.(event.target.value);
  }
  const computedValue = value ?? defaultValue ?? '';
  useEffect(() => {
    if (computedValue !== value) {
      onChange?.(computedValue);
    }
  }, []);

  return (
    <div className={`${className}`}>
      <OutlinedInput
        className={styles.textField}
        value={computedValue}
        onChange={handleChange}
        {...prop}
      />
    </div>
  );
}