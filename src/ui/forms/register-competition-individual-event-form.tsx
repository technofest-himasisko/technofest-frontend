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

      <p className="font-medium text-slate-500">
        Anda akan mendaftar kompetisi {eventName}?
      </p>
      <FormButton type="submit" className="w-full md:ml-auto md:w-fit">
        Lanjut
      </FormButton>
    </form>
  );
}
