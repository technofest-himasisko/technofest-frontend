import CommonPageContainer from "@/ui/molecules/common-page-container";
import ParticipantSettingAccount from "@/ui/organisms/participant/setting/account";
import ParticipantSettingHeader from "@/ui/organisms/participant/setting/header";
import ParticipantSettingPasswordForm from "@/ui/organisms/participant/setting/password";
import ParticipantSettingProfileForm from "@/ui/organisms/participant/setting/profile";

export default function Page() {
  return (
    <CommonPageContainer>
      <ParticipantSettingHeader />
      <ParticipantSettingProfileForm />
      <ParticipantSettingPasswordForm />
      <ParticipantSettingAccount />
    </CommonPageContainer>
  );
}
