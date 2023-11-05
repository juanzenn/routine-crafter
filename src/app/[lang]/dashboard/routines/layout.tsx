import { LayoutBaseProps } from "@/lib/definitions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Routine Crafter - Exercises",
};

export default function ExercisesPageLayout({ children }: LayoutBaseProps) {
  return <main>{children}</main>;
}
