"use client";

import { useState } from "react";
import { FormButton } from "../atoms/form-button";
import { PencilSimple } from "@phosphor-icons/react";
import EditTeamNameFormForm from "../forms/edit-team-name-form";

interface Props {
  registrationName: string;
}

export default function RegistrantTeamName({ registrationName }: Props) {
  const [isEditingTeamName, setIsEditingTeamName] = useState<boolean>(false);

  function handleEditTeamNameClick() {
    setIsEditingTeamName(true);
  }

  return (
    <div className="max-w-xl">
      <h3 className="text-lg font-semibold">Nama Tim</h3>
      {!isEditingTeamName && (
        <div className="flex space-x-2">
          <p className="text-2xl font-semibold text-primary">
            {registrationName}
          </p>

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
  );
}
