"use server";

import { FormState } from "@/lib/definitions/web";
import { userUpdateRegistrationByUid } from "@/lib/fetch/v2";
import { revalidatePath } from "next/cache";

export async function confirmRegistrantInformation(
  prevState: any,
  formData: FormData,
): Promise<FormState | undefined> {
  const uid: string = formData.get("uid") as string;

  await userUpdateRegistrationByUid(uid, {
    confirmed: 1,
  });

  revalidatePath("/(participant)/u/home", "page");
  revalidatePath("/(participant)/u/events/[codename]/registration", "page");

  return {
    message: {
      text: "Informasi tim berhasil dikonfirmasi",
      type: "success",
    },
  };
}
