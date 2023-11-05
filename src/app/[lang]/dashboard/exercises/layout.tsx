import Headline from "@/components/dashboard/Headline";
import { LayoutBaseProps } from "@/lib/definitions";
import { Separator } from "@/ui/separator";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Routine Crafter - Exercises",
};

export default function ExercisesPageLayout({ children }: LayoutBaseProps) {
  return (
    <main>
      <Headline
        title="Exercises"
        subtitle="It all starts with exercises. Manage your exercises lists so you can add them into your routines."
      />

      <Separator className="my-4" />

      {children}
    </main>
  );
}
