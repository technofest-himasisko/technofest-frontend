"use client";

import { FormButton } from "../atoms/form-button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../atoms/alert-dialog";
import { useState } from "react";
import { CheckCircle } from "@phosphor-icons/react";
import { confirmRegistrantInformation } from "@/lib/actions/confirm-registrant-information";

interface Props {
  codename: string;
}

export default function ConfirmRegistrantInformationForm({ codename }: Props) {
  const [isDialogOpened, setIsDialogOpened] = useState<boolean>(false);

  const confirmRegistrantInformationWithCodename =
    confirmRegistrantInformation.bind(null, codename);

  return (
    <>
      <FormButton
        onClick={() => setIsDialogOpened(true)}
        className="w-full space-x-1 md:w-auto"
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
            <form action={confirmRegistrantInformationWithCodename}>
              <FormButton type="submit">Lanjut</FormButton>
            </form>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
