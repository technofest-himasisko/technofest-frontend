"use server";

import { z } from "zod";
import { FormState } from "../definitions/web";
import { userCreateRegistrationByEventCodename } from "../fetch/v2";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ParticipationMethod } from "../definitions/constants";

const schema = z.object({
  participantMethod: z.enum(
    [String(ParticipationMethod.OFFLINE), String(ParticipationMethod.ONLINE)],
    {
      required_error: "Silakan pilih jenis partisipasi.",
    },
  ),
});

export async function registerSeminarEvent(
  prevState: any,
  formData: FormData,
): Promise<FormState | undefined> {
  const codename: string = formData.get("codename") as string;

  const validatedFields = schema.safeParse({
    participantMethod: formData.get("participantMethod"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  await userCreateRegistrationByEventCodename(codename, {
    participationMethod: validatedFields.data.participantMethod,
  });

  revalidatePath("/u/home");
  revalidatePath("/u/events");
  return redirect(`/u/events/${codename}/registration`);
}
