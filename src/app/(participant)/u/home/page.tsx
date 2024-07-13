import CommonPageContainer from "@/ui/molecules/common-page-container";
import ParticipantHomeAlerts from "@/ui/organisms/participant/home/alerts";
import ParticipantHomeEvents from "@/ui/organisms/participant/home/events";
import ParticipantHomeHeader from "@/ui/organisms/participant/home/header";
import ParticipantHomeMenu from "@/ui/organisms/participant/home/menu";
import { Suspense } from "react";

export default function Page() {
  return (
    <CommonPageContainer>
      <ParticipantHomeHeader />
      <ParticipantHomeAlerts />
      <ParticipantHomeMenu />
      <ParticipantHomeEvents />
    </CommonPageContainer>
  );
}
