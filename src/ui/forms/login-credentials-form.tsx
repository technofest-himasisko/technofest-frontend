"use client";

import { loginCredentials } from "@/lib/actions/login-credentials";
import { FormButton } from "@/ui/atoms/form-button";
import { Input } from "@/ui/atoms/input";
import { useFormState } from "react-dom";
import { Label } from "../atoms/label";
import { Alert, AlertDescription } from "../atoms/alert";
import FormItem from "../atoms/form-item";
import FormMessage from "../atoms/form-message";
import { useRef } from "react";

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
