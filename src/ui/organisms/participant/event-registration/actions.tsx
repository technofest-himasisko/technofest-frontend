"use client";

import useCopy from "@/lib/hooks/use-copy";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/ui/atoms/menubar";
import { Copy, List, TrashSimple } from "@phosphor-icons/react/dist/ssr";

export default function ParticipantEventRegistrationActions() {
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
        type="submit"
        className="hidden w-full items-center justify-center space-x-1 bg-red-500/20 px-2.5 py-2 text-center font-semibold text-red-500 hover:bg-red-500/30 md:flex md:w-auto md:px-4"
      >
        <TrashSimple weight="duotone" className="text-[1.5em]" />
        <span>Hapus Pendaftaran</span>
      </button>

      <Menubar className="md:hidden">
        <MenubarMenu>
          <MenubarTrigger>
            <List weight="bold" className="size-8" />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem className="space-x-1 text-red-500 focus:bg-red-500/10 focus:text-red-500">
              <TrashSimple weight="duotone" className="text-[1.5em]" />
              <span>Hapus Pendaftaran</span>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </section>
  );
}
