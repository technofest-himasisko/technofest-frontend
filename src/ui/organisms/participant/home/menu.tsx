import { Button } from "@/ui/atoms/button";
import { Card } from "@/ui/atoms/card";
import { IdentificationCard, Ticket } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function ParticipantHomeMenu() {
  return (
    <section className="container mt-20 max-w-2xl">
      <Card className="flex flex-col items-center gap-y-4 md:flex-row md:gap-x-10 md:gap-y-0">
        <h2 className="text-2xl font-semibold">Menu</h2>
        <div className="flex w-full flex-col gap-y-2 md:grow md:flex-row md:justify-end md:gap-x-4 md:gap-y-0">
          <Button asChild size="lg" className="space-x-1">
            <Link href="/u/events">
              <Ticket weight="duotone" className="text-[1.5em]" />
              <span>Daftar Events</span>
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="space-x-1">
            <Link href="/u/profile">
              <IdentificationCard weight="duotone" className="text-[1.5em]" />
              <span>Ubah Profile</span>
            </Link>
          </Button>
        </div>
      </Card>
    </section>
  );
}
