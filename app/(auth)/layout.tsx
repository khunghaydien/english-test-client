"use client";
import React, { ReactNode } from "react";
import OtherSignIn from "./_component/other-sign-in";
function layout({ children }: { children: ReactNode }) {
  return (
    <div className="fixed flex items-center justify-center z-50 top-0 left-0 w-full h-full bg-opacity-50">
      <div className="relative w-full h-[80%] px-4 rounded-lg py-10 flex items-start justify-center gap-12">
        <div className="w-full max-w-[500px]">{children}</div>
        <div className="flex items-center gap-2 justify-center flex-col">
          <div className="h-[200px] flex "></div>
          <div className="border rounded-full border-primary w-[50px] h-[50px] flex items-center justify-center">
            Or
          </div>
          <div className="h-[200px] flex "></div>
        </div>
        <OtherSignIn />
      </div>
    </div>
  );
}

export default layout;
