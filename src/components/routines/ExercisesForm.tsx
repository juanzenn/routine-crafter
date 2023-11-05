import { WEIGHT_UNITS_OPTIONS } from "@/lib/constants";
import { Button } from "@/ui/Button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import { Separator } from "@/ui/separator";
import { Cog, Cross, Trash2, X } from "lucide-react";
import React from "react";
import { FormType } from "./RoutineForm";

type Props = {
  form: FormType;
  onAddExercise: () => void;
  onRemoveExercise: (provicionalId: number) => void;
  onUpdateExercise: (
    provicionalId: number,
    newExercise: FormType["exercises"][number]
  ) => void;
};

export default function ExercisesForm({
  form,
  onAddExercise,
  onRemoveExercise,
  onUpdateExercise,
}: Props) {
  const { exercises } = form;

  function handleChangeExerciseKey(
    key: keyof FormType["exercises"][number],
    newValue: string | number,
    provicionalId: number
  ) {
    const newExercise = exercises.find(
      (exercise) => exercise.provicionalId === provicionalId
    );

    if (!newExercise) return;

    onUpdateExercise(provicionalId, { ...newExercise, [key]: newValue });
  }

  return (
    <div className="space-y-6">
      {exercises.length === 0 && (
        <p className="text-gray-400 text-sm">
          You don&apos;t have any exercise yet. Click on the button below to add
          one.
        </p>
      )}

      {exercises.map((exercise, index) => (
        <ExerciseArticle
          key={exercise.provicionalId}
          exercise={exercise}
          isLast={index === exercises.length - 1}
          onChangeExercise={handleChangeExerciseKey}
          onRemoveExercise={onRemoveExercise}
        />
      ))}

      <Button onClick={onAddExercise} variant="outline">
        Add Exercise
      </Button>
    </div>
  );
}

type ExerciseArticleProps = {
  exercise: FormType["exercises"][number];
  isLast: boolean;
  onChangeExercise: (
    key: keyof FormType["exercises"][number],
    newValue: string | number,
    provicionalId: number
  ) => void;
  onRemoveExercise: (provicionalId: number) => void;
};

function ExerciseArticle({
  exercise,
  isLast,
  onChangeExercise,
  onRemoveExercise,
}: ExerciseArticleProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const {
    provicionalId,
    name,
    sets,
    reps,
    weight,
    weightUnit,
    restMinutes,
    restSeconds,
  } = exercise;

  return (
    <article key={provicionalId}>
      <div className="flex items-center">
        <Input
          id={`exercise-${provicionalId}`}
          placeholder={`Bench Press`}
          name={name}
          value={name}
          onChange={(e) =>
            onChangeExercise("name", e.target.value, provicionalId)
          }
        />

        <Button
          variant="ghost"
          className="p-1 ml-6 h-fit"
          title="Expand configuration"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Cog size={18} />
        </Button>

        <Button
          variant="ghost"
          className="hover:bg-red-500 hover:text-white p-1 ml-2 h-fit"
          title="Remove exercise"
          onClick={() => onRemoveExercise(provicionalId)}
        >
          <X size={18} />
        </Button>
      </div>

      {!isLast && !isExpanded && <Separator className="my-4" />}

      {isExpanded && (
        <>
          <div className="flex items-end mt-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="sets">Sets</Label>
              <Input
                id="sets"
                name="sets"
                type="number"
                placeholder="4"
                value={sets}
                onChange={(e) =>
                  onChangeExercise("sets", e.target.value, provicionalId)
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reps">Reps</Label>
              <Input
                id="reps"
                name="reps"
                type="number"
                placeholder="12"
                value={reps}
                onChange={(e) =>
                  onChangeExercise("reps", e.target.value, provicionalId)
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight">Weight</Label>
              <Input
                id="weight"
                name="weight"
                type="number"
                placeholder="120"
                value={weight}
                onChange={(e) =>
                  onChangeExercise("name", e.target.value, provicionalId)
                }
              />
            </div>

            <Select
              value={weightUnit}
              onValueChange={(value) => {
                onChangeExercise("weightUnit", value, provicionalId);
              }}
            >
              <SelectTrigger id="weight-unit" className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {WEIGHT_UNITS_OPTIONS.map(({ label, value }) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-end mt-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="restMinutes">Rest (minutes)</Label>
              <Input
                id="restMinutes"
                name="restMinutes"
                type="number"
                placeholder="1"
                value={restMinutes}
                onChange={(e) =>
                  onChangeExercise("restMinutes", e.target.value, provicionalId)
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="restSeconds">Rest (seconds)</Label>
              <Input
                id="restSeconds"
                name="restSeconds"
                type="number"
                placeholder="30"
                value={restSeconds}
                onChange={(e) =>
                  onChangeExercise("restSeconds", e.target.value, provicionalId)
                }
              />
            </div>
          </div>
        </>
      )}

      {!isLast && isExpanded && <Separator className="my-4" />}
    </article>
  );
}
