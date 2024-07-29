"use client";

import { User } from "@/lib/definitions/technofest";
import ConfirmRegistrantInformationForm from "@/ui/forms/confirm-registrant-information-form";
import RegistrantRegistrants from "@/ui/molecules/registrant-registrants";
import RegistrantTeamName from "@/ui/molecules/registrant-team-name";

interface Props {
  registrationName: string;
  registrationUid: string;
  registrants: User[];
  maxParticipant: number;
  confirmed: number;
  codename: string;
}

export default function ParticipantEventRegistrationRegistrant({
  registrationName,
  registrationUid,
  registrants,
  maxParticipant,
  confirmed,
  codename,
}: Props) {
  return (
    <section className="container mt-6 md:mt-10">
      <div className="inline-block bg-primary/10 px-4 py-2 md:ml-10">
        <h2 className="text-sm font-semibold text-primary md:text-lg">
          Informasi Tim
        </h2>
      </div>
      <div className="bg-slate-900 p-4 shadow-lg md:p-6">
        <RegistrantTeamName registrationName={registrationName} />

        <RegistrantRegistrants registrants={registrants} />

        <div className="mt-10">
          <ConfirmRegistrantInformationForm codename={codename} />
        </div>
      </div>
    </section>
  );
}
