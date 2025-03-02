interface IVariant {
  default: string;
  outline: string;
  secondary: string;
}
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "default" | "outline" | "secondary";
  text: string;
}

export default function Button({
  variant,
  text,
  ...props
}: IButtonProps): React.ReactNode {
  const classVariant: IVariant = {
    default: "bg-transparent border-gray-100 hover:bg-gray-200",
    outline: "bg-blue border-none hover:bg-blue400",
    secondary: "bg-[#1d1d1d] border-none text-white",
  };
  return (
    <button
      className={`border-2 rounded-[6px] p-2 cursor-pointer px-6 ${classVariant[variant]}`}
      {...props}
    >
      {text}
    </button>
  );
}
