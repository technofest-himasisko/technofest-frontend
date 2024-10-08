import { userGetCurrent } from "@/lib/fetch/v2";
import { Card } from "@/ui/atoms/card";
import EditProfileForm from "@/ui/forms/edit-profile-form";

export default async function ParticipantSettingProfileForm() {
  const response = await userGetCurrent(["userProfile"]);

  return (
    <section id="profile" className="container">
      <Card>
        <div className="max-w-xl">
          <p className="mb-8 text-2xl font-semibold">Informasi Peserta</p>
          <EditProfileForm user={response.data} />
        </div>
      </Card>
    </section>
  );
}
