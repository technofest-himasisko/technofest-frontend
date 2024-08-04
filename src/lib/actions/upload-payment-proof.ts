"use server";

import { z } from "zod";
import { uploadFile } from "../firebase/storage";
import { userUpdatePaymentById } from "../fetch/v2";
import { FormState } from "../definitions/web";
import { revalidatePath } from "next/cache";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 5; // 5MB
const ACCEPTED_FILE_TYPES = ["image/jpg", "image/jpeg", "image/png"];

const schema = z.object({
  paymentProof: z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= MAX_UPLOAD_SIZE;
    }, "Ukuran file harus dibawah 5 MB")
    .refine((file) => {
      return ACCEPTED_FILE_TYPES.includes(file.type);
    }, "File harus dalam bentuk gambar (.jpg/.jpeg/.png)"),
});

export async function uploadPaymentProof(
  prevState: any,
  formData: FormData,
): Promise<FormState | undefined> {
  const paymentId: string = formData.get("paymentId") as string;
  const registrationUid: string = formData.get("registrationUid") as string;

  const validatedFields = schema.safeParse({
    paymentProof: !formData.get("paymentProofUrl")
      ? formData.get("paymentProof")
      : new File([], "somenthing.png", { type: "image/png" }),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const paymentProofFile = validatedFields.data.paymentProof;
  const paymentProofFileName = `PAYMENT_PROOF_IMAGES/${registrationUid}_${paymentProofFile.name}`;
  const paymentProofFileUrl = await uploadFile(
    paymentProofFile,
    paymentProofFileName,
  );

  await userUpdatePaymentById(paymentId, {
    proof: paymentProofFileUrl,
  });

  revalidatePath("/(participant)/u/home", "page");
  revalidatePath("/(participant)/u/events/[codename]/registration", "page");

  return {
    message: {
      text: "Bukti pembayaran berhasil diunggah",
      type: "success",
    },
  };
}
