"use server";

import { userDeleteRegistrationByUid } from "@/lib/fetch/v2";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteRegistration(uid: string) {
  await userDeleteRegistrationByUid(uid);

  revalidatePath("/u/home");
  revalidatePath("/u/events");
  return redirect(`/u/home`);
}
