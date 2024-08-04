import { EventRegistrationRole } from "@/lib/definitions/constants";
import { toRegistrationId } from "@/lib/utils/common";
import DeleteRegistrationForm from "@/ui/forms/delete-registration-form";
import LeaveRegistrationForm from "@/ui/forms/leave-registration-form";
import IdDisplay from "@/ui/molecules/id-display";

interface Props {
  uid: string;
  participantRole: EventRegistrationRole;
}

export default async function ParticipantEventRegistrationActions({
  uid,
  participantRole,
}: Props) {
  return (
    <section className="container flex flex-row items-center justify-between gap-y-4">
      <IdDisplay ID={toRegistrationId(uid)} />

      {participantRole === EventRegistrationRole.MEMBER ? (
        <LeaveRegistrationForm uid={uid} />
      ) : (
        <DeleteRegistrationForm uid={uid} />
      )}
    </section>
  );
}
