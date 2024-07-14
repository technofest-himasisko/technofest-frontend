import { cn } from "@/lib/utils/common";
import React from "react";

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-y-2.5", className)}
      {...props}
    />
  );
});

FormItem.displayName = "FormItem";

export default FormItem;
