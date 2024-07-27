"use client";

import { DialogFooter } from "../atoms/dialog";
import React, { useRef } from "react";
import { FormButton } from "../atoms/form-button";
import { CheckSquare, Square } from "@phosphor-icons/react";
import { useFormState } from "react-dom";
import { registerSeminarEvent } from "@/lib/actions/register-seminar-event";
import { ParticipationMethod } from "@/lib/definitions/constants";

interface Props {
  onFormOpen?: (isOpened: boolean) => void;
  codename: string;
}

export default function RegisterSeminarEventForm({
  onFormOpen,
  codename,
}: Props) {
  const ref = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(registerSeminarEvent, null);

  if (state?.message) {
    ref.current?.reset();
  }

  return (
    <form ref={ref} action={formAction} className="space-y-2">
      <input type="hidden" name="codename" value={codename} />

      <label
        htmlFor={String(ParticipationMethod.OFFLINE)}
        className="group flex cursor-pointer flex-row items-center gap-x-8 border border-slate-500/20 bg-slate-500/10 p-4 hover:bg-primary/10 has-[:checked]:border-primary/70 has-[:checked]:bg-primary/10 has-[:checked]:text-primary"
      >
        <div className="grow">
          <p className="text-lg font-semibold">Offilne</p>
          <p className="mb-1 text-sm text-white/40">Datang secara langsung.</p>
        </div>
        <input
          type="radio"
          name="participantMethod"
          className="hidden"
          value={String(ParticipationMethod.OFFLINE)}
          id={String(ParticipationMethod.OFFLINE)}
        />
        <Square
          weight="duotone"
          className="block size-8 flex-none text-slate-600 group-has-[:checked]:hidden"
        />
        <CheckSquare
          weight="duotone"
          className="hidden size-8 flex-none text-primary group-has-[:checked]:block"
        />
      </label>

      <label
        htmlFor={String(ParticipationMethod.ONLINE)}
        className="group flex cursor-pointer flex-row items-center gap-x-8 border border-slate-500/20 bg-slate-500/10 p-4 hover:bg-primary/10 has-[:checked]:border-primary/70 has-[:checked]:bg-primary/10 has-[:checked]:text-primary"
      >
        <div className="grow">
          <p className="text-lg font-semibold">Online</p>
          <p className="mb-1 text-sm text-white/40">Daring aja.</p>
        </div>
        <input
          type="radio"
          name="participantMethod"
          className="hidden"
          value={String(ParticipationMethod.ONLINE)}
          id={String(ParticipationMethod.ONLINE)}
        />
        <Square
          weight="duotone"
          className="block size-8 flex-none text-slate-600 group-has-[:checked]:hidden"
        />
        <CheckSquare
          weight="duotone"
          className="hidden size-8 flex-none text-primary group-has-[:checked]:block"
        />
      </label>

      <DialogFooter>
        <FormButton type="submit" className="ml-auto w-fit">
          Lanjut
        </FormButton>
      </DialogFooter>
    </form>
  );
}
