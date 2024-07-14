import { getSession } from "@/lib/utils/common";
import { Card } from "@/ui/atoms/card";
import DeleteAccountForm from "@/ui/forms/delete-account-form";
import { Suspense } from "react";

export default async function ParticipantSettingAccount() {
  const session = await getSession();

  return (
    <section className="container">
      <Suspense fallback={<p className="text-xl text-white">Loading...</p>}>
        <Card className="mt-4">
          <p className="mb-8 text-2xl font-semibold">Akun</p>
          <DeleteAccountForm email={session.user?.email!} />
        </Card>
      </Suspense>
    </section>
  );
}
