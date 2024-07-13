"use server";

import { z } from "zod";

const schema = z.object({
  type: z.enum(["new", "join"], {
    required_error: "You need to select a notification type.",
  }),
  teamName: z.string(),
  eventRegistrationId: z.string(),
});

export async function registerEvent(prevState: any, formData: FormData) {}
