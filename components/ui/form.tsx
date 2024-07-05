import { cn } from "@/lib/utils";
import React, { ReactNode, forwardRef } from "react";
interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  gap?: number;
  top?: number;
}
const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>(
  ({ children, gap, top, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        style={{ gap: gap, marginTop: top }}
        className={cn("flex w-full items-center")}
      >
        {children}
      </div>
    );
  }
);

export { FormGroup };
