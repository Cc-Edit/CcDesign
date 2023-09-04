import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { SketchPicker } from 'react-color';
import { useEffect } from 'react';
interface ColorProps {
  [key: string]: any
  onChange?: Function
}
const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#fff',
    padding: '0px'
  }
}));
export default function Color(props: ColorProps) {
  const { className, defaultValue, value, onChange, ...prop } = props;
  function handleChange(color: Record<string, any>) {
    onChange?.(color.rgb);
  }
  const computedValue = value ?? defaultValue ?? {
    r: 255,
    g: 255,
    b: 255,
    a: 1
  };
  useEffect(() => {
    if (computedValue !== value) {
      onChange?.(computedValue);
    }
  }, []);
  return (
    <div className={`${className}`}>
      <HtmlTooltip
        title={
          <SketchPicker
            color={ computedValue }
            onChangeComplete={handleChange}
          />
        }
      >
        <div className='mt-2  w-4 h-4 border border-solid border-neutral-500' style={{ backgroundColor: `rgba(${computedValue.r},${computedValue.g},${computedValue.b},${computedValue.a})` }}></div>
      </HtmlTooltip>
    </div>
  );
}