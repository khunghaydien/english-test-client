"use client";
import React, { Children, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { isEmpty } from "lodash";
import { cn } from "@/lib/utils";

const NestedAccordion = ({
  data,
  level = 0,
}: {
  data: Data;
  level?: number;
}) => {
  const [exercise, setExercise] = useState<string>("");
  return (
    <Accordion
      type="single"
      collapsible
      className={`w-full pl-${level * 4} flex flex-col gap-2  ${
        level === 0 && "border p-4 rounded-lg"
      }`}
    >
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          value={item.value}
          className={cn("gap-2 flex flex-col")}
        >
          <AccordionTrigger className="rounded-lg p-2 hover:bg-muted data-[state=open]:bg-primary">
            {item.value}
          </AccordionTrigger>
          <AccordionContent>
            {/* {!isEmpty(item.contents) && item.contents && (
              <div className="flex flex-col gap-2 ">
                {item.contents.map(({ id, content }) => (
                  <div
                    key={id}
                    onClick={() => setExercise(id)}
                    className={cn(
                      "hover:bg-muted rounded-lg p-2 text-center cursor-pointer",
                      `${id === exercise && "bg-primary"}`
                    )}
                  >
                    {content}
                  </div>
                ))}
              </div>
            )} */}
            <>
              {item.children ||
                (!isEmpty(item.children) && (
                  <NestedAccordion data={item.children} level={level + 1} />
                ))}
            </>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

type Data = typeof data;
const data = [
  {
    value: "Grammar",
    children: [
      {
        value: "A1 Elementary",
        children: [
          {
            value: "Present Simple",
          },
          {
            value: "This, That, These, Those",
          },
          {
            value: "Possessive adjectives and subject pronouns",
          },
        ],
      },
      {
        value: "A2 Pre-intermediate",
      },
      {
        value: "B1 Intermediate",
      },
      {
        value: "B1+ Upper-intermediate",
      },
      {
        value: "B2Pre-advanced",
      },
    ],
  },
  { value: "Vocabulary", children: [] },
  { value: "Listening", children: [] },
  { value: "Reading", children: [] },
  { value: "Writing", children: [] },
  { value: "Exams", children: [] },
];
function NavSidebar() {
  return (
    <div>
      <h1>Nested Accordion</h1>
      <NestedAccordion data={data} />
    </div>
  );
}

export default NavSidebar;
