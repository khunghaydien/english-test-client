"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { isEmpty } from "lodash";
import { cn } from "@/lib/utils";
import { useLibraryStore } from "@/stores/libraryStore";

const NestedAccordion = ({
  data,
  level = 0,
  breadcrumb = [],
}: {
  data: Data;
  level?: number;
  breadcrumb?: string[];
}) => {
  const setBreadcrumb = useLibraryStore((state) => state.setBreadcrumb);
  const tmpbreadcrumb = useLibraryStore((state) => state.breadcrumb);
  return (
    <Accordion
      type="single"
      collapsible
      className={`w-full pl-${level * 4} flex flex-col gap-2  ${
        level === 0 && "border p-4 rounded-lg"
      }`}
    >
      {data.map(({ skill, children }, index) => {
        return (
          <AccordionItem
            key={index}
            value={skill}
            className={cn("gap-2 flex flex-col")}
          >
            {isEmpty(children) && (
              <div
                className={`rounded-lg p-2 hover:bg-muted cursor-pointer ${
                  tmpbreadcrumb[tmpbreadcrumb.length - 1] === skill
                    ? "bg-primary hover:bg-primary"
                    : ""
                }`}
                onClick={() => setBreadcrumb([...breadcrumb, skill])}
              >
                {skill}
              </div>
            )}
            {!isEmpty(children) && (
              <>
                <AccordionTrigger
                  className="rounded-lg p-2 hover:bg-muted data-[state=open]:bg-primary"
                  onClick={() => setBreadcrumb([...breadcrumb, skill])}
                >
                  {skill}
                </AccordionTrigger>
                <AccordionContent>
                  <NestedAccordion
                    data={children}
                    level={level + 1}
                    breadcrumb={[...breadcrumb, skill]}
                  />
                </AccordionContent>
              </>
            )}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

type Data = typeof data;
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
function NavSidebar() {
  return <NestedAccordion data={data} />;
}

export default NavSidebar;
