"use client";
import Logo from "@/components/commons/Logo";
import { NavigationMenuDemo } from "@/components/commons/MegaMenu";
import Profile from "@/components/commons/Profile";
import ThemeSwitcher from "@/components/commons/ThemeSwitcher";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <nav className="w-full flex items-center justify-between p-4 text-sm">
        <Logo />
        <NavigationMenuDemo />
        <div className="flex items-center gap-6">
          <ThemeSwitcher />
          <Profile />
        </div>
      </nav>
      {children}
    </div>
  );
}

export default layout;
