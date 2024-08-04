import { Skeleton } from "@/ui/atoms/skeleton";
import CommonPageContainer from "@/ui/molecules/common-page-container";
import ParticipantEventEventList from "@/ui/organisms/participant/events/event-list";
import ParticipantEventHeader from "@/ui/organisms/participant/events/header";
import { Suspense } from "react";

export default function Page() {
  return (
    <CommonPageContainer>
      <ParticipantEventHeader />
      <Suspense fallback={<ParticipantEventEventListLoading />}>
        <ParticipantEventEventList />
      </Suspense>
    </CommonPageContainer>
  );
}

function ParticipantEventEventListLoading() {
  return (
    <section className="container">
      <Skeleton className="h-8 max-w-[30ch]" />
      <div className="mt-10">
        <Skeleton className="my-4 h-40 md:h-24" />
        <Skeleton className="my-4 h-40 md:h-24" />
        <Skeleton className="my-4 h-40 md:h-24" />
      </div>
    </section>
  );
}
