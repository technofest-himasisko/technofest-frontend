import CommonPageContainer from "@/ui/molecules/common-page-container";
import ParticipantHomeAlerts from "@/ui/organisms/participant/home/alerts";
import ParticipantHomeEvents from "@/ui/organisms/participant/home/events";
import ParticipantHomeHeader from "@/ui/organisms/participant/home/header";
import ParticipantHomeMenu from "@/ui/organisms/participant/home/menu";
import { Suspense } from "react";

export default function Page() {
  return (
    <CommonPageContainer>
      <Suspense fallback={<p className="text-xl text-white">Loading...</p>}>
        <ParticipantHomeHeader />
      </Suspense>
      <Suspense fallback={<p className="text-xl text-white">Loading...</p>}>
        <ParticipantHomeAlerts />
      </Suspense>
      <Suspense fallback={<p className="text-xl text-white">Loading...</p>}>
        <ParticipantHomeMenu />
      </Suspense>
      <Suspense fallback={<p className="text-xl text-white">Loading...</p>}>
        <ParticipantHomeEvents />
      </Suspense>
    </CommonPageContainer>
  );
}
