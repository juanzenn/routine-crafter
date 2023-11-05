-- CreateEnum
CREATE TYPE "DifficultyEnum" AS ENUM ('Beginner', 'Intermediate', 'Advance');

-- CreateEnum
CREATE TYPE "EquipmentEnum" AS ENUM ('NoEquipment', 'Dumbbell', 'Barbell', 'Kettlebell', 'ResistanceBand', 'MedicineBall', 'Treadmill', 'Bench', 'SmithMachine', 'CableMachine', 'WeightMachine');

-- CreateEnum
CREATE TYPE "WeightUnitEnum" AS ENUM ('Kilogram', 'Pound');

-- CreateTable
CREATE TABLE "Exercise" (
    "id" TEXT NOT NULL,
    "bodyPartId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "configurationId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "difficulty" "DifficultyEnum",
    "equipment" "EquipmentEnum"[],

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Routine" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "isTemplate" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "notes" TEXT,
    "difficulty" "DifficultyEnum",
    "date" TIMESTAMP(3),

    CONSTRAINT "Routine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoutineExercise" (
    "id" TEXT NOT NULL,
    "routineId" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "configurationId" TEXT NOT NULL,

    CONSTRAINT "RoutineExercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerciseConfiguration" (
    "id" TEXT NOT NULL,
    "exerciseId" TEXT,
    "routineExerciseId" TEXT,
    "sets" SMALLINT NOT NULL,
    "reps" SMALLINT NOT NULL,
    "weight" SMALLINT NOT NULL,
    "minutesRest" SMALLINT NOT NULL,
    "secondsRest" SMALLINT NOT NULL,
    "weightUnit" "WeightUnitEnum" NOT NULL DEFAULT 'Pound',

    CONSTRAINT "ExerciseConfiguration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BodyPartToRoutine" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Exercise_configurationId_key" ON "Exercise"("configurationId");

-- CreateIndex
CREATE UNIQUE INDEX "RoutineExercise_configurationId_key" ON "RoutineExercise"("configurationId");

-- CreateIndex
CREATE UNIQUE INDEX "_BodyPartToRoutine_AB_unique" ON "_BodyPartToRoutine"("A", "B");

-- CreateIndex
CREATE INDEX "_BodyPartToRoutine_B_index" ON "_BodyPartToRoutine"("B");

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_bodyPartId_fkey" FOREIGN KEY ("bodyPartId") REFERENCES "BodyPart"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_configurationId_fkey" FOREIGN KEY ("configurationId") REFERENCES "ExerciseConfiguration"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Routine" ADD CONSTRAINT "Routine_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoutineExercise" ADD CONSTRAINT "RoutineExercise_routineId_fkey" FOREIGN KEY ("routineId") REFERENCES "Routine"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoutineExercise" ADD CONSTRAINT "RoutineExercise_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoutineExercise" ADD CONSTRAINT "RoutineExercise_configurationId_fkey" FOREIGN KEY ("configurationId") REFERENCES "ExerciseConfiguration"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BodyPartToRoutine" ADD CONSTRAINT "_BodyPartToRoutine_A_fkey" FOREIGN KEY ("A") REFERENCES "BodyPart"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BodyPartToRoutine" ADD CONSTRAINT "_BodyPartToRoutine_B_fkey" FOREIGN KEY ("B") REFERENCES "Routine"("id") ON DELETE CASCADE ON UPDATE CASCADE;
