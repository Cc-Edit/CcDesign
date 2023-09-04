import styles from './FormItem.module.css';
import { ToggleButtonGroup, ToggleButton, Tooltip } from '@mui/material';
import { useEffect, MouseEvent } from 'react';
import IconLoader from '@/components/Design/DynamicLoader/IconLoader';
interface ButtonGroupProps {
  [key: string]: any
  onChange?: Function
}
interface OptionItem {
  icon?: string,
  text?: string,
  tips?: string
  value: any
}
export default function ButtonGroup(props: ButtonGroupProps) {
  const { isRadio, defaultValue, value, onChange, options = [], className, ...nativeProp } = props;

  function handleChange(event: MouseEvent<HTMLElement>, newAlignment: string | null) {
    onChange?.(newAlignment);
  }
  const computedValue = value ?? defaultValue;
  useEffect(() => {
    if (computedValue !== value) {
      onChange?.(computedValue);
    }
  }, []);
  const child = options.map((item: OptionItem, index: number) => <ToggleButton key={index} className={styles.buttonGroupItem} value={item.value} >
          <Tooltip className={styles.tipsStyle} title={item.tips}>
            <div className='flex flex-row justify-center items-center text-xs'>
              {
                item.icon && <IconLoader className={styles.buttonGroupIcon} icon={item.icon} />
              }
              {
                item.text && item.text
              }
            </div>
          </Tooltip>
        </ToggleButton>
  );
  return (
    <div className={`${className}`}>
      <ToggleButtonGroup
        className={styles.buttonGroup}
        {...nativeProp}
        size='small'
        exclusive={Boolean(isRadio)}
        value={computedValue}
        onChange={handleChange}
      >
        {
          child
        }
      </ToggleButtonGroup>
    </div>
  );
}