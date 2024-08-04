"use client";

import { registerCredentials } from "@/lib/actions/register-credentials";
import { Alert, AlertDescription } from "@/ui/atoms/alert";
import { FormButton } from "@/ui/atoms/form-button";
import FormItem from "@/ui/atoms/form-item";
import FormMessage from "@/ui/atoms/form-message";
import { Input } from "@/ui/atoms/input";
import { Label } from "@/ui/atoms/label";
import { useRef } from "react";
import { useFormState } from "react-dom";

export default function RegisterCredentialsForm() {
  const ref = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(registerCredentials, null);

  if (state?.message) {
    ref.current?.reset();
  }
  return (
    <form ref={ref} action={formAction} className="flex flex-col gap-y-6">
      <FormItem>
        <Label htmlFor="name">Nama</Label>
        <Input id="name" name="name" type="text" placeholder="Nama" />
        <FormMessage messages={state?.errors?.name} />
      </FormItem>

      <FormItem>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="uwu@gmail.com"
        />
        <FormMessage messages={state?.errors?.email} />
      </FormItem>

      <FormItem>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />
        <FormMessage messages={state?.errors?.password} />
      </FormItem>

      <FormItem>
        <Label htmlFor="confirmPassword">Konfirmasi password</Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Konfirmasi Password"
        />
        <FormMessage messages={state?.errors?.confirmPassword} />
      </FormItem>

      {state?.message && (
        <Alert variant={state?.message?.type || "info"}>
          <AlertDescription>{state?.message?.text}</AlertDescription>
        </Alert>
      )}

      <FormButton type="submit" className="mt-4 w-full">
        Registrasi
      </FormButton>
    </form>
  );
}
