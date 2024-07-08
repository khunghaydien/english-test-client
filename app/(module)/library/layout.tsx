"use client";
import NavSidebar from "@/components/navigation-sidebar";
import InputAutoComplete from "@/components/ui/input-auto-complete";
import { Option } from "@/components/ui/select-single-auto-complete";
import React, { ReactNode, useState } from "react";
export type INavSidebar = typeof data;
const data = [
  {
    label: "Grammar",
    href: "/grammar/user",
    children: [
      {
        label: "A1 Elementary",
        href: "/grammar/user/dashboard",
        children: [],
      },
      {
        label: "List",
        href: "/grammar/user/list",
        children: [],
      },
    ],
  },
];
const options = [
  {
    value: "1",
    label: "grammar",
  },
  {
    value: "2",
    label: "vacation",
  },
  {
    value: "3",
    label: "listening",
  },
];
function layout({ children }: { children: ReactNode }) {
  const handleSearch = (value: string) => {
    console.log(value);
  };
  return (
    <div className="flex items-start gap-6 w-full px-4">
      <nav className="w-[300px]">
        <NavSidebar data={data} />
      </nav>
      <main className="flex-grow">
        <div className="flex gap-6 items-start w-full">
          <div className="max-w-[600px] w-full">
            <InputAutoComplete
              className=""
              suggestions={options}
              placeholder="Search..."
              onChange={handleSearch}
            />
          </div>
        </div>
        <div>{children}</div>
      </main>
    </div>
  );
}

export default layout;
