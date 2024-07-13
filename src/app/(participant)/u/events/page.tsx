import CommonPageContainer from "@/ui/molecules/common-page-container";
import ParticipantEventEventList from "@/ui/organisms/participant/events/event-list";
import ParticipantEventHeader from "@/ui/organisms/participant/events/header";
import { Suspense } from "react";

export default function Page() {
  return (
    <CommonPageContainer>
      <Suspense fallback={<p className="text-xl text-white">Loading...</p>}>
        <ParticipantEventHeader />
      </Suspense>
      <Suspense fallback={<p className="text-xl text-white">Loading...</p>}>
        <ParticipantEventEventList />
      </Suspense>
    </CommonPageContainer>
  );
}
