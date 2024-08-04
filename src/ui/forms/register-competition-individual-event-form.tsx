"use client";

import { registerCompetitionIndividualEvent } from "@/lib/actions/register-competition-individual-event";
import { FormButton } from "@/ui/atoms/form-button";

interface Props {
  onFormOpen?: (isOpened: boolean) => void;
  eventName: string;
  codename: string;
}

export default function RegisterCompetitionIndividualEventForm({
  onFormOpen,
  eventName,
  codename,
}: Props) {
  return (
    <form action={registerCompetitionIndividualEvent} className="space-y-2">
      <input type="hidden" name="codename" value={codename} />

      <p className="text-sm text-white/40">
        Anda akan mendaftar kompetisi {eventName}?
      </p>
      <FormButton type="submit" className="ml-auto w-fit">
        Lanjut
      </FormButton>
    </form>
  );
}
