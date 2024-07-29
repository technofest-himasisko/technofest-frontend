import { auth } from "@/lib/auth/auth";
import { ErrorCode, EventType } from "@/lib/definitions/constants";
import { Competition, Event, Seminar } from "@/lib/definitions/technofest";
import { userGetRegistrationByEventCodename } from "@/lib/fetch/v2";
import { isCompetition, isSeminar } from "@/lib/utils/common";
import { eventTypeToColor } from "@/lib/utils/converter";
import CommonPageContainer from "@/ui/molecules/common-page-container";
import ParticipantEventRegistrationActions from "@/ui/organisms/participant/event-registration/actions";
import ParticipantEventRegistrationEventInformation from "@/ui/organisms/participant/event-registration/event-information";
import ParticipantEventRegistrationHeader from "@/ui/organisms/participant/event-registration/header";
import ParticipantEventRegistrationPayment from "@/ui/organisms/participant/event-registration/payment";
import ParticipantEventRegistrationRegistrant from "@/ui/organisms/participant/event-registration/registrant";
import ParticipantEventRegistrationSubmission from "@/ui/organisms/participant/event-registration/submission";
import ParticipantEventRegistrationWhatsapp from "@/ui/organisms/participant/event-registration/whatsapp";
import { Session } from "next-auth";
import { redirect } from "next/navigation";

interface Props {
  params: {
    codename: string;
  };
}

export default async function Page({ params }: Props) {
  const registration = await userGetRegistrationByEventCodename(
    params.codename,
  );

  const session = (await auth()) as Session;

  if (
    registration.status === 404 &&
    registration.error_code === ErrorCode.NOT_FOUND
  ) {
    return redirect("/u");
  }

  const currentUser = registration.data?.users!.find(
    (user) => user.id === session?.user?.id,
  );

  const maxParticipant = isCompetition(registration.data?.event!)
    ? registration.data?.event?.eventable?.max_participants!
    : 1;

  return (
    <CommonPageContainer>
      <ParticipantEventRegistrationHeader />
      <ParticipantEventRegistrationActions
        uid={registration.data?.uid!}
        participantRole={currentUser?.event_registrant?.role!}
      />
      <ParticipantEventRegistrationEventInformation
        color={eventTypeToColor(registration.data?.event?.eventable_type!)}
        event={{
          name: registration.data?.event?.name!,
          price: registration.data?.event?.price!,
          maxParticipant: maxParticipant,
        }}
      />

      <ParticipantEventRegistrationRegistrant
        registrationName={registration.data?.name!}
        registrationUid={registration.data?.uid!}
        registrants={registration.data?.users!}
        maxParticipant={maxParticipant}
        confirmed={registration.data?.confirmed!}
        codename={params.codename}
      />
      <ParticipantEventRegistrationPayment />
      <ParticipantEventRegistrationWhatsapp />
      <ParticipantEventRegistrationSubmission />
    </CommonPageContainer>
  );
}
