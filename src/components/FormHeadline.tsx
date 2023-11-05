import { Separator } from "@/ui/separator";
import React from "react";

type Props = {
  title: string;
  subtitle?: string;
};

export default function FormHeadline({ title, subtitle }: Props) {
  return (
    <>
      <h2 className="font-semibold text-2xl">{title}</h2>
      <p className="text-slate-600 mt-2 max-w-[50dvw]">{subtitle}</p>

      <Separator className="my-4" />
    </>
  );
}
