"use server";

import { z } from "zod";

const schema = z.object({
  submission: z.string(),
});

export async function uploadSubmission(prevState: any, formData: FormData) {}
