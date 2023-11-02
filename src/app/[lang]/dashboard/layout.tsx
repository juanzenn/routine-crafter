import { type Metadata } from "next";
import React from "react";

import SideNavigation from "@/components/dashboard/SideNavigation";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Routine Crafter - Dashboard",
};

export default function layout({ children }: Props) {
  return (
    <section className="h-full flex bg-slate-100">
      <SideNavigation />

      <main className="flex-[3] bg-white h-[calc(100%-1.5rem)] m-3 ml-0 border border-slate-200 p-4 lg:p-6 overflow-y-auto overflow-x-hidden rounded-sm">
        {children}
      </main>
    </section>
  );
}
