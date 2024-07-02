"use client";
import React from "react";
import { isEmpty } from "lodash";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { INavSidebar } from "../layout";

const NestedAccordion = ({
  data,
  level = 0,
}: {
  data: INavSidebar;
  level?: number;
}) => {
  const pathname = usePathname();
  return (
    <Accordion
      type="single"
      collapsible
      className={`w-full pl-${level * 4} flex flex-col gap-2 text-sm ${
        level === 0 && "p-4 rounded-lg"
      }`}
    >
      {data.map(({ label, href, children }, index) => {
        return (
          <AccordionItem
            key={index}
            value={href}
            className={cn("gap-2 flex flex-col")}
          >
            {isEmpty(children) && (
              <Link
                className={`rounded-lg p-2 hover:bg-muted cursor-pointer ${
                  pathname === href
                    ? "bg-primary hover:bg-primary text-white"
                    : ""
                }`}
                href={href}
              >
                {label}
              </Link>
            )}
            {!isEmpty(children) && (
              <>
                <AccordionTrigger className="rounded-lg p-2 hover:bg-muted data-[state=open]:bg-secondary">
                  {label}
                </AccordionTrigger>
                <AccordionContent>
                  <NestedAccordion data={children} level={level + 1} />
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
