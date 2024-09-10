"use client";

import { uploadSubmission } from "@/lib/actions/upload-submission";
import { Alert, AlertDescription } from "@/ui/atoms/alert";
import { FormButton } from "@/ui/atoms/form-button";
import FormItem from "@/ui/atoms/form-item";
import FormMessage from "@/ui/atoms/form-message";
import { Input } from "@/ui/atoms/input";
import { Label } from "@/ui/atoms/label";
import { UploadSimple } from "@phosphor-icons/react";
import Link from "next/link";
import { useRef } from "react";
import { useFormState } from "react-dom";

interface Props {
  registrationUid: string;
  eventName: string;
}

export default function UploadSubmissionForm({
  eventName,
  registrationUid,
}: Props) {
  const ref = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(uploadSubmission, null);

  if (state?.message) {
    ref.current?.reset();
  }

  return (
    <div>
      {eventName === "photography" && (
        <p>
          Silakan unggah submission di{" "}
          <Link
            href="https://forms.gle/ASkqxUVSuqQNcGUCA"
            className="underline"
          >
            Google Form
          </Link>
        </p>
      )}

      {eventName === "uiux" && (
        <p>
          Silakan unggah submission di{" "}
          <Link
            href="https://forms.gle/Xdwy6FhbL4YnduwA7"
            className="underline"
          >
            {" "}
            Google Form
          </Link>
        </p>
      )}

      {eventName === "poster" && (
        <Link href="https://forms.gle/tZTi5zZvECMujtSG8" className="underline">
          {" "}
          Google Form
        </Link>
      )}
    </div>
    // <form
    //   ref={ref}
    //   action={formAction}
    //   className="mt-4 flex w-full flex-col gap-y-4"
    // >
    //   <input type="hidden" id="uid" name="uid" value={registrationUid} />
    //   <input type="hidden" id="eventName" name="eventName" value={eventName} />

    //   <div className="grow">
    //     <FormItem>
    //       <Label>Unggah submission</Label>
    //       <Input type="file" id="submission" name="submission" />
    //       <input type="hidden" name="submissionUrl" />
    //       <FormMessage messages={state?.errors?.submission} />
    //     </FormItem>
    //   </div>

    //   {state?.message && (
    //     <Alert variant={state?.message?.type || "info"}>
    //       <AlertDescription>{state?.message?.text}</AlertDescription>
    //     </Alert>
    //   )}

    //   <div>
    //     <FormButton type="submit" className="w-full space-x-1 md:w-auto">
    //       <UploadSimple
    //         weight="duotone"
    //         className="inline-block text-[1.5em]"
    //       />
    //       <span>Unggah</span>
    //     </FormButton>
    //   </div>
    // </form>
  );
}
