import Link from "next/link";
import { Button } from "../atoms/button";
import { Badge } from "../atoms/badge";
import { cn, tw } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const eventTicketVariant = cva(tw``, {
  variants: {
    color: {
      lime: tw`bg-lime-500/20 text-lime-500`,
      teal: tw`bg-teal-500/20 text-teal-500`,
      purple: tw`bg-purple-500/20 text-purple-500`,
      amber: tw`bg-amber-500/20 text-amber-500`,
    },
  },
  defaultVariants: {
    color: "lime",
  },
});

interface Props extends VariantProps<typeof eventTicketVariant> {
  event: {
    name: string;
    codename: string;
    price: number;
    type: string;
    isRegistered: boolean;
  };
}

export default function EventItem({ event, color }: Props) {
  return (
    <div className="flex flex-row bg-slate-900 shadow-lg">
      <div className={cn(eventTicketVariant({ color }), "w-6")} />
      <div className="flex w-full flex-col p-4 md:flex-row md:items-center md:justify-between md:p-6">
        <div>
          <div
            className={cn(
              eventTicketVariant({ color }),
              "flex items-start gap-x-1 bg-transparent",
            )}
          >
            <h3 className="text-lg font-bold md:text-2xl">{event.name}</h3>
            {event.isRegistered && <Badge variant="blue">Diikuti</Badge>}
          </div>
          <div className="flex flex-col md:flex-row md:gap-x-6">
            <p className="text-sm text-slate-100/50">Jenis: {event.type}</p>
            <p className="text-sm text-slate-100/50">Biaya: Rp{event.price}</p>
          </div>
        </div>
        <div className="mt-2 flex justify-end gap-x-2 md:mt-0">
          <Button asChild variant="ghost">
            <Link href={`/u/events/${event.codename}/registration`}>Info</Link>
          </Button>
          {event.isRegistered ? (
            <Button asChild variant="outline">
              <Link href={`/u/events/${event.codename}/registration`}>
                Detail
              </Link>
            </Button>
          ) : (
            <Button asChild>
              <Link href={`/u/events/${event.codename}/registration`}>
                Ikuti
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
