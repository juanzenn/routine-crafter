import { nextAuth } from "./auth";
import { db } from "./db";

export async function getCurrentUser() {
  const session = await nextAuth.auth();
  const user = session?.user;

  if (!user) return null;

  const dbRecord = await db.user.findUnique({
    where: { email: user.email! },
  });

  return dbRecord;
}
