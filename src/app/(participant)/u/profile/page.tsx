import { Card } from "@/ui/atoms/card";
import CommonPageContainer from "@/ui/molecules/common-page-container";
import ParticipantProfileHeader from "@/ui/organisms/participant/profile/header";
import ParticipantProfilePasswordForm from "@/ui/organisms/participant/profile/password-form";
import ParticipantProfileProfileForm from "@/ui/organisms/participant/profile/profile-form";
import { Suspense } from "react";

export default function Page() {
  return (
    <CommonPageContainer>
      <Suspense fallback={<p className="text-xl text-white">Loading...</p>}>
        <ParticipantProfileHeader />
      </Suspense>

      <section className="container">
        <Suspense fallback={<p className="text-xl text-white">Loading...</p>}>
          <Card>
            <p className="mb-8 text-2xl font-semibold">Informasi Peserta</p>
            <ParticipantProfileProfileForm />
          </Card>
        </Suspense>

        <Suspense fallback={<p className="text-xl text-white">Loading...</p>}>
          <Card className="mt-4">
            <p className="mb-8 text-2xl font-semibold">Ubah Password</p>
            <ParticipantProfilePasswordForm />
          </Card>
        </Suspense>
      </section>
    </CommonPageContainer>
  );
}
