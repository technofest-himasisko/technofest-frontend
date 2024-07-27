import CommonPageContainer from "@/ui/molecules/common-page-container";
import ParticipantHomeAlerts from "@/ui/organisms/participant/home/alerts";
import ParticipantHomeHeader from "@/ui/organisms/participant/home/header";
import ParticipantHomeMenu from "@/ui/organisms/participant/home/menu";
import ParticipantHomeRegistrations from "@/ui/organisms/participant/home/registrations";

export default function Page() {
  return (
    <CommonPageContainer>
      <ParticipantHomeHeader />
      <ParticipantHomeAlerts />
      <ParticipantHomeMenu />
      <ParticipantHomeRegistrations />
    </CommonPageContainer>
  );
}
