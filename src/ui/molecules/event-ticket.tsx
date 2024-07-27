import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../atoms/avatar";
import { Button } from "../atoms/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../atoms/tooltip";
import { Badge } from "../atoms/badge";
import { cn, tw } from "@/lib/utils/common";
import { cva, type VariantProps } from "class-variance-authority";
import { AvatarMedia } from "@/lib/definitions/web";

const eventTicketVariant = cva(
  tw`flex items-center justify-between bg-gradient-to-r from-50% to-primary/5 px-4 py-2`,
  {
    variants: {
      color: {
        lime: tw`from-lime-500/5 text-lime-500`,
        teal: tw`from-teal-500/5 text-teal-500`,
        purple: tw`from-purple-500/5 text-purple-500`,
        amber: tw`from-amber-500/5 text-amber-500`,
      },
    },
    defaultVariants: {
      color: "lime",
    },
  },
);

interface Props extends VariantProps<typeof eventTicketVariant> {
  eventRegistration: {
    name: string;
    codename: string;
    uid: string;
    status: {
      label: string;
      color: "green" | "blue" | "yellow" | "red";
    };
    userImages: AvatarMedia[];
  };
}

export default function EventTicket({ eventRegistration, color }: Props) {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="bg-slate-900 shadow-lg">
        <div className={cn(eventTicketVariant({ color }))}>
          <h3 className="text-lg font-bold md:text-xl">
            {eventRegistration.name}
          </h3>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="text-lg font-bold text-slate-100/70 hover:text-slate-100/80 md:text-xl">
                {eventRegistration.uid}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy UID</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="p-3">
          <div className="flex gap-x-6">
            <div className="space-x-1 text-sm text-slate-100/50">
              <span className="hidden md:inline">Status:</span>
              <Badge variant={eventRegistration.status.color}>
                {eventRegistration.status.label}
              </Badge>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex -space-x-1 overflow-hidden">
              {eventRegistration.userImages.map((image, key) => (
                <Avatar key={key} className="size-6 ring ring-slate-900">
                  <AvatarImage src={image.src} alt={image.alt} />
                  <AvatarFallback>{image.fallback}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <Button asChild variant="ghost" size="sm">
              <Link
                href={`/u/events/${eventRegistration.codename}/registration`}
              >
                Detail
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
