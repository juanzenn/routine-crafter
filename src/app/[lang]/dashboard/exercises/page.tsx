import Headline from "@/components/dashboard/Headline";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Routine Crafter - Exercises",
};

export default function ExercisesPage() {
  return (
    <main>
      <Headline title="Exercises" />
    </main>
  );
}
