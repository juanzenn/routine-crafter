import Headline from "@/components/dashboard/Headline";
import { buttonVariants } from "@/ui/Button";
import { Separator } from "@/ui/separator";
import Link from "next/link";
import React from "react";

export default function RoutinesPage() {
  return (
    <>
      <Headline title="Routines" subtitle="Manage and review your routines." />
      <Separator className="my-4" />

      <header>
        <Link href="routines/new" className={buttonVariants()}>
          Create Routine
        </Link>
      </header>
    </>
  );
}
