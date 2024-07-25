"use server";

import { z } from "zod";
import { userUpdateProfile } from "../fetch/v2";
import { ErrorCode, PHONE_REGEX } from "../definitions/constants";
import { FormState } from "../definitions/web";
import { getSession } from "../utils/common";
import { uploadFile } from "../firebase/storage";
import { revalidatePath } from "next/cache";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 5; // 5MB
const ACCEPTED_FILE_TYPES = ["image/jpg", "image/jpeg", "image/png"];

const schema = z.object({
  name: z.string().min(1, "Nama tidak boleh kosong"),
  institution: z.string().min(1, "Asal institusi tidak boleh kosong"),
  educationLevel: z.string().min(1, "Status tidak boleh kosong"),
  idNumber: z.string().min(1, "NIM/NISM tidak boleh kosong"),
  idCardImage: z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= MAX_UPLOAD_SIZE;
    }, "Ukuran file harus dibawah 5 MB")
    .refine((file) => {
      return ACCEPTED_FILE_TYPES.includes(file.type);
    }, "File harus dalam bentuk gambar (.jpg/.jpeg/.png)"),
  gender: z.string().min(1, "Jenis kelamin tidak boleh kosong"),
  whatsapp: z
    .string()
    .min(1, "Nomor WhatsApp tidak boleh kosong")
    .regex(PHONE_REGEX, "Nomor WhatsApp tidak valid"),
  instagram: z.string(),
});

export async function updateProfile(
  prevState: any,
  formData: FormData,
): Promise<FormState | undefined> {
  const session = await getSession();

  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    institution: formData.get("institution"),
    educationLevel: formData.get("educationLevel"),
    idNumber: formData.get("idNumber"),
    idCardImage: !formData.get("idCardImageUrl")
      ? formData.get("idCardImage")
      : new File([], "somenthing.png", { type: "image/png" }),
    gender: formData.get("gender"),
    whatsapp: formData.get("whatsapp"),
    instagram: formData.get("instagram"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const idCardImageFile = validatedFields.data.idCardImage;
  const idCardImageFileName = `ID_CARD_IMAGES/${session.user?.uid}_${idCardImageFile.name}`;
  const idCardImageFileUrl = await uploadFile(
    idCardImageFile,
    idCardImageFileName,
  );

  const response = await userUpdateProfile({
    name: validatedFields.data.name,
    user_profile: {
      institution: validatedFields.data.institution,
      education_level: Number(validatedFields.data.educationLevel),
      id_number: validatedFields.data.idNumber,
      id_card_image: idCardImageFileUrl,
      gender: Number(validatedFields.data.gender),
      whatsapp: validatedFields.data.whatsapp,
      instagram: validatedFields.data.instagram,
    },
  });

  if (
    response.status === 401 &&
    response.error_code === ErrorCode.NOT_AUTHENTICATED
  ) {
    return {
      message: {
        text: "User tidak terontetikasi",
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

  revalidatePath("/u/setting");

  return {
    message: {
      text: "Data berhasil disimpan",
      type: "success",
    },
  };
}
