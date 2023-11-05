import React from "react";

import BackButton from "@/components/BackButton";
import Headline from "@/components/dashboard/Headline";
import RoutineForm from "@/components/routines/RoutineForm";

export default function NewExercisePage() {
  return (
    <>
      <header>
        <BackButton className="-ml-4" />

        <Headline
          className="mt-6"
          title="New Routine"
          subtitle="Create a new template for your workouts. You can always modify it later."
        />
      </header>

      <section className="max-w-3xl mt-10">
        <RoutineForm />
      </section>
    </>
  );
}
