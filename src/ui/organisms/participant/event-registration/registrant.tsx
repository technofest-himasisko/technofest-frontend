"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/ui/atoms/avatar";
import { Badge } from "@/ui/atoms/badge";

import { FormButton } from "@/ui/atoms/form-button";
import AddParticipantForm from "@/ui/forms/add-participant-form";
import EditTeamNameFormForm from "@/ui/forms/edit-team-name-form";
import { CheckCircle } from "@phosphor-icons/react";
import {
  PencilSimple,
  Plus,
  TrashSimple,
} from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export default function ParticipantEventRegistrationRegistrant() {
  const [isEditingTeamName, setIsEditingTeamName] = useState<boolean>(false);
  const [isAddingParticipant, setIsAddingParticipant] =
    useState<boolean>(false);

  function handleEditTeamNameClick() {
    setIsEditingTeamName(true);
  }

  function handleAddParticipantClick() {
    setIsAddingParticipant(true);
  }

  return (
    <section className="container mt-6 md:mt-10">
      <div className="inline-block bg-primary/10 px-4 py-2 md:ml-10">
        <h2 className="text-sm font-semibold text-primary md:text-lg">
          Informasi Tim
        </h2>
      </div>
      <div className="bg-slate-900 p-4 shadow-lg md:p-6">
        <div className="max-w-xl">
          <h3 className="text-lg font-semibold">Nama Tim</h3>
          {!isEditingTeamName && (
            <div className="flex space-x-2">
              <p className="text-2xl font-semibold text-primary">Margarin</p>

              <div className="flex">
                <FormButton
                  onClick={handleEditTeamNameClick}
                  className="h-full px-2.5 md:px-4"
                >
                  <PencilSimple weight="bold" className="text-[1.5em]" />
                </FormButton>
              </div>
            </div>
          )}

          {isEditingTeamName && (
            <EditTeamNameFormForm onFormOpen={setIsEditingTeamName} />
          )}
        </div>

        <div className="mt-6 max-w-xl">
          <h3 className="text-lg font-semibold">Peserta</h3>
          <div className="mt-2 flex flex-col gap-y-2">
            <div className="flex items-center gap-x-4 border border-primary/50 bg-primary/10 p-4">
              <Avatar className="size-10">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
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
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
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

        <div className="mt-10">
          <FormButton type="submit" className="w-full space-x-1 md:w-auto">
            <CheckCircle weight="duotone" className="text-[1.5em]" />
            <span>Konfirmasi</span>
          </FormButton>
        </div>
      </div>
    </section>
  );
}
