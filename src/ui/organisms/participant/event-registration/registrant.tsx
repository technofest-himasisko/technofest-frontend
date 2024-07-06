"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/ui/atoms/avatar";
import { Badge } from "@/ui/atoms/badge";
import { Button } from "@/ui/atoms/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/atoms/form";
import { Input } from "@/ui/atoms/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, CheckCircle } from "@phosphor-icons/react";
import {
  PencilSimple,
  Plus,
  TrashSimple,
  X,
} from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const teamFormSchema = z.object({
  teamName: z.string(),
});

const participantFormSchema = z.object({
  participantId: z.string(),
});

export default function ParticipantEventRegistrationRegistrant() {
  const [isEditingTeamName, setIsEditingTeamName] = useState<boolean>(false);
  const [isAddingParticipant, setIsAddingParticipant] =
    useState<boolean>(false);

  const teamForm = useForm<z.infer<typeof teamFormSchema>>({
    resolver: zodResolver(teamFormSchema),
    defaultValues: {
      teamName: "",
    },
  });

  const participantForm = useForm<z.infer<typeof participantFormSchema>>({
    resolver: zodResolver(participantFormSchema),
    defaultValues: {
      participantId: "",
    },
  });

  function onTeamFormSubmit(values: z.infer<typeof teamFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  function onParticipantFormSubmit(
    values: z.infer<typeof participantFormSchema>,
  ) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  function handleEditTeamNameClick() {
    setIsEditingTeamName(true);
  }

  function handleCancelEditTeamNameClick() {
    setIsEditingTeamName(false);
    teamForm.reset();
  }

  function handleAddParticipantClick() {
    setIsAddingParticipant(true);
  }

  function handleCancelAddParticipantClick() {
    setIsAddingParticipant(false);
    participantForm.reset();
  }

  return (
    <section className="container mt-6 md:mt-10">
      <div className="inline-block bg-primary/10 px-4 py-2 md:ml-10">
        <h2 className="text-sm font-semibold text-primary md:text-lg">
          Informasi Tim
        </h2>
      </div>
      <div className="bg-slate-900 p-4 shadow-lg md:p-6">
        <div className="max-w-xl">
          <h3 className="text-lg font-semibold">Nama Tim</h3>
          <Form {...teamForm}>
            <form
              onSubmit={teamForm.handleSubmit(onTeamFormSubmit)}
              className="mt-2 flex"
            >
              <div className="grow">
                <FormField
                  control={teamForm.control}
                  name="teamName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Nama tim"
                          disabled={!isEditingTeamName}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {!isEditingTeamName && (
                <button
                  onClick={handleEditTeamNameClick}
                  className="bg-primary/20 px-2.5 text-primary hover:bg-primary/30 md:px-4"
                >
                  <PencilSimple weight="bold" className="text-[1.5em]" />
                </button>
              )}

              {isEditingTeamName && (
                <div className="flex">
                  <button
                    type="submit"
                    className="bg-primary/20 px-2.5 text-primary hover:bg-primary/30 md:px-4"
                  >
                    <Check weight="bold" className="text-[1.5em]" />
                  </button>
                  <button
                    onClick={handleCancelEditTeamNameClick}
                    className="border border-primary/20 px-2.5 text-primary hover:bg-primary/30 md:px-4"
                  >
                    <X weight="bold" className="text-[1.5em]" />
                  </button>
                </div>
              )}
            </form>
          </Form>
        </div>

        <div className="mt-6 max-w-xl">
          <h3 className="text-lg font-semibold">Peserta</h3>
          <div className="mt-2 flex flex-col gap-y-2">
            <div className="flex items-center gap-x-4 border border-primary/50 bg-primary/10 p-4">
              <Avatar className="size-10">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="grow">
                <div className="flex items-center gap-x-1">
                  <p className="font-semibold md:text-lg">H. Gede</p>
                  <Badge variant="yellow">Ketua tim</Badge>
                </div>
                <div className="-mt-1 flex gap-x-4 text-xs text-slate-100/50 md:text-sm">
                  <p>U-112192</p>
                  <p className="hidden md:block">slow9ie@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-x-4 border border-primary/50 bg-primary/10 p-4">
              <Avatar className="size-10">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="grow">
                <div className="flex items-center gap-x-1">
                  <p className="font-semibold md:text-lg">H. Gede</p>
                </div>
                <div className="-mt-1 flex gap-x-4 text-xs text-slate-100/50 md:text-sm">
                  <p>U-112192</p>
                  <p className="hidden md:block">slow9ie@gmail.com</p>{" "}
                </div>
              </div>
              <div>
                <button className="flex items-center text-base text-red-500 hover:text-red-500/80 md:px-4">
                  <TrashSimple weight="duotone" className="text-[1.5em]" />
                </button>
              </div>
            </div>

            {!isAddingParticipant && (
              <button
                onClick={handleAddParticipantClick}
                className="flex h-20 flex-col items-center justify-center border border-primary/50 bg-primary/10 p-4 text-sm text-slate-100/50 hover:bg-primary/20 hover:text-slate-100 md:text-base"
              >
                <Plus weight="bold" className="text-2em" />
                <span>Tambah Peserta</span>
              </button>
            )}

            {isAddingParticipant && (
              <div className="flex items-center gap-x-4 border border-primary/50 bg-primary/10 p-4">
                <Form {...participantForm}>
                  <form
                    onSubmit={participantForm.handleSubmit(
                      onParticipantFormSubmit,
                    )}
                    className="mt-2 flex w-full flex-col gap-y-4"
                  >
                    <div className="grow">
                      <FormField
                        control={participantForm.control}
                        name="participantId"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Masukkan ID peserta</FormLabel>
                            <div className="flex">
                              <div className="flex w-14 items-center justify-center bg-primary/20 font-semibold">
                                U
                              </div>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="xxxxxxxx"
                                  {...field}
                                />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex justify-end">
                      <div className="flex">
                        <button
                          type="submit"
                          className="bg-primary/20 px-2.5 py-2 text-primary hover:bg-primary/30 md:px-4"
                        >
                          <Check weight="bold" className="text-[1.5em]" />
                        </button>
                        <button
                          onClick={handleCancelAddParticipantClick}
                          className="border border-primary/20 px-2.5 py-2 text-primary hover:bg-primary/30 md:px-4"
                        >
                          <X weight="bold" className="text-[1.5em]" />
                        </button>
                      </div>
                    </div>
                  </form>
                </Form>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="flex w-full items-center justify-center space-x-1 bg-primary/20 px-2.5 py-2 text-center font-semibold text-primary hover:bg-primary/30 md:w-auto md:px-4"
          >
            <CheckCircle weight="duotone" className="text-[1.5em]" />
            <span>Konfirmasi</span>
          </button>
        </div>
      </div>
    </section>
  );
}
