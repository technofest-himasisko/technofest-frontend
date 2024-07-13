"use server";

import { signIn } from "@/lib/auth/auth";

export async function loginGoogle() {
  await signIn("google");
}
