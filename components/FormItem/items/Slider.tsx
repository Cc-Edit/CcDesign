import { Slider as MuiSlider } from '@mui/material';
import { useEffect } from 'react';
interface SliderProps {
  [key: string]: any
  onChange?: Function
}
export default function Slider(props: SliderProps) {
  const { className, defaultValue, value, onChange, ...prop } = props;
  function handleChange(event: Event, newVal: number | number[]) {
    onChange?.(newVal);
  }
  const computedValue: number = value ?? defaultValue ?? 0;
  useEffect(() => {
    if (computedValue !== value) {
      onChange?.(computedValue);
    }
  }, []);
  return (
    <div className={`${className} flex`}>
      <MuiSlider
        size='small'
        aria-label='Small'
        valueLabelDisplay='auto'
        {...prop}
        value={computedValue}
        onChange={handleChange}
      />
    </div>
  );
}