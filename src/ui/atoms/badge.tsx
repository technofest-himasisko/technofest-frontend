import { cn, tw } from "@/lib/utils/common";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const badgeVariants = cva(
  tw`inline-flex items-center border px-1 text-xs uppercase transition-colors`,
  {
    variants: {
      variant: {
        blue: tw`border-blue-500/60 bg-blue-500/30 text-blue-400 hover:bg-blue-500/40`,
        green: tw`border-green-500/60 bg-green-500/30 text-green-400 hover:bg-green-500/40`,
        yellow: tw`border-yellow-500/60 bg-yellow-500/30 text-yellow-400 hover:bg-yellow-500/40`,
        red: tw`border-red-500/60 bg-red-500/30 text-red-400 hover:bg-red-500/40`,
        cyan: tw`border-cyan-500/60 bg-cyan-500/30 text-cyan-400 hover:bg-cyan-500/40`,
        indigo: tw`border-indigo-500/60 bg-indigo-500/30 text-indigo-400 hover:bg-indigo-500/40`,
        fuchsia: tw`border-fuchsia-500/60 bg-fuchsia-500/30 text-fuchsia-400 hover:bg-fuchsia-500/40`,
      },
    },
    defaultVariants: {
      variant: "blue",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
