interface ITextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
export default function TextArea({
  ...props
}: ITextAreaProps): React.ReactNode {
  return <textarea {...props}></textarea>;
}
