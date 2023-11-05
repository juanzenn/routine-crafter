import { BODY_PARTS_OPTIONS } from "@/lib/constants";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

const BODY_PARTS = BODY_PARTS_OPTIONS;

async function main() {
  for (const { label, value } of BODY_PARTS) {
    await db.bodyPart.create({
      data: { name: label, id: value },
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect();
  });
