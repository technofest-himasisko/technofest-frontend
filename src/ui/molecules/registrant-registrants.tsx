"use client";

import { Plus, TrashSimple } from "@phosphor-icons/react";
import { Avatar, AvatarFallback, AvatarImage } from "../atoms/avatar";
import { Badge } from "../atoms/badge";
import { useState } from "react";
import AddParticipantForm from "../forms/add-participant-form";
import { User } from "@/lib/definitions/technofest";

interface Props {
  registrants: User[];
}

export default function RegistrantRegistrants({ registrants }: Props) {
  const [isAddingParticipant, setIsAddingParticipant] =
    useState<boolean>(false);

  function handleAddParticipantClick() {
    setIsAddingParticipant(true);
  }

  return (
    <div className="mt-6 max-w-xl">
      <h3 className="text-lg font-semibold">Peserta</h3>
      <div className="mt-2 flex flex-col gap-y-2">
        <div className="flex items-center gap-x-4 border border-primary/50 bg-primary/10 p-4">
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="grow">
            <div className="flex items-center gap-x-1">
              <p className="font-semibold md:text-lg">H. Gede</p>
              <Badge variant="yellow">Ketua tim</Badge>
            </div>
            <div className="-mt-1 flex gap-x-4 text-xs text-slate-100/50 md:text-sm">
              <p>U-112192</p>
              <p className="hidden md:block">slow9ie@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-4 border border-primary/50 bg-primary/10 p-4">
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="grow">
            <div className="flex items-center gap-x-1">
              <p className="font-semibold md:text-lg">H. Gede</p>
            </div>
            <div className="-mt-1 flex gap-x-4 text-xs text-slate-100/50 md:text-sm">
              <p>U-112192</p>
              <p className="hidden md:block">slow9ie@gmail.com</p>{" "}
            </div>
          </div>
          <div>
            <button className="flex items-center text-base text-red-500 hover:text-red-500/80 md:px-4">
              <TrashSimple weight="duotone" className="text-[1.5em]" />
            </button>
          </div>
        </div>

        {!isAddingParticipant && (
          <button
            onClick={handleAddParticipantClick}
            className="flex h-20 flex-col items-center justify-center border border-primary/50 bg-primary/10 p-4 text-sm text-slate-100/50 hover:bg-primary/20 hover:text-slate-100 md:text-base"
          >
            <Plus weight="bold" className="text-2em" />
            <span>Tambah Peserta</span>
          </button>
        )}

        {isAddingParticipant && (
          <div className="flex items-center gap-x-4 border border-primary/50 bg-primary/10 p-4">
            <AddParticipantForm onFormOpen={setIsAddingParticipant} />
          </div>
        )}
      </div>
    </div>
  );
}
