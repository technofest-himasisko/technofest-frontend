"use client";

import { updateTeamName } from "@/lib/actions/update-team-name";
import { FormButton } from "@/ui/atoms/form-button";
import { Input } from "@/ui/atoms/input";
import { Check } from "@phosphor-icons/react";
import { X } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import FormMessage from "../atoms/form-message";
import FormItem from "../atoms/form-item";

interface Props {
  onFormOpen?: (isOpened: boolean) => void;
  registrationName: string;
  registrationUid: string;
}

export default function EditTeamNameFormForm({
  onFormOpen,
  registrationName,
  registrationUid,
}: Props) {
  const ref = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(updateTeamName, null);

  if (state?.message) {
    ref.current?.reset();
  }

  function handleCancelEditTeamNameClick() {
    onFormOpen && onFormOpen(false);
  }

  useEffect(() => {
    if (state?.message?.type === "success") {
      onFormOpen && onFormOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <form ref={ref} action={formAction} className="mt-2 flex flex-col gap-y-4">
      <input id="uid" name="uid" value={registrationUid} hidden />

      <FormItem className="grow">
        <Input
          type="text"
          id="registrationName"
          name="registrationName"
          placeholder="Nama tim"
          defaultValue={registrationName}
        />
        <FormMessage messages={state?.errors?.registrationName} />
      </FormItem>

      <div className="flex justify-end">
        <div className="flex">
          <FormButton type="submit" className="px-2.5 py-1.5 md:px-4">
            <Check weight="bold" className="text-[1.5em]" />
          </FormButton>
          <FormButton
            variant="outline"
            onClick={handleCancelEditTeamNameClick}
            noLoading
            className="border border-primary/20 px-2.5 py-1.5 md:px-4"
          >
            <X weight="bold" className="text-[1.5em]" />
          </FormButton>
        </div>
      </div>
    </form>
  );
}
