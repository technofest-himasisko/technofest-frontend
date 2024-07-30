"use server";

import { revalidatePath } from "next/cache";
import { userUpdateRegistrationByUid } from "../fetch/v2";
import { FormState } from "../definitions/web";

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
