import React from "react";

type Props = {
  title: string;
  subtitle?: string;
};

export default function Headline({ title, subtitle }: Props) {
  return (
    <header>
      <h1 className="font-semibold text-3xl text-slate-900">{title}</h1>
      <p className="text-slate-600 mt-2">{subtitle}</p>
    </header>
  );
}
