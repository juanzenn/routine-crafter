import React from "react";

import { logout } from "@/lib/actions";
import { cn } from "@/lib/utils";
import { Button } from "@/ui/Button";
import { LogOut } from "lucide-react";

export default function SignOutButton() {
  return (
    <form className="w-full" action={logout}>
      <button
        className={cn(
          "flex items-center font-medium text-lg text-slate-600 hover:bg-red-100 hover:text-red-500 rounded-md w-full p-2 transition-colors duration-200 ease-in-out"
        )}
      >
        <LogOut className="mr-3" size={20} />
        Sign out
      </button>
    </form>
  );
}
