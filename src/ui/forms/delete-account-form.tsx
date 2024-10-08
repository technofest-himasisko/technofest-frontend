"use client";

import { deleteAccount } from "@/lib/actions/delete-account";
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
import { Input } from "@/ui/atoms/input";
import { Label } from "@/ui/atoms/label";
import { TrashSimple } from "@phosphor-icons/react";
import { useState } from "react";

interface Props {
  email: string;
}

export default function DeleteAccountForm({ email }: Props) {
  const [isDialogOpened, setIsDialogOpened] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <>
      <div>
        <Label>Hapus Akun</Label>
        <p className="text-sm text-slate-500">
          Semua data pendaftaran dan kegiatan terkait akan terhapus secara
          permanen.
        </p>

        <FormButton
          variant="danger"
          onClick={() => setIsDialogOpened(true)}
          className="mt-2 flex w-fit flex-row items-center gap-x-1"
        >
          <TrashSimple weight="bold" className="text-[1.5em]" />
          <span>Hapus Akun</span>
        </FormButton>
      </div>

      <AlertDialog open={isDialogOpened} onOpenChange={setIsDialogOpened}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Yakin ingin menghapus?</AlertDialogTitle>
            <AlertDialogDescription>
              Silakan ketik <span className="text-primary">{email}</span> di
              bawah untuk menghapus.
            </AlertDialogDescription>
            <Input
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Tidak</AlertDialogCancel>
            <form action={deleteAccount}>
              <FormButton
                variant="danger"
                disabled={inputValue !== email}
                type="submit"
              >
                Hapus
              </FormButton>
            </form>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
