"use server";

import { revalidatePath } from "next/cache";
import { userDeleteRegistrationByUid } from "../fetch/v2";
import { redirect } from "next/navigation";

export async function deleteRegistration(uid: string) {
  await userDeleteRegistrationByUid(uid);

  revalidatePath("/u/home");
  revalidatePath("/u/events");
  return redirect(`/u/home`);
}
