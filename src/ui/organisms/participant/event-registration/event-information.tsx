import { cn, tw } from "@/lib/utils";
import { Badge } from "@/ui/atoms/badge";
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
    price: number;
    type: string;
  };
}

export default function ParticipantEventRegistrationEventInformation({
  event,
  color,
}: Props) {
  return (
    <section className="container mt-10">
      <div className="inline-block bg-primary/10 px-4 py-2 md:ml-10">
        <h2 className="text-sm font-semibold text-primary md:text-lg">
          Informasi Event
        </h2>
      </div>
      <div className="flex flex-row bg-slate-900 shadow-lg">
        <div className={cn(eventTicketVariant({ color }), "w-6")} />
        <div className="flex w-full flex-col p-4 md:flex-row md:items-center md:justify-between md:p-6">
          <div>
            <div
              className={cn(eventTicketVariant({ color }), "bg-transparent")}
            >
              <h3 className="text-lg font-bold md:text-2xl">{event.name}</h3>
            </div>
            <div className="flex flex-col md:flex-row md:gap-x-6">
              <p className="text-sm text-slate-100/50">Jenis: {event.type}</p>
              <p className="text-sm text-slate-100/50">
                Biaya: Rp{event.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
