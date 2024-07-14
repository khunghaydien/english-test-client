"use client";
import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Skeleton } from "./ui/skeleton";
function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Tabs defaultValue={theme ?? 'dark'}>
      <TabsList className="border">
        {mounted && (
          <>
            <TabsTrigger value="light" onClick={() => setTheme("light")}>
              <SunIcon className="h-[1.2rem w-[1.2rem]" ></SunIcon>
            </TabsTrigger>
            <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
              <MoonIcon className="h-[1.2rem w-[1.2rem] rotate-90 transition-none dark:rotate-0" ></MoonIcon>
            </TabsTrigger>
          </>
        )}
        {!mounted && <Skeleton className="w-[96px]" />}
      </TabsList>
    </Tabs>
  );
}

export default ThemeSwitcher;
