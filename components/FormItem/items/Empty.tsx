import EmptyContainer from '@/components/Design/components/EmptyContainer';
interface EmptyProps {
  text: string
}
export default function Empty(props: EmptyProps) {
  const { text } = props;
  return (
    <EmptyContainer text={text}/>
  );
}