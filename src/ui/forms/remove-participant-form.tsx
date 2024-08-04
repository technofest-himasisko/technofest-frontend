"use client";

import { removeParticipant } from "@/lib/actions/remove-participant";
import { FormButton } from "@/ui/atoms/form-button";
import { TrashSimple } from "@phosphor-icons/react";

interface Props {
  registrationUid: string;
  participantUid: string;
}

export default function RemoveParticipantForm({
  registrationUid,
  participantUid,
}: Props) {
  return (
    <form action={removeParticipant}>
      <input
        id="registrationUid"
        name="registrationUid"
        value={registrationUid}
        hidden
      />
      <input
        id="participantUid"
        name="participantUid"
        value={participantUid}
        hidden
      />

      <FormButton
        type="submit"
        variant="unstyled"
        size="icon"
        className="text-base text-red-500 hover:text-red-500/80 md:px-2"
      >
        <TrashSimple weight="duotone" className="text-[1.5em]" />
      </FormButton>
    </form>
  );
}
