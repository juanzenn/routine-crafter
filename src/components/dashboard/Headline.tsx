import React from "react";

type Props = {
  title: string;
  subtitle?: string;
} & React.HTMLAttributes<HTMLHeadElement>;

export default function Headline({ title, subtitle, ...rest }: Props) {
  return (
    <header {...rest}>
      <h1 className="font-semibold text-3xl">{title}</h1>
      <p className="text-slate-600 mt-2 max-w-[50dvw]">{subtitle}</p>
    </header>
  );
}
