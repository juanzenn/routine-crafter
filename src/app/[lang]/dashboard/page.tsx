import Headline from "@/components/dashboard/Headline";
import React from "react";

export default async function DashboardPage() {
  return (
    <main>
      <Headline
        title="Welcome back!"
        subtitle="Here is a resume of your routines and exercises. Have a great day!"
      />

      <section className="grid grid-cols-3 gap-6">
        <Card title="Your routines">
          <section></section>
        </Card>

        <Card title="Your exercises">
          <section></section>
        </Card>
      </section>
    </main>
  );
}

function Card({
  children,
  title,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-4 mt-4">
      <h2 className="text-lg font-medium">{title}</h2>

      {children}
    </div>
  );
}
