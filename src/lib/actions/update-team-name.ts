"use server";

import { z } from "zod";

const schema = z.object({
  teamName: z.string(),
});

export async function updateTeamName(prevState: any, formData: FormData) {}
