import { ProviderType } from "@/lib/definitions/constants";
import { getSession } from "@/lib/utils/common";
import { Card } from "@/ui/atoms/card";
import EditPasswordForm from "@/ui/forms/edit-password-form";
import { Suspense } from "react";

export default async function ParticipantSettingPassword() {
  const session = await getSession();

  if (session.user?.provider !== ProviderType.CREDENTIALS) {
    return undefined;
  }

  return (
    <section className="container">
      <Card className="mt-4">
        <p className="mb-8 text-2xl font-semibold">Ubah Password</p>
        <EditPasswordForm />
      </Card>
    </section>
  );
}
