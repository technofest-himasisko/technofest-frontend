"use client";

import { FormButton } from "../atoms/form-button";
import { deleteAccount } from "@/lib/actions/delete-account";
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
import { leaveRegistration } from "@/lib/actions/leave-registration";

interface Props {
  uid: string;
}

export default function LeaveRegistrationForm({ uid }: Props) {
  const [inputValue, setInputValue] = useState<string>("");
  const [isDialogOpened, setIsDialogOpened] = useState<boolean>(false);

  const leaveRegistrationWithUid = leaveRegistration.bind(null, uid);

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
              <p>Ingin keluar dari tim</p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Tidak</AlertDialogCancel>
            <form action={leaveRegistrationWithUid}>
              <FormButton
                variant="danger"
                disabled={inputValue !== uid}
                type="submit"
              >
                Keluar
              </FormButton>
            </form>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
