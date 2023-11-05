import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

const BODY_PARTS = [
  "Chest",
  "Back",
  "Shoulders",
  "Biceps",
  "Triceps",
  "Core",
  "Quads",
  "Hamstrings",
  "Glutes",
];

async function main() {
  for (const part of BODY_PARTS) {
    await db.bodyPart.create({
      data: { name: part },
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect();
  });
