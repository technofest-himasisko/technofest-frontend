"use server";

import { z } from "zod";
import { FormState } from "@/lib/definitions/web";

const schema = z.object({
  participantId: z.string().min(1, "ID peserta wajib diisi"),
});

export async function addParticipant(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const validatedFields = schema.safeParse({
    participantId: formData.get("participantId"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  return {
    message: {
      text: "Berhasil menambah partisipan",
      type: "success",
    },
  };
}
