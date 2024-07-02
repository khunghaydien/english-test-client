"use client";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "@/components/theme-switcher";
import Logo from "@/components/logo-component";
import Profile from "@/components/profile-component";
function layout({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  return (
    <div className="flex w-full">
      <div className="w-[260px] h-[100vh] font-bold text-[16px] flex flex-col justify-between">
        <div>
          <div className="text-xl w-full text-center p-4 h-[74px]">
            <Logo />
          </div>
        </div>
        <div className="p-4 flex flex-col gap-2 h-full"></div>
      </div>
      <div className="w-[1px] bg-primary"></div>
      <div className="w-[calc(100%-264px)] min-h-[100vh] h-full flex flex-col gap-1">
        <div className="w-full p-4 flex gap-10 items-center justify-end">
          <ThemeSwitcher />
          <Profile />
        </div>
        <div className="w-full bg-primary h-[1px]"></div>
        <div className="h-full min-h-[calc(100vh-81px)] p-4">{children}</div>
      </div>
    </div>
  );
}

export default layout;
