"use server";

import { z } from "zod";

const schema = z.object({
  email: z.string(),
  password: z.string(),
});

export async function loginCredentials(prevState: any, formData: FormData) {}
