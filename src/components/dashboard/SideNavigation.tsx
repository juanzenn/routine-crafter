"use client";
import React from "react";

import { cn } from "@/lib/utils";
import { Dumbbell, Home, LandPlot, Layers, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignOutButton from "../SignOutButton";

const LINK = [
  { Icon: Home, title: "Dashboard", href: "/dashboard" },
  { Icon: Layers, title: "Routines", href: "/dashboard/routines" },
  { Icon: Dumbbell, title: "Exercises", href: "/dashboard/exercises" },
  { Icon: User, title: "Profile", href: "/dashboard/profile" },
];

export default function SideNavigation() {
  const pathname = usePathname();
  const isActiveLink = (href: string) => {
    let path = "/" + pathname.split("/").slice(2).join("/");

    return path === href || (path.includes(href) && href !== "/dashboard");
  };

  return (
    <aside className="h-full flex flex-col justify-between items-start p-4 max-w-sm flex-1">
      <section className="w-full">
        <Link
          href="/dashboard"
          title="Routine Crafter - Dashboard"
          className="text-slate-900 hover:text-slate-800 flex items-center gap-2 w-fit"
        >
          <figure className="w-fit h-fit p-1 bg-blue-600 rounded-full text-white">
            <LandPlot className="w-4 h-4" />
          </figure>
          <strong className="text-2xl font-semibold">Routine Crafter</strong>
        </Link>

        <nav className="flex flex-col gap-2 mt-12 w-full">
          {LINK.map(({ title, href, Icon }) => (
            <Link
              title={title}
              key={title}
              href={href}
              className={cn(
                "flex items-center font-medium text-lg text-slate-600  hover:bg-slate-200 rounded-md w-full p-2 transition-colors duration-200 ease-in-out",
                isActiveLink(href) && "bg-slate-200 text-slate-900"
              )}
            >
              <Icon className="mr-3" size={20} />
              {title}
            </Link>
          ))}
        </nav>
      </section>

      <SignOutButton />
    </aside>
  );
}
