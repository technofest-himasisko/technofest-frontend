"use server";

import { z } from "zod";
import { FormState } from "../definitions/web";
import { userUpdateRegistrationByUid } from "../fetch/v2";
import { revalidatePath } from "next/cache";

const schema = z.object({
  registrationName: z.string().min(1, "Nama tim wajib diisi"),
});

export async function updateTeamName(
  prevState: any,
  formData: FormData,
): Promise<FormState | undefined> {
  const uid: string = formData.get("uid") as string;

  const validatedFields = schema.safeParse({
    registrationName: formData.get("registrationName"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  await userUpdateRegistrationByUid(uid, {
    name: validatedFields.data.registrationName,
  });

  revalidatePath("/(participant)/u/events/[codename]/registration", "page");

  return {
    message: {
      text: "Data berhasil disimpan",
      type: "success",
    },
  };
}
