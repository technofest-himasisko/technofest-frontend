"use client";

import { FormButton } from "@/ui/atoms/form-button";
import { Input } from "@/ui/atoms/input";
import { UploadSimple } from "@phosphor-icons/react";
import { Alert, AlertDescription } from "../atoms/alert";
import { Label } from "../atoms/label";
import FormMessage from "../atoms/form-message";
import FormItem from "../atoms/form-item";
import { useRef } from "react";
import { useFormState } from "react-dom";
import { uploadSubmission } from "@/lib/actions/upload-submission";

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
    <form
      ref={ref}
      action={formAction}
      className="mt-4 flex w-full flex-col gap-y-4"
    >
      <input type="hidden" id="uid" name="uid" value={registrationUid} />
      <input type="hidden" id="eventName" name="eventName" value={eventName} />

      <div className="grow">
        <FormItem>
          <Label>Unggah bukti pembayaran</Label>
          <Input type="file" id="submission" name="submission" />
          <input type="hidden" name="submissionUrl" />
          <FormMessage messages={state?.errors?.submission} />
        </FormItem>
      </div>

      {state?.message && (
        <Alert variant={state?.message?.type || "info"}>
          <AlertDescription>{state?.message?.text}</AlertDescription>
        </Alert>
      )}

      <div>
        <FormButton type="submit" className="w-full space-x-1 md:w-auto">
          <UploadSimple
            weight="duotone"
            className="inline-block text-[1.5em]"
          />
          <span>Unggah</span>
        </FormButton>
      </div>
    </form>
  );
}
