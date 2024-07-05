import CommonPageContainer from "@/ui/molecules/common-page-container";
import ParticipantEventRegistrationActions from "@/ui/organisms/participant/event-registration/actions";
import ParticipantEventRegistrationEventInformation from "@/ui/organisms/participant/event-registration/event-information";
import ParticipantEventRegistrationHeader from "@/ui/organisms/participant/event-registration/header";
import ParticipantEventRegistrationPayment from "@/ui/organisms/participant/event-registration/payment";
import ParticipantEventRegistrationRegistrant from "@/ui/organisms/participant/event-registration/registrant";
import ParticipantEventRegistrationSubmission from "@/ui/organisms/participant/event-registration/submission";
import ParticipantEventRegistrationWhatsapp from "@/ui/organisms/participant/event-registration/whatsapp";

export default function Page() {
  return (
    <CommonPageContainer>
      <ParticipantEventRegistrationHeader />
      <ParticipantEventRegistrationActions />
      <ParticipantEventRegistrationEventInformation
        color="lime"
        event={{
          name: "UI/UX",
          price: 50000,
          type: "Tim - maks 4 peserta",
        }}
      />
      <ParticipantEventRegistrationRegistrant />
      <ParticipantEventRegistrationPayment />
      <ParticipantEventRegistrationWhatsapp />
      <ParticipantEventRegistrationSubmission />
    </CommonPageContainer>
  );
}
