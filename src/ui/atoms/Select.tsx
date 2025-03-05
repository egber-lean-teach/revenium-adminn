interface ISelectProps<B>
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  id: string;
  options: B[];
}
export default function Select<B>({
  name,
  id,
  options,
  ...props
}: ISelectProps<B>): React.ReactNode {
  return (
    <select
      className="focus:outline-0 p-2 border-[var(--color-gray-light-three)] border-1 rounded-[6px]"
      name={name}
      id={id}
      {...props}
    >
      {options.map((value, index) => (
        <option key={`${value}${id}${name}/${index}`} className="w-full">
          {value}
        </option>
      ))}
    </select>
  );
}
