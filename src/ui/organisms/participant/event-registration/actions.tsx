"use client";

import useCopy from "@/lib/hooks/use-copy";
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
import { DotsThreeOutline } from "@phosphor-icons/react";

import { Copy, List, TrashSimple } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useState } from "react";

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export default function ParticipantEventRegistrationActions() {
  const [isDialogOpened, setIsDialogOpened] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const { copyToClipboard } = useCopy();

  function handleCopyClick() {
    copyToClipboard("081367436851");
  }

  return (
    <section className="container flex flex-row items-center justify-between gap-y-4">
      <div className="flex flex-row border border-primary/20 bg-primary/10">
        <p className="px-4 py-1 text-xl font-semibold md:py-2 md:text-3xl">
          ID: E-05390979
        </p>
        <button
          onClick={handleCopyClick}
          className="bg-primary/10 px-4 py-1 text-primary transition-colors hover:bg-primary/20 md:py-2"
        >
          <Copy />
        </button>
      </div>

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
              Aksi ini tidak dapat dibatalkan, semua data pendaftaran akan
              terhapus secara permanen
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Tidak</AlertDialogCancel>
            <form
              onSubmit={(event) => {
                setIsLoading(true);
                wait().then(() => {
                  setIsDialogOpened(false);
                  setIsLoading(false);
                  router.push("/u/home");
                });
                event.preventDefault();
              }}
            >
              {/** some inputs */}
              <FormButton loading={isLoading} type="submit">
                Hapus
              </FormButton>
            </form>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
