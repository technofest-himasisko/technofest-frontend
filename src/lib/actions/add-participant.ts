"use server";

import { z } from "zod";
import { FormState } from "@/lib/definitions/web";
import { userAttachOtherUserToRegistrationByUid } from "../fetch/v2";
import { ErrorCode } from "../definitions/constants";
import { revalidatePath } from "next/cache";

const schema = z.object({
  participantUid: z.string().min(1, "ID peserta wajib diisi"),
});

export async function addParticipant(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const uid: string = formData.get("uid") as string;

  const validatedFields = schema.safeParse({
    participantUid: formData.get("participantUid"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const response = await userAttachOtherUserToRegistrationByUid(
    uid,
    validatedFields.data.participantUid,
  );

  if (
    response.status === 401 &&
    response.error_code === ErrorCode.NOT_AUTHENTICATED
  ) {
    return {
      message: {
        text: "User tidak terontetikasi",
        type: "danger",
      },
    };
  }

  if (response.status === 404 && response.error_code === ErrorCode.NOT_FOUND) {
    return {
      message: {
        text: "Peserta tidak ditemukan",
        type: "danger",
      },
    };
  }

  if (
    response.status === 409 &&
    response.error_code === ErrorCode.ALREADY_ATTACHED
  ) {
    return {
      message: {
        text: "Peserta sudah terdaftar di pendaftaran ini/lain",
        type: "danger",
      },
    };
  }

  revalidatePath("/(participant)/u/home", "page");
  revalidatePath("/(participant)/u/events/[codename]/registration", "page");

  return {
    message: {
      text: "Berhasil menambah partisipan",
      type: "success",
    },
  };
}
