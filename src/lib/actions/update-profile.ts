"use server";

import { z } from "zod";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  institution: z.string(),
  gender: z.string(),
  whatsapp: z.string(),
});

export async function updateProfile(prevState: any, formData: FormData) {}
