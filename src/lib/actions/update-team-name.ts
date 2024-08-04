"use server";

import { FormState } from "@/lib/definitions/web";
import { userUpdateRegistrationByUid } from "@/lib/fetch/v2";
import { revalidatePath } from "next/cache";
import { z } from "zod";

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
