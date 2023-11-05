import { buttonVariants } from "@/ui/Button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function BackButton() {
  return (
    <Link href="." className={buttonVariants({ variant: "ghost" })}>
      <ArrowLeft size={20} className="mr-2" />
      Back
    </Link>
  );
}
