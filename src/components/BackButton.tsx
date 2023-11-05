import { cn } from "@/lib/utils";
import { buttonVariants } from "@/ui/Button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function BackButton(
  props: React.HTMLAttributes<HTMLAnchorElement>
) {
  return (
    <Link
      {...props}
      href="."
      className={cn(buttonVariants({ variant: "ghost" }), props.className)}
    >
      <ArrowLeft size={20} className="mr-2" />
      Back
    </Link>
  );
}
