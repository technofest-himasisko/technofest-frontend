"use server";

import { signIn } from "@/auth";

export async function loginGoogle() {
  await signIn("google");
}
