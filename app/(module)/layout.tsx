"use client";
import Logo from "@/components/logo-component";
import React, { ReactNode } from "react";
import { NavigationMenuDemo } from "./_component/mega-menu";
import Profile from "@/components/profile-component";
import ThemeSwitcher from "@/components/theme-switcher";

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
