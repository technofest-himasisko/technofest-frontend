"use server";

import { ErrorCode } from "@/lib/definitions/constants";
import { FormState } from "@/lib/definitions/web";
import { userUpdatePassword } from "@/lib/fetch/v2";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z
  .object({
    oldPassword: z.string().min(1, "Password wajib diisi"),
    newPassword: z.string().min(8, "Minimal 8 karakter"),
    confirmNewPassword: z.string().min(8, "Minimal 8 karakter"),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Konfirmasi password tidak sama",
    path: ["confirmNewPassword"],
  });

export async function updatePassword(
  prevState: any,
  formData: FormData,
): Promise<FormState | undefined> {
  const validatedFields = schema.safeParse({
    oldPassword: formData.get("oldPassword"),
    newPassword: formData.get("newPassword"),
    confirmNewPassword: formData.get("confirmNewPassword"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const response = await userUpdatePassword(
    validatedFields.data.oldPassword,
    validatedFields.data.newPassword,
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

  if (
    response.status === 401 &&
    response.error_code === ErrorCode.WRONG_PASSWORD
  ) {
    return {
      message: {
        text: "Password lama salah",
        type: "danger",
      },
    };
  }

  if (
    response.status === 422 &&
    response.error_code === ErrorCode.VALIDATION_ERROR
  ) {
    return {
      message: {
        text: "Validasi server error",
        type: "danger",
      },
    };
  }

  revalidatePath("/u/setting");

  return {
    message: {
      text: "Password berhasil diperbarui",
      type: "success",
    },
  };
}
