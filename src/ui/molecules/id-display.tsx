"use client";

import useCopy from "@/lib/hooks/use-copy";
import { toParticipantId, toRegistrationId } from "@/lib/utils/common";
import { Copy } from "@phosphor-icons/react";

interface Props {
  ID: string;
  type: "participant" | "registration";
}

export default function IdDisplay({ ID, type }: Props) {
  const { copyToClipboard } = useCopy();

  const formattedId =
    type === "participant" ? toParticipantId(ID) : toRegistrationId(ID);

  function handleCopyClick() {
    copyToClipboard(ID);
  }

  return (
    <div className="flex flex-row border border-primary/20 bg-primary/10">
      <p className="px-4 py-2 font-medium">ID: {formattedId}</p>
      <button
        onClick={handleCopyClick}
        className="bg-primary/10 px-4 py-2 text-primary transition-colors hover:bg-primary/20"
      >
        <Copy />
      </button>
    </div>
  );
}
