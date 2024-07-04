import * as React from "react";

import { cn } from "@/lib/utils";

const CommonPageSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("pt-20 md:pt-40", className)} {...props} />
));

CommonPageSection.displayName = "CommonPageSection";

export { CommonPageSection };
