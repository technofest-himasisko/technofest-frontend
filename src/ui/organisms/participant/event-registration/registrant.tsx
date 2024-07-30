import { EventRegistrationRole, TeamStatus } from "@/lib/definitions/constants";
import { User } from "@/lib/definitions/technofest";
import ConfirmRegistrantInformationForm from "@/ui/forms/confirm-registrant-information-form";
import RegistrantRegistrants from "@/ui/molecules/registrant-registrants";
import RegistrantTeamName from "@/ui/molecules/registrant-team-name";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

interface Props {
  registrationName: string;
  registrationUid: string;
  registrants: User[];
  maxParticipant: number;
  confirmed: TeamStatus;
  codename: string;
  isCurrentUserLeader: boolean;
}

export default function ParticipantEventRegistrationRegistrant({
  registrationName,
  registrationUid,
  registrants,
  maxParticipant,
  confirmed,
  isCurrentUserLeader,
}: Props) {
  return (
    <section className="container mt-6 md:mt-10">
      <div className="flex md:ml-10">
        <div className="inline-block bg-primary/10 px-4 py-2">
          <h2 className="text-sm font-semibold text-primary md:text-lg">
            {maxParticipant === 1 ? "Informasi Peserta" : "Informasi Tim"}
          </h2>
        </div>
        {confirmed === 1 && (
          <div className="flex items-center bg-green-500/10 px-4 py-2">
            <p className="flex items-center gap-1 text-sm font-semibold text-green-500 md:text-base">
              <CheckCircle weight="duotone" className="text-[1em]" /> Selesai
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-6 bg-slate-900 p-4 shadow-lg md:p-6">
        {maxParticipant > 1 && (
          <RegistrantTeamName
            registrationName={registrationName}
            registrationUid={registrationUid}
            isCurrentUserLeader={isCurrentUserLeader}
            confirmed={confirmed}
          />
        )}

        <RegistrantRegistrants
          registrationUid={registrationUid}
          registrants={registrants}
          maxParticipants={maxParticipant}
          isCurrentUserLeader={isCurrentUserLeader}
          confirmed={confirmed}
        />

        {maxParticipant > 1 &&
          isCurrentUserLeader &&
          confirmed === TeamStatus.UNCONFIRMED && (
            <ConfirmRegistrantInformationForm uid={registrationUid} />
          )}
      </div>
    </section>
  );
}
