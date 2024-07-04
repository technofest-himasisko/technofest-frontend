import CommonPageContainer from "@/ui/molecules/common-page-container";
import ParticipantEventEventList from "@/ui/organisms/participant/events/event-list";
import ParticipantEventHeader from "@/ui/organisms/participant/events/header";

export default function Page() {
  return (
    <CommonPageContainer>
      <ParticipantEventHeader />
      <ParticipantEventEventList />
    </CommonPageContainer>
  );
}
