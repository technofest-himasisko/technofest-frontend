"use server";

import { signOut } from "../auth/auth";
import { userDelete } from "../fetch/v2";

export async function deleteAccount() {
  await userDelete();
  await signOut();
}
