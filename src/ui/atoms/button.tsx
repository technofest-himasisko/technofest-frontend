import { cn, tw } from "@/lib/utils/common";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  tw`relative z-[1] inline-flex h-10 select-none items-center justify-center whitespace-nowrap text-sm font-bold transition-all duration-200 ease-out after:absolute after:-z-[1] after:bg-slate-100 after:transition-all after:duration-200 after:ease-out active:top-[1px] disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        default: tw`border border-primary/30 bg-primary text-white hover:text-primary`,
        gradient: tw`border border-secondary bg-gradient-to-br from-primary to-secondary text-white hover:text-primary`,
        outline: tw`border border-primary text-primary`,
        secondary: tw`border border-secondary/30 bg-secondary hover:text-secondary`,
        ghost: tw`text-primary`,
        danger: tw`text-red-500`,
        link: tw`text-primary underline-offset-4 hover:underline`,
      },
      size: {
        default: tw`h-10 px-6`,
        sm: tw`h-7 px-3`,
        lg: tw`h-10 px-6 md:h-12 md:px-10`,
        icon: tw`h-10 w-10`,
      },
      hover: {
        horizontal: tw`after:right-0 after:top-0 after:h-full after:w-0 hover:after:left-0 hover:after:w-full`,
        vertical: tw`after:bottom-0 after:left-0 after:h-0 after:w-full hover:after:top-0 hover:after:h-full`,
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      hover: "horizontal",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, hover, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, hover, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
