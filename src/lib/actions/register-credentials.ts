"use server";

import { z } from "zod";
import { register } from "../fetch/v2";
import { ErrorCode } from "../definitions/constants";
import { signIn } from "../auth/auth";
import { FormState } from "../definitions/web";

const schema = z
  .object({
    name: z.string().min(1, "Nama tidak boleh kosong"),
    email: z
      .string()
      .min(1, "Email tidak boleh kosong")
      .email("Email tidak valid"),
    password: z.string().min(8, "Minimal 8 karakter"),
    confirmPassword: z.string().min(8, "Minimal 8 karakter"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Konfirmasi password tidak sama",
    path: ["confirmPassword"],
  });

export async function registerCredentials(
  prevState: any,
  formData: FormData,
): Promise<FormState | undefined> {
  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const response = await register(
    validatedFields.data.name,
    validatedFields.data.email,
    validatedFields.data.password,
  );

  if (
    response.status === 409 &&
    response.error_code === ErrorCode.EMAIL_ALREADY_EXISTS
  ) {
    return {
      message: {
        text: "Email telah digunakan pada akun lain",
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

  await signIn("credentials", {
    email: validatedFields.data.email,
    password: validatedFields.data.password,
  });
}
