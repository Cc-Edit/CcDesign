interface TextProps {
  text: string
  className?: string
  size?: string
  opacity?: boolean
}
export default function Text(props: TextProps) {
  const { text, opacity = true, className = 'w-18', size = 'text-xs' } = props;
  return (
    <div className={`${opacity ? '' : 'dark:bg-neutral-900 bg-neutral-50 '} leading-8 pl-2 pr-2 border-0 border-solid dark:border-zinc-500 border-zinc-300 align-middle ${className} ${size}`}>
      {
        `${text}`
      }
    </div>
  );
}