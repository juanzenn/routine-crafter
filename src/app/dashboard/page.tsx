"use client";

import { logout } from "@/lib/actions";
import { Button } from "@/ui/Button";
import { redirect } from "next/navigation";
import React from "react";

export default function DashboardPage() {
  return (
    <form
      action={() => {
        logout();
        redirect("/login");
      }}
    >
      <Button>Sign out</Button>
    </form>
  );
}
