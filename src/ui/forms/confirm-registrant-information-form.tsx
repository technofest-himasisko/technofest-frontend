"use client";

import { confirmRegistrantInformation } from "@/lib/actions/confirm-registrant-information";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/ui/atoms/alert-dialog";
import { FormButton } from "@/ui/atoms/form-button";
import { CheckCircle } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

interface Props {
  uid: string;
}

export default function ConfirmRegistrantInformationForm({ uid }: Props) {
  const [isDialogOpened, setIsDialogOpened] = useState<boolean>(false);

  const [state, formAction] = useFormState(confirmRegistrantInformation, null);

  useEffect(() => {
    if (state?.message?.type === "success") {
      setIsDialogOpened(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <>
      <FormButton
        onClick={() => setIsDialogOpened(true)}
        className="w-full space-x-1 md:w-fit"
      >
        <CheckCircle weight="duotone" className="text-[1.5em]" />
        <span>Konfirmasi</span>
      </FormButton>

      <AlertDialog open={isDialogOpened} onOpenChange={setIsDialogOpened}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Yakin ingin Mengkonfirmasi?</AlertDialogTitle>
            <AlertDialogDescription>
              <p>
                Setelah mengkonfirmasi, Anda tidak dapat lagi mengubah nama tim
                dan peserta
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Tidak</AlertDialogCancel>
            <form action={formAction}>
              <input id="uid" name="uid" value={uid} hidden />

              <FormButton type="submit">Lanjut</FormButton>
            </form>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
