import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "border border-primary/20 bg-slate-900/40 p-10 shadow-2xl shadow-primary/15",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

export { Card };
