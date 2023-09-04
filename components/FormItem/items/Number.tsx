import styles from './FormItem.module.css';
import { OutlinedInput, Tooltip } from '@mui/material';
import { ChangeEvent, useEffect } from 'react';
interface NumberProps {
  [key: string]: any,
  onChange: Function
}
export default function Number(props: NumberProps) {
  const { className, tips, defaultValue, value, onChange, ...prop } = props;
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange?.(event.target.value !== '' ? parseFloat(event.target.value) : defaultValue);
  }
  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    event.target.value = event.target.value.replace(/[^\d,\\.]/g, '');
  }
  const computedValue: number = value ?? defaultValue ?? 0;
  useEffect(() => {
    if (computedValue !== value) {
      onChange?.(computedValue);
    }
  }, []);
  return (
    <Tooltip className={styles.tipsStyle} title={tips}>
      <div className={`${className}`}>
        <OutlinedInput
          className={styles.textField}
          {...prop}
          value={`${computedValue}`.replace(/[^\d,\\.]/g, '')}
          onChange={handleChange}
          onInput={handleInput}
        />
      </div>
    </Tooltip>
  );
}