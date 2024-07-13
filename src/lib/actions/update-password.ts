"use server";

import { z } from "zod";

const schema = z.object({
  oldPassword: z.string(),
  newPassword: z.string(),
  confirmNewPassword: z.string(),
});

export async function updatePassword(prevState: any, formData: FormData) {}
