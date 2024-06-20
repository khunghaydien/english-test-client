"use client";
import NavSidebar from "@/components/commons/NavSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { ReactNode, useState } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-6 w-full">
      <nav className="w-[300px]">
        <NavSidebar />
      </nav>
      <main>
        <div>
          <Input placeholder="search" />
          <Button>Filter</Button>
          <Button>Recomemened</Button>
        </div>
        <div>{children}</div>
      </main>
    </div>
  );
}

export default layout;
