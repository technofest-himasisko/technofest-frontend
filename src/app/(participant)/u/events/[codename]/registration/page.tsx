import { auth } from "@/lib/auth/auth";
import { ErrorCode, EventType } from "@/lib/definitions/constants";
import { Competition, Event, Seminar } from "@/lib/definitions/technofest";
import { userGetRegistrationByEventCodename } from "@/lib/fetch/v2";
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

  const competition =
    registration.data?.event?.eventable_type === EventType.COMPETITION
      ? (registration.data?.event as Event<Competition>)
      : undefined;

  const seminar =
    registration.data?.event?.eventable_type === EventType.SEMINAR
      ? (registration.data?.event as Event<Seminar>)
      : undefined;

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
          maxParticipant: competition
            ? competition.eventable?.max_participants!
            : 1,
        }}
      />
      <ParticipantEventRegistrationRegistrant />
      <ParticipantEventRegistrationPayment />
      <ParticipantEventRegistrationWhatsapp />
      <ParticipantEventRegistrationSubmission />
    </CommonPageContainer>
  );
}
