"use server";

import { signOut } from "../auth/auth";
import { userDelete } from "../fetch/v2";
import { getServerSanctumToken } from "../utils/common";

export async function deleteAccount() {
  await userDelete((await getServerSanctumToken()) as string);
  await signOut();
}
