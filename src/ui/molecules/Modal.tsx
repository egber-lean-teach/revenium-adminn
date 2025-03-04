import { IConClose } from "../../../public/icons";
import { IconContent } from "../atoms";

interface ISize {
  sm: string;
  md: string;
  lg: string;
}

interface IModalProps {
  children: React.ReactNode;
  size: "sm" | "md" | "lg";
  title: string;
  subtitle?: string;
  open: boolean;
  setOpen: (value: boolean) => void;
}
export default function Modal({
  children,
  size,
  title,
  subtitle,
  open,
  setOpen,
}: IModalProps): React.ReactNode {
  const sizeModal: ISize = {
    sm: "w-[25vw]",
    md: "w-[50vw]",
    lg: "w-[80vw]",
  };

  return (
    <div
      className={`bg-[var(--color-black-opacity)] w-[100vw] h-[99.5vh] absolute top-0 left-0 flex justify-center items-center transition-all duration-300 ease-in z-100`}
    >
      <div className={`${sizeModal[size]} bg-white rounded-[10px] p-6`}>
        <div className="flex justify-between items-center">
          <h2 className="text-[var(--color-green-dark)] text-[1.4rem] font-medium">
            {title}
          </h2>
          <IconContent
            icon={<IConClose />}
            className="text-[var(--color-text-gray)] cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <p className="text-[var(--color-text-gray)] text-[.9rem] mb-4">
          {subtitle}
        </p>
        {children}
      </div>
    </div>
  );
}
