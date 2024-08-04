"use client";

import { leaveRegistration } from "@/lib/actions/leave-registration";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/ui/atoms/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/atoms/dropdown-menu";
import { FormButton } from "@/ui/atoms/form-button";
import { DotsThreeOutline, TrashSimple } from "@phosphor-icons/react";
import { useState } from "react";

interface Props {
  uid: string;
}

export default function LeaveRegistrationForm({ uid }: Props) {
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
        <span>Keluar dari Pendaftaran</span>
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
              <span>Keluar dari Pendaftaran</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={isDialogOpened} onOpenChange={setIsDialogOpened}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Yakin ingin keluar?</AlertDialogTitle>
            <AlertDialogDescription>
              <p>Ingin keluar dari pendaftaran</p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Tidak</AlertDialogCancel>
            <form action={leaveRegistrationWithUid}>
              <FormButton variant="danger" type="submit">
                Keluar
              </FormButton>
            </form>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
