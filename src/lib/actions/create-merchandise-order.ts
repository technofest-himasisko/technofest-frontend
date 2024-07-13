"use server";

import { z } from "zod";
import { WHATSAPP_REGEX } from "@/lib/constants";

const schema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  address: z.string(),
  whatsapp: z
    .string()
    .min(1, "Nomor whatsApp wajib diisi")
    .regex(WHATSAPP_REGEX, "Format Nomor WhatsApp tidak sesuai"),
  paymentProof: z.string(),
});

export async function createMerchandiseOrder(
  prevState: any,
  formData: FormData,
) {}
