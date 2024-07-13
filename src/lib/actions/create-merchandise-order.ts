"use server";

import { z } from "zod";
import { PHONE_REGEX } from "@/lib/definitions/constants";

const schema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  address: z.string(),
  whatsapp: z
    .string()
    .min(1, "Nomor whatsApp wajib diisi")
    .regex(PHONE_REGEX, "Format Nomor WhatsApp tidak sesuai"),
  paymentProof: z.string(),
});

export async function createMerchandiseOrder(
  prevState: any,
  formData: FormData,
) {}
