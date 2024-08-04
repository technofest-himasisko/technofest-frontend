"use client";

import { Alert, AlertDescription } from "@/ui/atoms/alert";

import { FormButton } from "@/ui/atoms/form-button";
import { Input } from "@/ui/atoms/input";
import FormItem from "../atoms/form-item";
import { Label } from "../atoms/label";
import FormMessage from "../atoms/form-message";
import { updatePassword } from "@/lib/actions/update-password";
import { useRef } from "react";
import { useFormState } from "react-dom";

export default function EditPasswordForm() {
  const ref = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(updatePassword, null);

  if (state?.message) {
    ref.current?.reset();
  }

  return (
    <form ref={ref} action={formAction} className="flex flex-col gap-y-6">
      <FormItem>
        <Label htmlFor="oldPassword">Password Lama</Label>
        <Input
          id="oldPassword"
          name="oldPassword"
          type="password"
          placeholder="Password lama"
        />
        <FormMessage messages={state?.errors?.oldPassword} />
      </FormItem>

      <FormItem>
        <Label htmlFor="newPassword">Password Baru</Label>
        <Input
          id="newPassword"
          name="newPassword"
          type="password"
          placeholder="Pasword Baru"
        />
        <FormMessage messages={state?.errors?.newPassword} />
      </FormItem>

      <FormItem>
        <Label htmlFor="confirmNewPassword">Konfirmasi Password Baru</Label>
        <Input
          id="confirmNewPassword"
          name="confirmNewPassword"
          type="password"
          placeholder="Konfirmasi Pasword Baru"
        />
        <FormMessage messages={state?.errors?.confirmNewPassword} />
      </FormItem>

      {state?.message && (
        <Alert variant={state?.message?.type || "info"}>
          <AlertDescription>{state?.message?.text}</AlertDescription>
        </Alert>
      )}

      <FormButton type="submit" className="mt-4 w-full md:w-fit">
        Perbarui
      </FormButton>
    </form>
  );
}
