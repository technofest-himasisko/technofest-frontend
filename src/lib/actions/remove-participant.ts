"use server";

import { revalidatePath } from "next/cache";
import { userDetachOtherUserFromRegistrationByUid } from "../fetch/v2";

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
