import Headline from "@/components/dashboard/Headline";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Routine Crafter - Profile",
};

export default function ProfilePage() {
  return (
    <main>
      <Headline title="Profile" />
    </main>
  );
}
