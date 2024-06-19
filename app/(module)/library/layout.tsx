import NavSidebar from "@/components/library/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-6 w-full">
      <nav className="w-[200px]">
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
