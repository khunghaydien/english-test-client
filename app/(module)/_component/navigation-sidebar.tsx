"use client";
import React from "react";
import { isEmpty } from "lodash";
import { cn } from "@/lib/utils";
import { useLibraryStore } from "@/stores/libraryStore";
import { INavSidebar } from "@/app/(module)/library/layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const NestedAccordion = ({
  data,
  level = 0,
  breadcrumb = [],
}: {
  data: INavSidebar;
  level?: number;
  breadcrumb?: string[];
}) => {
  const setBreadcrumb = useLibraryStore((state) => state.setBreadcrumb);
  const tmpbreadcrumb = useLibraryStore((state) => state.breadcrumb);
  return (
    <Accordion
      type="single"
      collapsible
      className={`w-full pl-${level * 4} flex flex-col gap-2  text-sm ${
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
                    ? "bg-primary hover:bg-primary text-white"
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
                  className="rounded-lg p-2 hover:bg-muted data-[state=open]:bg-secondary"
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

function NavSidebar({ data }: { data: INavSidebar }) {
  return <NestedAccordion data={data} />;
}

export default NavSidebar;
