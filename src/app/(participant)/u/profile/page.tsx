import { Card } from "@/ui/atoms/card";
import CommonPageContainer from "@/ui/molecules/common-page-container";
import ParticipantProfileHeader from "@/ui/organisms/participant/profile/header";
import ParticipantProfilePasswordForm from "@/ui/organisms/participant/profile/password-form";
import ParticipantProfileProfileForm from "@/ui/organisms/participant/profile/profile-form";

export default function Page() {
  return (
    <CommonPageContainer>
      <ParticipantProfileHeader />

      <section className="container">
        <Card>
          <p className="mb-8 text-2xl font-semibold">Informasi Peserta</p>
          <ParticipantProfileProfileForm />
        </Card>

        <Card className="mt-4">
          <p className="mb-8 text-2xl font-semibold">Ubah Password</p>
          <ParticipantProfilePasswordForm />
        </Card>
      </section>
    </CommonPageContainer>
  );
}
