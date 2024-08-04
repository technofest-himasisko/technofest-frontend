"use server";

import { userCreateRegistrationByEventCodename } from "@/lib/fetch/v2";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function registerCompetitionIndividualEvent(formData: FormData) {
  const codename: string = formData.get("codename") as string;

  await userCreateRegistrationByEventCodename(codename);

  revalidatePath("/u/home");
  revalidatePath("/u/events");

  return redirect(`/u/events/${codename}/registration`);
}
