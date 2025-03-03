"use client";
import { usePathname } from "next/navigation";

export default function Title(): React.ReactNode {
  const pathname: string = usePathname();

  const title: string = pathname.split("/")[1];
  const firsLetterUpperCase: string = title.split("")[0].toUpperCase();
  return (
    <h1 className="font-medium text-[1.4rem]">
      {`${firsLetterUpperCase}${title.slice(1)}`}
    </h1>
  );
}
