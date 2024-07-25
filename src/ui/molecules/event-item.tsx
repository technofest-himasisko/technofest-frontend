"use client";

import Link from "next/link";
import { Badge } from "../atoms/badge";
import { cn, tw } from "@/lib/utils/common";
import { cva, type VariantProps } from "class-variance-authority";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../atoms/dialog";
import React from "react";
import { FormButton } from "../atoms/form-button";
import RegisterEventForm from "../forms/register-event-form";

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
    price: number | undefined;
    type: string;
    isRegistered: boolean;
  };
}

export default function EventItem({ event, color }: Props) {
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = React.useState(false);

  return (
    <>
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
              <p className="text-sm text-slate-100/50">
                Kategori: {event.type}
              </p>
              <p className="text-sm text-slate-100/50">
                Biaya:{" "}
                {!event.price || event.price === 0
                  ? "Gratis"
                  : `Rp${event.price}`}
              </p>
            </div>
          </div>
          <div className="mt-4 flex justify-end gap-x-2 md:mt-0">
            <FormButton asChild variant="outline">
              <Link href={`/events/${event.codename}`}>Info</Link>
            </FormButton>
            {event.isRegistered ? (
              <FormButton asChild variant="green">
                <Link href={`/u/events/${event.codename}/registration`}>
                  Detail
                </Link>
              </FormButton>
            ) : (
              <FormButton onClick={() => setIsRegisterDialogOpen(true)}>
                Ikuti
              </FormButton>
            )}
          </div>
        </div>
      </div>

      <Dialog
        open={isRegisterDialogOpen}
        onOpenChange={setIsRegisterDialogOpen}
      >
        <DialogContent aria-describedby="">
          <DialogHeader>
            <DialogTitle>Daftar Event</DialogTitle>
          </DialogHeader>

          <RegisterEventForm onFormOpen={setIsRegisterDialogOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
}
