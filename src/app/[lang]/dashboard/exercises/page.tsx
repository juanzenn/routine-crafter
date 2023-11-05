import Headline from "@/components/dashboard/Headline";
import { buttonVariants } from "@/ui/Button";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Routine Crafter - Exercises",
};

export default function ExercisesPage() {
  return (
    <section>
      <header>
        <Link href="exercises/new" className={buttonVariants()}>
          Create Exercise
        </Link>
      </header>
    </section>
  );
}
