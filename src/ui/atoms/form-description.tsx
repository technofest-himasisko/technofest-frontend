import { cn } from "@/lib/utils/common";
import React from "react";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("-mt-2.5 text-sm text-slate-500", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

export default FormDescription;
