"use server";

import { revalidatePath } from "next/cache";
import { userDetachFromRegistrationByUid } from "../fetch/v2";
import { redirect } from "next/navigation";

export async function leaveRegistration(uid: string) {
  await userDetachFromRegistrationByUid(uid);

  revalidatePath("/u/home");
  revalidatePath("/u/events");
  return redirect(`/u/home`);
}
