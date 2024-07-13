"use server";

import { z } from "zod";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});

export async function register(prevState: any, formData: FormData) {}
