"use server";

import { signOut } from "@/lib/auth/auth";
import { userDelete } from "@/lib/fetch/v2";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteAccount() {
  await userDelete();
  await signOut();

  revalidatePath("/");

  redirect("/login");
}
