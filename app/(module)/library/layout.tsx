"use client";
import NavSidebar from "@/components/commons/NavSidebar";
import RecommendedTest from "@/components/library/RecommenedTest";
import InputAutoComplete from "@/components/ui/input-auto-complete";
import SelectMultipleAutoComplete from "@/components/ui/select-multiple-auto-complete";
import { Option } from "@/components/ui/select-single-auto-complete";
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
  const [multipleSelected, setMultipleSelected] = useState<Option[]>();
  const handleSearch = (value: string) => {
    console.log(value);
  };
  const onMultipleSelect = (option: Option[]) => {
    setMultipleSelected(option);
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
          <div className="max-w-[600px] w-full">
            <SelectMultipleAutoComplete
              className=""
              options={options}
              onSelect={onMultipleSelect}
              selected={multipleSelected}
              placeholder="filter"
            />
          </div>
        </div>
        <RecommendedTest />
        <div>{children}</div>
      </main>
    </div>
  );
}

export default layout;
