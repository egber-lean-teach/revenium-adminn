"use client";
import { useTitleState } from "@/app/core/application/global-state";
import { IList } from "@/app/core/application/interfaces";
import Link from "next/link";
import { useEffect } from "react";

interface IItemListProps {
  data: IList;
}
export default function ItemList({ data }: IItemListProps): React.ReactNode {
  const { title, setTitle } = useTitleState((state) => state);

  useEffect(() => {
    setTitle(data.text || "");
  }, [data.text, setTitle]);
  return (
    <li>
      <Link
        className="flex items-center gap-3 text-[var(--color-text-gray)] cursor-pointer hover:text-[var(--color-text-gray-hover)] font-medium"
        href={data.href || ""}
      >
        {data.icon && <span>{data.icon}</span>}
        {data.text && <p>{data.text}</p>}
      </Link>
    </li>
  );
}
