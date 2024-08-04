"use client";

import { TeamStatus } from "@/lib/definitions/constants";
import { FormButton } from "@/ui/atoms/form-button";
import EditTeamNameFormForm from "@/ui/forms/edit-team-name-form";
import { PencilSimple } from "@phosphor-icons/react";
import { useState } from "react";

interface Props {
  registrationName: string;
  registrationUid: string;
  isCurrentUserLeader: boolean;
  confirmed: TeamStatus;
}

export default function RegistrantTeamName({
  registrationName,
  registrationUid,
  isCurrentUserLeader,
  confirmed,
}: Props) {
  const [isEditingTeamName, setIsEditingTeamName] = useState<boolean>(false);

  function handleEditTeamNameClick() {
    setIsEditingTeamName(true);
  }

  return (
    <div className="max-w-xl">
      <h3 className="text-lg font-semibold">Nama Tim</h3>

      <div className="border border-primary/50 bg-primary/10 p-4">
        {!isEditingTeamName && (
          <div className="flex space-x-2">
            <p className="grow text-2xl font-semibold text-primary">
              {registrationName}
            </p>

            {confirmed === TeamStatus.UNCONFIRMED && isCurrentUserLeader && (
              <div className="flex">
                <FormButton
                  onClick={handleEditTeamNameClick}
                  className="h-full px-2.5 md:px-4"
                >
                  <PencilSimple weight="bold" className="text-[1.5em]" />
                </FormButton>
              </div>
            )}
          </div>
        )}

        {confirmed === TeamStatus.UNCONFIRMED &&
          isEditingTeamName &&
          isCurrentUserLeader && (
            <EditTeamNameFormForm
              registrationName={registrationName}
              registrationUid={registrationUid}
              onFormOpen={setIsEditingTeamName}
            />
          )}
      </div>
    </div>
  );
}
