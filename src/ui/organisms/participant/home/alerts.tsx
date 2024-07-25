import { auth } from "@/lib/auth/auth";
import { Alert, AlertDescription } from "@/ui/atoms/alert";
import { Session } from "next-auth";
import Link from "next/link";

export default async function ParticipantHomeAlerts() {
  const session = (await auth()) as Session;

  if (session.user?.user_profile) {
    return undefined;
  }

  return (
    <section className="container mt-4 max-w-2xl">
      <Alert variant="warning">
        <AlertDescription>
          Haloo, Silakan lengkapi{" "}
          <Link href="/u/setting#profile" className="font-bold hover:underline">
            informasi peserta
          </Link>{" "}
          sebelum mengikuti event Technology Festival yaa!
        </AlertDescription>
      </Alert>
    </section>
  );
}
