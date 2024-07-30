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
    },
  },
  defaultVariants: {
    color: "dana",
  },
});

interface Props extends VariantProps<typeof accountNumberVariant> {
  name: string;
  account: string;
  type: "dana" | "bni";
}

export default function AccountNumber({ color, account, name, type }: Props) {
  const { copyToClipboard } = useCopy();

  function handleCopyClick() {
    copyToClipboard("081367436851");
  }

  return (
    <div className="flex items-center gap-x-2">
      <span className={cn(accountNumberVariant({ color }), "px-2 font-medium")}>
        {type}
      </span>
      <span className="font-semibold">{account}</span>
      <span className="text-slate-100/50">a.n. {name}</span>
      <button
        onClick={handleCopyClick}
        className="px-4 py-2 text-primary transition-colors hover:bg-primary/20"
      >
        <Copy />
      </button>
    </div>
  );
}
