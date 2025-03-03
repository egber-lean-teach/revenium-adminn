import Image from "next/image";
import { IconText } from "../atoms";
import { IconArrowChange, IconLogout, IconUser } from "../../../public/icons";
export default function Header(): React.ReactNode {
  return (
    <header className="flex justify-between items-center w-full border-gray-200 border-b-1 bg-[var(--color-gray-light)]">
      <div className="w-[18%] border-gray-200 border-r-1 p-5 pl-6">
        <Image
          src="/revenium-h.png"
          width={100}
          height={100}
          alt="image-revenium-logo"
          className="w-[50%]"
        />
      </div>
      <div className="pr-5 flex gap-3">
        <IconText text="Cobia Testing" icon={<IconArrowChange />} />
        <IconText icon={<IconUser />} />
        <IconText icon={<IconLogout />} />
      </div>
    </header>
  );
}
