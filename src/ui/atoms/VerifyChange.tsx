"use client";

import { ITextResponseComplete } from "@/app/core/application/dto";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface IVerifyChangeProps {
  response: ITextResponseComplete;
  categories: string[];
  subcategories: string[];
  children: React.ReactNode;
}
export default function VerifyChange({
  response,
  categories,
  subcategories,
  children,
}: IVerifyChangeProps): React.ReactNode {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [response, categories, subcategories]);

  return <>{children}</>;
}
