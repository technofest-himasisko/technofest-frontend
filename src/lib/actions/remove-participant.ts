"use server";

import { userDetachOtherUserFromRegistrationByUid } from "@/lib/fetch/v2";
import { revalidatePath } from "next/cache";

export async function removeParticipant(formData: FormData) {
  const registrationUid: string = formData.get("registrationUid") as string;
  const participantUid: string = formData.get("participantUid") as string;

  await userDetachOtherUserFromRegistrationByUid(
    registrationUid,
    participantUid,
  );

  revalidatePath("/(participant)/u/home", "page");
  revalidatePath("/(participant)/u/events/[codename]/registration", "page");
}
