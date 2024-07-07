"use client";

import Link from "next/link";
import { Button } from "../atoms/button";
import { Badge } from "../atoms/badge";
import { cn, tw } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../atoms/dialog";
import React, { useEffect } from "react";
import { FormButton } from "../atoms/form-button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../atoms/form";
import { RadioGroup, RadioGroupItem } from "../atoms/radio-group";
import { Input } from "../atoms/input";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  type: z.enum(["new", "join"], {
    required_error: "You need to select a notification type.",
  }),
  teamName: z.string(),
  eventRegistrationId: z.string(),
});

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

const wait = () => new Promise((resolve) => setTimeout(resolve, 4000));

export default function EventItem({ event, color }: Props) {
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      type: "new",
      teamName: "",
      eventRegistrationId: "",
    },
  });

  const router = useRouter();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    wait().then(() => {
      setIsRegisterDialogOpen(false);
      setIsLoading(false);
      router.push("/u/events/uiux/registration");
    });
  }

  function resetForm() {
    form.resetField("teamName");
    form.resetField("eventRegistrationId");
  }

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
              <p className="text-sm text-slate-100/50">Jenis: {event.type}</p>
              <p className="text-sm text-slate-100/50">
                Biaya: Rp{event.price}
              </p>
            </div>
          </div>
          <div className="mt-4 flex justify-end gap-x-2 md:mt-0">
            <FormButton asChild variant="ghost">
              <Link href={`/u/events/${event.codename}/registration`}>
                Info
              </Link>
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

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={(value) => {
                          field.onChange(value);
                          resetForm();
                        }}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                        id="radio-group"
                      >
                        <FormItem>
                          <label
                            htmlFor="new"
                            className="group flex cursor-pointer flex-row items-center gap-x-8 border border-slate-500/20 bg-slate-500/10 p-4 has-[:checked]:border-primary/70 has-[:checked]:bg-primary/10 has-[:checked]:text-primary"
                          >
                            <div className="grow">
                              <p className="text-lg font-semibold">Buat baru</p>
                              <p className="text-sm text-white/40">
                                Buat pendaftaran baru, Anda akan menjadi ketua
                                tim.
                              </p>
                              <FormField
                                control={form.control}
                                name="eventRegistrationId"
                                render={({ field }) => (
                                  <FormItem className="mt-2 hidden group-has-[:checked]:block">
                                    <div className="flex">
                                      <FormControl>
                                        <Input
                                          type="text"
                                          placeholder="ID pendaftaran"
                                          className="text-slate-100"
                                          {...field}
                                        />
                                      </FormControl>
                                    </div>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <FormControl className="flex-none">
                              <RadioGroupItem
                                className="size-6"
                                value="new"
                                id="new"
                              />
                            </FormControl>
                          </label>
                        </FormItem>

                        <FormItem>
                          <label
                            htmlFor="join"
                            className="group flex cursor-pointer flex-row items-center gap-x-8 border border-slate-500/20 bg-slate-500/10 p-4 has-[:checked]:border-primary/70 has-[:checked]:bg-primary/10 has-[:checked]:text-primary"
                          >
                            <div className="grow">
                              <p className="text-lg font-semibold">
                                Gabung tim
                              </p>
                              <p className="text-sm text-white/40">
                                Masuk ke pendaftaran yang sudah ada dengan
                                memasukkan ID pendaftaran.
                              </p>
                              <FormField
                                control={form.control}
                                name="teamName"
                                render={({ field }) => (
                                  <FormItem className="mt-2 hidden group-has-[:checked]:block">
                                    <div className="flex">
                                      <FormControl>
                                        <Input
                                          type="text"
                                          placeholder="Nama tim"
                                          className="text-slate-100"
                                          {...field}
                                        />
                                      </FormControl>
                                    </div>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <FormControl className="flex-none">
                              <RadioGroupItem
                                className="size-6"
                                value="join"
                                id="join"
                              />
                            </FormControl>
                          </label>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <FormButton loading={isLoading} type="submit">
                  Lanjut
                </FormButton>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
