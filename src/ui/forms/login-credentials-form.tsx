"use client";

import { loginCredentials } from "@/lib/actions/login-credentials";
import { Alert, AlertDescription } from "@/ui/atoms/alert";
import { FormButton } from "@/ui/atoms/form-button";
import FormItem from "@/ui/atoms/form-item";
import FormMessage from "@/ui/atoms/form-message";
import { Input } from "@/ui/atoms/input";
import { Label } from "@/ui/atoms/label";
import { useRef } from "react";
import { useFormState } from "react-dom";

export default function LoginCredentialsForm() {
  const ref = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(loginCredentials, null);

  if (state?.message) {
    ref.current?.reset();
  }

  return (
    <form ref={ref} action={formAction} className="flex flex-col gap-y-6">
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

      {state?.message && (
        <Alert variant={state?.message?.type || "info"}>
          <AlertDescription>{state?.message?.text}</AlertDescription>
        </Alert>
      )}

      <FormButton type="submit" className="mt-4 w-full">
        Login
      </FormButton>
    </form>
  );
}
