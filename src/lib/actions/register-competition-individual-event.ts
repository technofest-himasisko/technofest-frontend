"use server";

import { revalidatePath } from "next/cache";
import { userCreateRegistrationByEventCodename } from "../fetch/v2";
import { redirect } from "next/navigation";

export async function registerCompetitionIndividualEvent(formData: FormData) {
  const codename: string = formData.get("codename") as string;

  await userCreateRegistrationByEventCodename(codename);

  revalidatePath("/u/home");
  revalidatePath("/u/events");

  return redirect(`/u/events/${codename}/registration`);
}
