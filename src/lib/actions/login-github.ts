"use server";

import { signIn } from "@/lib/auth/auth";

export async function loginGithub() {
  await signIn("github");
}
