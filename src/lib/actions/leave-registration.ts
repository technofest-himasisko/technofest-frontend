"use server";

import { userDetachFromRegistrationByUid } from "@/lib/fetch/v2";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function leaveRegistration(uid: string) {
  await userDetachFromRegistrationByUid(uid);

  revalidatePath("/u/home");
  revalidatePath("/u/events");

  return redirect(`/u/home`);
}
