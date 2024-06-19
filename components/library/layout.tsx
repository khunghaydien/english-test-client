"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";

const NestedAccordion = ({
  data,
  level = 0,
}: {
  data: Data;
  level?: number;
}) => {
  return (
    <Accordion type="single" collapsible className={`w-full pl-${level * 4}`}>
      {data.map((item, index) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>
            {item.content}
            {item.children && item.children.length > 0 && (
              <NestedAccordion data={item.children} level={level + 1} />
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

type Data = typeof data;

const data = [
  {
    value: "item-1",
    trigger: "Grammar",
    children: [
      {
        value: "item-1-1",
        trigger: "Tense",
        content: (
          <div className="flex flex-col gap-2">
            <Link href="/library/exercise/grammar/tense">Simple Tense</Link>
          </div>
        ),
        children: [],
      },
      {
        value: "item-1-2",
        trigger: "Is it styled?",
        content: <div className="flex flex-col gap-2"></div>,
        children: [],
      },
      {
        value: "item-1-3",
        trigger: "Is it animated?",
        content: <div className="flex flex-col gap-2"></div>,
        children: [],
      },
    ],
  },
  {
    value: "item-2",
    trigger: "Is it styled?",
    content: (
      <div>
        Yes. It comes with default styles that matches the other
        components&apos; aesthetic.
      </div>
    ),
    children: [],
  },
  {
    value: "item-3",
    trigger: "Is it animated?",
    content: (
      <div>
        Yes. It&apos;s animated by default, but you can disable it if you
        prefer.
      </div>
    ),
    children: [],
  },
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
