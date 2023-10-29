import Headline from "@/components/dashboard/Headline";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Routine Crafter - Routines",
};

export default function RoutinesPage() {
  return (
    <main>
      <Headline title="Routines" />
    </main>
  );
}
