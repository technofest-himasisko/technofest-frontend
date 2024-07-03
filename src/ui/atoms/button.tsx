import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn, tw } from "@/lib/utils";

const buttonVariants = cva(
  tw`inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        default: tw`bg-primary text-white hover:bg-primary/90`,
        outline: tw`border-input bg-background hover:bg-accent hover:text-accent-foreground border`,
        secondary: tw`text-secondary-foreground bg-secondary hover:bg-secondary/80`,
        ghost: tw`hover:bg-accent hover:text-accent-foreground`,
        link: tw`text-primary underline-offset-4 hover:underline`,
      },
      size: {
        default: tw`h-10 px-4 py-2`,
        sm: tw`h-9 px-3`,
        lg: tw`h-11 px-8`,
        icon: tw`h-10 w-10`,
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
