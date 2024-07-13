import * as React from "react";

import { cn } from "@/lib/utils/common";

const CommonPageSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "pt-10 md:pt-20 [&:not(:first-child)]:pt-20 [&:not(:first-child)]:md:pt-40",
      className,
    )}
    {...props}
  />
));

CommonPageSection.displayName = "CommonPageSection";

export { CommonPageSection };
