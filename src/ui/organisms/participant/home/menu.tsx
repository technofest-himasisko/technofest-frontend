import { auth } from "@/lib/auth/auth";
import { Button } from "@/ui/atoms/button";
import { Card } from "@/ui/atoms/card";
import { GearSix, Ticket } from "@phosphor-icons/react/dist/ssr";
import { Session } from "next-auth";
import Link from "next/link";
import { Suspense } from "react";

export default async function ParticipantHomeMenu() {
  const session = (await auth()) as Session;

  return (
    <Suspense fallback={<p className="text-xl text-white">Loading...</p>}>
      <section className="container mt-20 max-w-2xl">
        <Card className="flex flex-col items-center gap-y-4 md:flex-row md:gap-x-10 md:gap-y-0">
          <h2 className="text-2xl font-semibold">Menu</h2>
          <div className="flex w-full flex-col gap-y-2 md:grow md:flex-row md:justify-end md:gap-x-4 md:gap-y-0">
            {session.user?.user_profile && (
              <Button asChild className="space-x-1">
                <Link href="/u/events">
                  <Ticket weight="duotone" className="text-[1.5em]" />
                  <span>Daftar Events</span>
                </Link>
              </Button>
            )}
            <Button asChild variant="outline" className="space-x-1">
              <Link href="/u/setting">
                <GearSix weight="duotone" className="text-[1.5em]" />
                <span>Pengaturan</span>
              </Link>
            </Button>
          </div>
        </Card>
      </section>
    </Suspense>
  );
}
