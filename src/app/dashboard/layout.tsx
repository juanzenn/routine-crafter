import { type Metadata } from "next";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "FitPal - Dashboard",
};

export default function layout({ children }: Props) {
  return (
    <section>
      {/* Agregar navegacion */}
      {children}
    </section>
  );
}
