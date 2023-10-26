import { db } from "@/lib/db";

export default async function Home() {
  const users = await db.user.findMany();

  return (
    <main className="min-h-screen p-24">
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </main>
  );
}
