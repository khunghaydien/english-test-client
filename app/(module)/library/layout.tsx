"use client";
import NavSidebar from "@/components/commons/NavSidebar";
import { Button } from "@/components/ui/button";
import InputAutoComplete from "@/components/ui/input-auto-complete";
import SelectSingleAutoComplete, {
  Option,
} from "@/components/ui/select-single-auto-complete";
import React, { ReactNode, useState } from "react";
export type INavSidebar = typeof data;
const data = [
  {
    skill: "Grammar",
    children: [
      {
        skill: "A1 Elementary",
        children: [
          {
            skill: "Present Simple",
            children: [],
          },
          {
            skill: "This, That, These, Those",
            children: [],
          },
          {
            skill: "Possessive adjectives and subject pronouns",
            children: [],
          },
        ],
      },
      {
        skill: "A2 Pre-intermediate",
        children: [],
      },
      {
        skill: "B1 Intermediate",
        children: [],
      },
      {
        skill: "B1+ Upper-intermediate",
        children: [],
      },
      {
        skill: "B2Pre-advanced",
        children: [],
      },
    ],
  },
  { skill: "Vocabulary", children: [] },
  { skill: "Listening", children: [] },
  { skill: "Reading", children: [] },
  { skill: "Writing", children: [] },
  { skill: "Exams", children: [] },
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
  const [selected, setSelected] = useState<Option>();
  const handleSearch = (value: string) => {
    console.log(value);
  };
  const onSelect = (option: Option) => {
    setSelected(option);
  };
  return (
    <div className="flex items-start gap-6 w-full">
      <nav className="w-[300px]">
        <NavSidebar data={data} />
      </nav>
      <main>
        <div>
          <InputAutoComplete
            suggestions={options}
            placeholder="Search..."
            onChange={handleSearch}
          />
          <SelectSingleAutoComplete
            options={options}
            onSelect={onSelect}
            selected={selected}
          />
          <Button>Filter</Button>
          <Button>Recomemened</Button>
        </div>
        <div>{children}</div>
      </main>
    </div>
  );
}

export default layout;
