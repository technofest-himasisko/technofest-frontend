"use client";

import useCopy from "@/lib/hooks/use-copy";
import { cn, tw } from "@/lib/utils/common";
import { Copy } from "@phosphor-icons/react";
import { cva, VariantProps } from "class-variance-authority";

const accountNumberVariant = cva(tw``, {
  variants: {
    color: {
      dana: tw`bg-brand-dana`,
      bni: tw`bg-brand-bni`,
      bri: tw`bg-brand-bri`,
      "shoope pay": tw`bg-brand-shoope-pay`,
    },
  },
  defaultVariants: {
    color: "dana",
  },
});

interface Props extends VariantProps<typeof accountNumberVariant> {
  name: string;
  account: string;
  type: "dana" | "bni" | "bri" | "shoope pay";
}

export default function AccountNumber({ color, account, name, type }: Props) {
  const { copyToClipboard } = useCopy();

  function handleCopyClick() {
    copyToClipboard(account);
  }

  return (
    <div className="flex flex-col gap-x-2 md:flex-row md:items-center">
      <div className="flex items-center gap-x-2">
        <span
          className={cn(
            accountNumberVariant({ color }),
            "w-fit px-2 text-sm font-medium uppercase",
          )}
        >
          {type}
        </span>
        <span className="font-semibold">{account}</span>
        <button
          onClick={handleCopyClick}
          className="p-1 text-primary transition-colors hover:bg-primary/20 md:hidden md:px-4 md:py-2"
        >
          <Copy />
        </button>
      </div>
      <span className="text-slate-100/50">a.n. {name}</span>
      <button
        onClick={handleCopyClick}
        className="hidden px-4 py-2 text-primary transition-colors hover:bg-primary/20 md:block"
      >
        <Copy />
      </button>
    </div>
  );
}
