"use client";

import { cn } from "@/lib/utils/common";
import * as React from "react";
import { useFormStatus } from "react-dom";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftSection, rightSection, ...props }, ref) => {
    const { pending } = useFormStatus();

    return (
      <div
        className={cn(
          "flex h-10 w-full items-center border border-primary/20 bg-primary/10 px-3 py-2 text-sm font-medium text-slate-100 ring-offset-primary/20 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary/30 has-[:focus-visible]:ring-offset-1",
          className,
        )}
      >
        {leftSection && (
          <div className="pr-2 text-slate-100/50">{leftSection}</div>
        )}
        <input
          type={type}
          autoComplete="off"
          disabled={pending}
          className={cn(
            "flex w-full bg-transparent outline-none file:border-0 file:bg-transparent file:text-sm file:text-primary placeholder:text-slate-100/40 disabled:cursor-not-allowed",
          )}
          ref={ref}
          {...props}
        />
        {rightSection && (
          <div className="pl-2 text-slate-100/50">{rightSection}</div>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
