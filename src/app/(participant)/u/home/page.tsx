import { Skeleton } from "@/ui/atoms/skeleton";
import CommonPageContainer from "@/ui/molecules/common-page-container";
import ParticipantHomeAlerts from "@/ui/organisms/participant/home/alerts";
import ParticipantHomeHeader from "@/ui/organisms/participant/home/header";
import ParticipantHomeMenu from "@/ui/organisms/participant/home/menu";
import ParticipantHomeRegistrations from "@/ui/organisms/participant/home/registrations";
import { Suspense } from "react";

export default function Page() {
  return (
    <CommonPageContainer>
      <Suspense fallback={<ParticipantHomeHeaderLoading />}>
        <ParticipantHomeHeader />
      </Suspense>
      <ParticipantHomeAlerts />
      <Suspense fallback={<ParticipantHomeMenuLoading />}>
        <ParticipantHomeMenu />
      </Suspense>
      <Suspense fallback={<ParticipantHomeRegistrationsLoading />}>
        <ParticipantHomeRegistrations />
      </Suspense>
    </CommonPageContainer>
  );
}

function ParticipantHomeHeaderLoading() {
  return (
    <section className="container">
      <Skeleton className="mt-4 h-36 md:mt-10 md:h-40" />
      <Skeleton className="mx-auto mt-10 h-6 max-w-[28ch]" />
      <Skeleton className="mx-auto mt-2 h-6 max-w-[20ch]" />
      <Skeleton className="mx-auto mt-2 h-6 max-w-[20ch]" />
    </section>
  );
}

function ParticipantHomeMenuLoading() {
  return (
    <section className="container mx-auto max-w-2xl">
      <Skeleton className="mt-20 h-36" />
    </section>
  );
}

function ParticipantHomeRegistrationsLoading() {
  return (
    <section className="container mx-auto max-w-2xl">
      <Skeleton className="mt-20 h-36" />
    </section>
  );
}
