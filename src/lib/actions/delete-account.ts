"use server";

import { redirect } from "next/navigation";
import { signOut } from "../auth/auth";
import { userDelete } from "../fetch/v2";
import { revalidatePath } from "next/cache";

export async function deleteAccount() {
  await userDelete();
  await signOut();

  revalidatePath("/");

  redirect("/login");
}
