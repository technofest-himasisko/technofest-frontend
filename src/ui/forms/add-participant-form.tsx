"use client";

import { addParticipant } from "@/lib/actions/add-participant";
import { FormState } from "@/lib/definitions/web";
import { Alert, AlertDescription } from "@/ui/atoms/alert";
import { FormButton } from "@/ui/atoms/form-button";
import FormItem from "@/ui/atoms/form-item";
import FormMessage from "@/ui/atoms/form-message";
import { Input } from "@/ui/atoms/input";
import { Label } from "@/ui/atoms/label";
import { Check, X } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";

interface Props {
  registrationUid: string;
  onFormOpen?: (isOpened: boolean) => void;
}

const initialState: FormState = {
  message: undefined,
  errors: undefined,
};

export default function AddParticipantForm({
  onFormOpen,
  registrationUid,
}: Props) {
  const ref = useRef<HTMLFormElement>(null);

  function handleCancelAddParticipantClick() {
    onFormOpen && onFormOpen(false);
  }

  const [state, formAction] = useFormState(addParticipant, initialState);

  if (state?.message) {
    ref.current?.reset();
  }

  useEffect(() => {
    if (state?.message?.type === "success") {
      onFormOpen && onFormOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <form
      ref={ref}
      action={formAction}
      className="mt-2 flex w-full flex-col gap-y-4"
    >
      <input id="uid" name="uid" value={registrationUid} hidden />

      <FormItem>
        <Label htmlFor="participantUid">Masukkan ID peserta</Label>
        <Input
          type="text"
          placeholder="xxxxxxxx"
          leftSection="U"
          id="participantUid"
          name="participantUid"
        />
        <FormMessage messages={state?.errors?.participantUid} />
      </FormItem>

      {state?.message && (
        <Alert variant={state?.message?.type || "info"}>
          <AlertDescription>{state?.message?.text}</AlertDescription>
        </Alert>
      )}

      <div className="flex justify-end">
        <div className="flex">
          <FormButton type="submit" className="px-2.5 py-1.5 md:px-4">
            <Check weight="bold" className="text-[1.5em]" />
          </FormButton>
          <FormButton
            variant="outline"
            onClick={handleCancelAddParticipantClick}
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
