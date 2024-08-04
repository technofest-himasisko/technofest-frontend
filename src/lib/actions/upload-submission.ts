"use server";

import { FormState } from "@/lib/definitions/web";
import { userUpdateRegistrationByUid } from "@/lib/fetch/v2";
import { uploadFile } from "@/lib/firebase/storage";
import { getSession } from "@/lib/utils/common";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 5; // 5MB
const ACCEPTED_FILE_TYPES = ["image/jpg", "image/jpeg", "image/png"];

const schema = z.object({
  submission: z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= MAX_UPLOAD_SIZE;
    }, "Ukuran file harus dibawah 5 MB")
    .refine((file) => {
      return ACCEPTED_FILE_TYPES.includes(file.type);
    }, "File harus dalam bentuk gambar (.jpg/.jpeg/.png)"),
});

export async function uploadSubmission(
  prevState: any,
  formData: FormData,
): Promise<FormState | undefined> {
  const uid: string = formData.get("uid") as string;
  const eventName: string = formData.get("eventName") as string;

  const session = await getSession();

  const validatedFields = schema.safeParse({
    submission: !formData.get("submissionUrl")
      ? formData.get("submission")
      : new File([], "somenthing.png", { type: "image/png" }),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const submissionFile = validatedFields.data.submission;
  const submissionFileName = `SUBMISSIONS/${eventName}_${session.user?.uid}_${submissionFile.name}`;
  const submissionFileUrl = await uploadFile(
    submissionFile,
    submissionFileName,
  );

  await userUpdateRegistrationByUid(uid, {
    submission: submissionFileUrl,
  });

  revalidatePath("/(participant)/u/events/[codename]/registration", "page");

  return {
    message: {
      text: "Berhasil mengunggah submission",
      type: "success",
    },
  };
}
