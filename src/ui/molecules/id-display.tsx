"use client";

import useCopy from "@/lib/hooks/use-copy";
import { Copy } from "@phosphor-icons/react";

interface Props {
  ID: string;
}

export default function IdDisplay({ ID }: Props) {
  const { copyToClipboard } = useCopy();

  function handleCopyClick() {
    copyToClipboard("081367436851");
  }

  return (
    <div className="mt-4 flex flex-row border border-primary/20 bg-primary/10">
      <p className="px-4 py-2 font-medium">ID: {ID}</p>
      <button
        onClick={handleCopyClick}
        className="bg-primary/10 px-4 py-2 text-primary transition-colors hover:bg-primary/20"
      >
        <Copy />
      </button>
    </div>
  );
}
