"use client";

import { uploadPaymentProof } from "@/lib/actions/upload-payment-proof";
import { Alert, AlertDescription } from "@/ui/atoms/alert";
import { FormButton } from "@/ui/atoms/form-button";
import FormItem from "@/ui/atoms/form-item";
import FormMessage from "@/ui/atoms/form-message";
import { Input } from "@/ui/atoms/input";
import { Label } from "@/ui/atoms/label";
import { UploadSimple } from "@phosphor-icons/react";
import { useRef } from "react";
import { useFormState } from "react-dom";

interface Props {
  paymentId: string;
  paymentProof: string;
  registrationUid: string;
}

export default function UploadPaymentProofForm({
  paymentId,
  paymentProof,
  registrationUid,
}: Props) {
  const ref = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(uploadPaymentProof, null);

  if (state?.message) {
    ref.current?.reset();
  }

  return (
    <form
      ref={ref}
      action={formAction}
      className="mt-4 flex w-full flex-col gap-y-4"
    >
      <input type="hidden" id="paymentId" name="paymentId" value={paymentId} />
      <input
        type="hidden"
        id="registrationUid"
        name="registrationUid"
        value={registrationUid}
      />

      <div className="grow">
        <FormItem>
          <Label>Unggah bukti pembayaran</Label>
          <Input type="file" id="paymentProof" name="paymentProof" />
          <input type="hidden" name="paymentProofUrl" value={paymentProof} />
          <FormMessage messages={state?.errors?.paymentProof} />
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
