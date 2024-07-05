"use client";
import React, { ReactNode } from "react";
import ThemeSwitcher from "@/components/theme-switcher";
import Logo from "@/components/logo-component";
import Profile from "@/components/profile-component";
import NavSidebar from "./_component/navigation-sidebar";
import ProtectedRoute from "@/provider/ProtectedRouter";
export type INavSidebar = typeof data;
const data = [
  {
    label: "User",
    href: "/admin/user",
    children: [
      {
        label: "Dashboard",
        href: "/admin/user/dashboard",
        children: [],
      },
      {
        label: "List",
        href: "/admin/user/list",
        children: [],
      },
    ],
  },
];
function layout({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute allowedRoles={["","admin"]}>
      <div className="min-h-[100vh] w-full">
        <nav className="w-full flex items-center justify-between px-6 py-4 text-sm rounded-lg border-b-2 border-muted-foreground">
          <Logo />
          <div className="flex items-center gap-6">
            <ThemeSwitcher />
            <Profile />
          </div>
        </nav>
        <main className="w-full flex">
          <nav className="w-[300px] min-h-[calc(100vh-68px)] rounded-lg border-r-2  border-muted-foreground">
            <NavSidebar data={data} />
          </nav>
          <section className="flex-grow h-full flex flex-col gap-1 p-6">
            {children}
          </section>
        </main>
      </div>
    </ProtectedRoute>
  );
}

export default layout;
