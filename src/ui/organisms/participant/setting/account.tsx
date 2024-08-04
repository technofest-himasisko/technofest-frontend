import { getSession } from "@/lib/utils/common";
import { Card } from "@/ui/atoms/card";
import DeleteAccountForm from "@/ui/forms/delete-account-form";

export default async function ParticipantSettingAccount() {
  const session = await getSession();

  return (
    <section className="container">
      <Card className="mt-4">
        <p className="mb-8 text-2xl font-semibold">Akun</p>
        <DeleteAccountForm email={session.user?.email!} />
      </Card>
    </section>
  );
}
