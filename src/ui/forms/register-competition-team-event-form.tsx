"use client";

import { registerCompetitionTeamEvent } from "@/lib/actions/register-competition-team-event";
import { Alert, AlertDescription } from "@/ui/atoms/alert";
import { DialogFooter } from "@/ui/atoms/dialog";
import { FormButton } from "@/ui/atoms/form-button";
import FormItem from "@/ui/atoms/form-item";
import FormMessage from "@/ui/atoms/form-message";
import { Input } from "@/ui/atoms/input";
import { CheckSquare, Square } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";

interface Props {
  onFormOpen?: (isOpened: boolean) => void;
  codename: string;
}

export default function RegisterCompetitionTeamEventForm({
  onFormOpen,
  codename,
}: Props) {
  const emptyForm = {
    registrationName: "",
    registrationUid: "",
  };

  const [form, setForm] = useState(emptyForm);

  const handleRadioChange = () => {
    setForm(emptyForm);
  };

  const ref = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(registerCompetitionTeamEvent, null);

  useEffect(() => {
    if (state?.message) {
      setForm(emptyForm);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <form ref={ref} action={formAction} className="space-y-2">
      <input type="hidden" name="codename" value={codename} />

      <label
        htmlFor="newRegistration"
        className="group flex cursor-pointer flex-row items-center gap-x-8 border border-slate-500/20 bg-slate-500/10 p-4 hover:bg-primary/10 has-[:checked]:border-primary/70 has-[:checked]:bg-primary/10 has-[:checked]:text-primary"
      >
        <div className="grow">
          <p className="text-lg font-semibold">Buat baru</p>
          <p className="mb-1 text-sm text-white/40">
            Buat pendaftaran baru, Anda akan menjadi ketua tim.
          </p>

          <FormItem className="hidden group-has-[:checked]:flex">
            <Input
              type="text"
              placeholder="Nama tim"
              id="registrationName"
              name="registrationName"
              value={form.registrationName}
              onChange={(e) =>
                setForm((prev) => {
                  return { ...prev, registrationName: e.target.value };
                })
              }
            />
            <FormMessage messages={state?.errors?.registrationName} />
          </FormItem>
        </div>
        <input
          type="radio"
          name="registrationType"
          className="hidden"
          value="newRegistration"
          id="newRegistration"
          onChange={handleRadioChange}
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
        htmlFor="joinRegistration"
        className="group flex cursor-pointer flex-row items-center gap-x-8 border border-slate-500/20 bg-slate-500/10 p-4 hover:bg-primary/10 has-[:checked]:border-primary/70 has-[:checked]:bg-primary/10 has-[:checked]:text-primary"
      >
        <div className="grow">
          <p className="text-lg font-semibold">Gabung tim</p>
          <p className="mb-1 text-sm text-white/40">
            Masuk ke pendaftaran yang sudah ada dengan memasukkan ID
            pendaftaran.
          </p>

          <FormItem className="hidden group-has-[:checked]:flex">
            <Input
              type="text"
              id="registrationUid"
              name="registrationUid"
              placeholder="ID pendaftaran"
              value={form.registrationUid}
              onChange={(e) =>
                setForm((prev) => {
                  return { ...prev, registrationUid: e.target.value };
                })
              }
            />
            <FormMessage messages={state?.errors?.registrationUid} />

            {state?.message && (
              <Alert variant={state?.message?.type || "info"}>
                <AlertDescription>{state?.message?.text}</AlertDescription>
              </Alert>
            )}
          </FormItem>
        </div>
        <input
          type="radio"
          name="registrationType"
          className="hidden"
          value="joinRegistration"
          id="joinRegistration"
          onChange={handleRadioChange}
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
