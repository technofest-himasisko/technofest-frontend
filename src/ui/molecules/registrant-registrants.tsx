"use client";

import { Plus, TrashSimple } from "@phosphor-icons/react";
import { Avatar, AvatarFallback, AvatarImage } from "../atoms/avatar";
import { Badge } from "../atoms/badge";
import { useState } from "react";
import AddParticipantForm from "../forms/add-participant-form";
import { User } from "@/lib/definitions/technofest";
import { getAvatarCallbackLetter, toParticipantId } from "@/lib/utils/common";
import { EventRegistrationRole, TeamStatus } from "@/lib/definitions/constants";
import RemoveParticipantForm from "../forms/remove-participant-form";

interface Props {
  registrants: User[];
  maxParticipants: number;
  registrationUid: string;
  isCurrentUserLeader: boolean;
  confirmed: TeamStatus;
}

export default function RegistrantRegistrants({
  registrants,
  maxParticipants,
  registrationUid,
  isCurrentUserLeader,
  confirmed,
}: Props) {
  const [isAddingParticipant, setIsAddingParticipant] =
    useState<boolean>(false);

  function handleAddParticipantClick() {
    setIsAddingParticipant(true);
  }

  return (
    <div className="max-w-xl">
      <h3 className="text-lg font-semibold">Peserta</h3>
      <div className="mt-2 flex flex-col gap-y-2">
        {registrants.map((registrant) => (
          <div
            key={registrant.id}
            className="flex items-center gap-x-4 border border-primary/50 bg-primary/10 p-4"
          >
            <Avatar className="size-10">
              <AvatarImage src={registrant.avatar} alt={registrant.name} />
              <AvatarFallback>
                {getAvatarCallbackLetter(registrant.name)}
              </AvatarFallback>
            </Avatar>
            <div className="grow">
              <div className="flex items-center gap-x-1">
                <p className="font-semibold md:text-lg">{registrant.name}</p>
                {registrant.event_registrant?.role ===
                  EventRegistrationRole.LEADER && (
                  <Badge variant="yellow">Ketua tim</Badge>
                )}
              </div>
              <div className="-mt-1 flex gap-x-4 text-xs text-slate-100/50 md:text-sm">
                <p>{toParticipantId(registrant.uid)}</p>
                <p className="hidden md:block">{registrant.email}</p>
              </div>
            </div>
            {confirmed === TeamStatus.UNCONFIRMED &&
              registrant.event_registrant?.role ==
                EventRegistrationRole.MEMBER &&
              isCurrentUserLeader && (
                <div>
                  <RemoveParticipantForm
                    registrationUid={registrationUid}
                    participantUid={registrant.uid}
                  />
                </div>
              )}
          </div>
        ))}

        {confirmed === TeamStatus.UNCONFIRMED &&
          maxParticipants > 1 &&
          registrants.length < maxParticipants &&
          isCurrentUserLeader && (
            <>
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
                  <AddParticipantForm
                    registrationUid={registrationUid}
                    onFormOpen={setIsAddingParticipant}
                  />
                </div>
              )}
            </>
          )}
      </div>
    </div>
  );
}
