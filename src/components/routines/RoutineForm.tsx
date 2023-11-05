"use client";
import React from "react";

import { Button } from "@/ui/Button";
import { z } from "zod";
import FormHeadline from "../FormHeadline";
import ExercisesForm from "./ExercisesForm";
import InformationForm from "./InformationForm";

const formSchema = z.object({
  exercises: z.array(
    z.object({
      provicionalId: z.number(),
      name: z.string().trim().min(3),
      sets: z.coerce.number(),
      reps: z.coerce.number().min(1),
      weight: z.coerce.number().min(0),
      weightUnit: z
        .string()
        .min(1)
        .refine((value) => {
          return value === "Kilogram" || value === "Pound";
        }),
      restMinutes: z.coerce.number().max(60).optional(),
      restSeconds: z.coerce.number().max(60).optional(),
    })
  ),
  bodyParts: z.array(z.string()).min(1),
  name: z.string().trim().min(3),
  notes: z.string().optional(),
  difficulty: z.string().trim().min(1),
});

export type FormType = z.infer<typeof formSchema>;

export default function RoutineForm() {
  const [form, setForm] = React.useState<FormType>({
    exercises: [],
    bodyParts: [],
    name: "",
    notes: "",
    difficulty: "",
  });

  function handleChangeString(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleChangeSelect(value: string, name: keyof FormType) {
    setForm({ ...form, [name]: value });
  }

  function handleChangeBodyPart(value: string) {
    const isSelected = form.bodyParts.includes(value);

    if (isSelected) {
      const newBodyParts = form.bodyParts.filter((part) => part !== value);
      return setForm({ ...form, bodyParts: newBodyParts });
    } else {
      return setForm({ ...form, bodyParts: [...form.bodyParts, value] });
    }
  }

  function handleAddExercise() {
    const newExercise: FormType["exercises"][number] = {
      provicionalId: Math.random(),
      name: "",
      sets: 4,
      reps: 12,
      weight: 20,
      weightUnit: "Kilogram",
      restMinutes: 1,
      restSeconds: 30,
    };
    setForm({ ...form, exercises: [...form.exercises, newExercise] });
  }

  function handleRemoveExercise(provicionalId: number) {
    const newExercises = form.exercises.filter(
      (exercise) => exercise.provicionalId !== provicionalId
    );

    setForm({ ...form, exercises: newExercises });
  }

  function handleUpdateExercise(
    provicionalId: number,
    newExercise: FormType["exercises"][number]
  ) {
    const newExercises = form.exercises.map((exercise) => {
      if (exercise.provicionalId === provicionalId) return newExercise;

      return exercise;
    });

    setForm({ ...form, exercises: newExercises });
  }

  return (
    <div>
      <div className="mb-12">
        <FormHeadline title="Exercises" />
        <ExercisesForm
          form={form}
          onAddExercise={handleAddExercise}
          onRemoveExercise={handleRemoveExercise}
          onUpdateExercise={handleUpdateExercise}
        />
      </div>

      <div>
        <FormHeadline title="Information" />
        <InformationForm
          form={form}
          onChangeString={handleChangeString}
          onChangeBodyPart={handleChangeBodyPart}
          onChangeSelect={handleChangeSelect}
        />
      </div>

      <Button className="mt-4 ml-auto block sticky bottom-0 shadow-sm">
        Create Routine
      </Button>
    </div>
  );
}
