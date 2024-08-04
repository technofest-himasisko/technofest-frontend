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
import { Input } from "../atoms/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../atoms/dropdown-menu";
import { DotsThreeOutline, TrashSimple } from "@phosphor-icons/react";
import { deleteRegistration } from "@/lib/actions/delete-registration";

interface Props {
  uid: string;
}

export default function DeleteRegistrationForm({ uid }: Props) {
  const [inputValue, setInputValue] = useState<string>("");
  const [isDialogOpened, setIsDialogOpened] = useState<boolean>(false);

  const deleteRegistrationWithUid = deleteRegistration.bind(null, uid);

  return (
    <>
      <button
        onClick={() => setIsDialogOpened(true)}
        type="submit"
        className="hidden w-full items-center justify-center space-x-1 bg-red-500/20 px-2.5 py-2 text-center font-semibold text-red-500 hover:bg-red-500/30 md:flex md:w-auto md:px-4"
      >
        <TrashSimple weight="duotone" className="text-[1.5em]" />
        <span>Hapus Pendaftaran</span>
      </button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild className="outline-none md:hidden">
          <button>
            <DotsThreeOutline
              weight="duotone"
              className="size-8 text-primary"
            />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            asChild
            className="space-x-1 text-red-500 focus:bg-red-500/10 focus:text-red-500"
          >
            <button onClick={() => setIsDialogOpened(true)}>
              <TrashSimple weight="duotone" className="text-[1.5em]" />
              <span>Hapus Pendaftaran</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={isDialogOpened} onOpenChange={setIsDialogOpened}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Yakin ingin menghapus?</AlertDialogTitle>
            <AlertDialogDescription>
              <p>
                Aksi ini tidak dapat dibatalkan, semua data pendaftaran akan
                terhapus secara permanen
              </p>
              <p className="mt-2">
                Silakan ketik <span className="text-primary">{uid}</span> di
                bawah untuk menghapus.
              </p>
            </AlertDialogDescription>
            <Input
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Tidak</AlertDialogCancel>
            <form action={deleteRegistrationWithUid}>
              <FormButton
                variant="danger"
                disabled={inputValue !== uid}
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
