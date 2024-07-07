import { cn, tw } from "@/lib/utils";
import { CircleNotch } from "@phosphor-icons/react/dist/ssr";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const formButtonVariants = cva(
  tw`relative z-[1] flex h-10 select-none items-center justify-center whitespace-nowrap px-6 text-sm font-semibold transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        default: tw`bg-primary/20 text-primary hover:bg-primary/25`,
        green: tw`bg-green-500/20 text-green-500 hover:bg-green-500/25`,
        ghost: tw`text-primary hover:bg-primary/25`,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof formButtonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const FormButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      asChild = false,
      loading = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        disabled={loading}
        className={cn(
          formButtonVariants({ variant, className }),
          loading && "text-transparent",
        )}
        ref={ref}
        {...props}
      >
        <>
          {loading && (
            <CircleNotch
              weight="bold"
              className="absolute inset-x-0 mx-auto animate-spin text-[1.5em] text-primary"
            />
          )}
          {children}
        </>
      </Comp>
    );
  },
);

FormButton.displayName = "FormButton";

export { FormButton, formButtonVariants };
