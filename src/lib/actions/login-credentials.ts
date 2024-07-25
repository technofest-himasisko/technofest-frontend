"use server";

import { z } from "zod";
import { attempt } from "../fetch/v2";
import { signIn } from "../auth/auth";
import { ErrorCode } from "../definitions/constants";
import { FormState } from "../definitions/web";

const schema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string(),
});

export async function loginCredentials(
  prevState: any,
  formData: FormData,
): Promise<FormState | undefined> {
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const response = await attempt(
    validatedFields.data.email,
    validatedFields.data.password,
  );

  if (
    response.status === 401 &&
    response.error_code === ErrorCode.INVALID_CREDENTIALS
  ) {
    return {
      message: {
        text: "Email atau password salah",
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
