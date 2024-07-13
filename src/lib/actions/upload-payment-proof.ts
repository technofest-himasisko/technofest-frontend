"use server";

import { z } from "zod";

const schema = z.object({
  paymentProof: z.string(),
});

export async function uploadPaymentProof(prevState: any, formData: FormData) {}
