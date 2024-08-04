import { cn } from "@/lib/utils/common";
import * as React from "react";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "border border-primary/20 bg-slate-900/30 p-6 shadow-2xl shadow-primary/5 md:p-10",
      className,
    )}
    {...props}
  />
));

Card.displayName = "Card";

export { Card };
