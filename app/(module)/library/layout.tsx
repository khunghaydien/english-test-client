"use client";
import { AutocompleteExample } from "@/components/commons/AutoSingleSelect";
import InputAutoComplete from "@/components/commons/InputAutoComplete";
import NavSidebar from "@/components/commons/NavSidebar";
import { Button } from "@/components/ui/button";
import React, { ReactNode } from "react";
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
export type IOption = {
  key: string;
  value: string;
};

const options: IOption[] = [
  {
    key: "1",
    value: "grammar",
  },
  {
    key: "2",
    value: "vacation",
  },
  {
    key: "3",
    value: "listening",
  },
];
function layout({ children }: { children: ReactNode }) {
  const handleChange = (value: string) => {};
  return (
    <div className="flex items-start gap-6 w-full">
      <nav className="w-[300px]">
        <NavSidebar data={data} />
      </nav>
      <main>
        <div>
          <InputAutoComplete />
          <AutocompleteExample />
          <Button>Filter</Button>
          <Button>Recomemened</Button>
        </div>
        <div>{children}</div>
      </main>
    </div>
  );
}

export default layout;
