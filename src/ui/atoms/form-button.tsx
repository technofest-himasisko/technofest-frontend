"use client";

import { cn, tw } from "@/lib/utils/common";
import { CircleNotch } from "@phosphor-icons/react/dist/ssr";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { useFormStatus } from "react-dom";

const formButtonVariants = cva(
  tw`relative z-[1] flex w-full select-none items-center justify-center whitespace-nowrap font-semibold transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        default: tw`bg-primary/20 text-primary hover:bg-primary/25`,
        green: tw`bg-green-500/20 text-green-500 hover:bg-green-500/25`,
        danger: tw`bg-red-500/20 text-red-500 hover:bg-red-500/25`,
        ghost: tw`text-primary hover:bg-primary/25`,
        outline: tw`border border-primary/30 text-primary hover:bg-primary/25`,
      },
      size: {
        sm: tw`h-7 px-3 text-sm`,
        md: tw`h-10 px-6 text-sm`,
        icon: tw`text-sm`,
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof formButtonVariants> {
  asChild?: boolean;
  loading?: boolean;
  noLoading?: boolean;
}

const FormButton = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      noLoading = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const { pending } = useFormStatus();

    return (
      <Comp
        disabled={pending}
        className={cn(
          formButtonVariants({ variant, size, className }),
          !noLoading && pending && "text-transparent",
        )}
        ref={ref}
        {...props}
      >
        {!noLoading && pending && (
          <CircleNotch
            weight="bold"
            className="absolute inset-x-0 mx-auto animate-spin text-[1.5em] text-slate-100/50"
          />
        )}
        <Slottable>{children}</Slottable>
      </Comp>
    );
  },
);

FormButton.displayName = "FormButton";

export { FormButton, formButtonVariants };
