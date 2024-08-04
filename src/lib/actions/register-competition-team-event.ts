"use server";

import { ErrorCode } from "@/lib/definitions/constants";
import { FormState } from "@/lib/definitions/web";
import {
  userAttachToRegistrationByUid,
  userCreateRegistrationByEventCodename,
} from "@/lib/fetch/v2";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const registrationType = z.enum(["newRegistration", "joinRegistration"]);

const schema = z.discriminatedUnion("registrationType", [
  z.object({
    registrationName: z.string().min(1, "Nama tim wajib diisi"),
    registrationType: registrationType.extract(["newRegistration"]),
  }),
  z.object({
    registrationUid: z.string().min(1, "ID tim wajib diisi"),
    registrationType: registrationType.extract(["joinRegistration"]),
  }),
]);

export async function registerCompetitionTeamEvent(
  prevState: any,
  formData: FormData,
): Promise<FormState | undefined> {
  const codename: string = formData.get("codename") as string;

  const validatedFields = schema.safeParse({
    registrationType: formData.get("registrationType"),
    registrationName: formData.get("registrationName"),
    registrationUid: formData.get("registrationUid"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  if (validatedFields.data.registrationType === "newRegistration") {
    await userCreateRegistrationByEventCodename(codename, {
      teamName: validatedFields.data.registrationName,
    });
  }

  if (validatedFields.data.registrationType === "joinRegistration") {
    const response = await userAttachToRegistrationByUid(
      validatedFields.data.registrationUid,
    );

    if (
      response.status === 401 &&
      response.error_code === ErrorCode.NOT_AUTHENTICATED
    ) {
      return {
        message: {
          text: "User tidak terotentikasi",
          type: "danger",
        },
      };
    }

    if (
      response.status === 404 &&
      response.error_code === ErrorCode.NOT_FOUND
    ) {
      return {
        message: {
          text: "Tim tidak ditemukan",
          type: "danger",
        },
      };
    }

    if (
      response.status === 409 &&
      response.error_code === ErrorCode.ALREADY_REGISTERED
    ) {
      return {
        message: {
          text: "Sudah terdaftar",
          type: "danger",
        },
      };
    }
  }

  revalidatePath("/u/home");
  revalidatePath("/u/events");
  return redirect(`/u/events/${codename}/registration`);
}
