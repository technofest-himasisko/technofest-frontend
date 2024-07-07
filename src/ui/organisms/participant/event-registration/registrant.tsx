"use client";

import { Alert, AlertDescription } from "@/ui/atoms/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/atoms/avatar";
import { Badge } from "@/ui/atoms/badge";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/atoms/form";
import { FormButton } from "@/ui/atoms/form-button";
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

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

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

  const [isEditingTeamNameLoading, setIsEditingTeamNameLoading] =
    useState<boolean>(false);

  const [isAddingParticipantLoading, setIsAddingParticipantLoading] =
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
    setIsEditingTeamNameLoading(true);
    wait().then(() => {
      setIsEditingTeamName(false);
      setIsEditingTeamNameLoading(false);
    });
  }

  function onParticipantFormSubmit(
    values: z.infer<typeof participantFormSchema>,
  ) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    setIsAddingParticipantLoading(true);
    wait().then(() => {
      participantForm.reset();
      setIsAddingParticipant(false);
      setIsAddingParticipantLoading(false);
    });
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
          {!isEditingTeamName && (
            <div className="flex space-x-2">
              <p className="text-2xl font-semibold text-primary">Margarin</p>

              <div className="flex">
                <FormButton
                  onClick={handleEditTeamNameClick}
                  className="h-full px-2.5 md:px-4"
                >
                  <PencilSimple weight="bold" className="text-[1.5em]" />
                </FormButton>
              </div>
            </div>
          )}

          {isEditingTeamName && (
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
                            disabled={isEditingTeamNameLoading}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex">
                  <FormButton
                    loading={isEditingTeamNameLoading}
                    size="icon"
                    type="submit"
                    className="h-full px-2.5 md:px-4"
                  >
                    <Check weight="bold" className="text-[1.5em]" />
                  </FormButton>
                  <FormButton
                    onClick={handleCancelEditTeamNameClick}
                    disabled={isEditingTeamNameLoading}
                    size="icon"
                    variant="outline"
                    className="h-full px-2.5 md:px-4"
                  >
                    <X weight="bold" className="text-[1.5em]" />
                  </FormButton>
                </div>
              </form>
            </Form>
          )}
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
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="xxxxxxxx"
                                  leftSection="P"
                                  {...field}
                                />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <Alert variant="danger">
                      <AlertDescription>
                        Peserta tidak ditemukan.
                      </AlertDescription>
                    </Alert>
                    <div className="flex justify-end">
                      <div className="flex">
                        <FormButton
                          type="submit"
                          className="px-2.5 py-1.5 md:px-4"
                          loading={isAddingParticipantLoading}
                        >
                          <Check weight="bold" className="text-[1.5em]" />
                        </FormButton>
                        <FormButton
                          variant="outline"
                          onClick={handleCancelAddParticipantClick}
                          disabled={isAddingParticipantLoading}
                          className="border border-primary/20 px-2.5 py-1.5 md:px-4"
                        >
                          <X weight="bold" className="text-[1.5em]" />
                        </FormButton>
                      </div>
                    </div>
                  </form>
                </Form>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10">
          <FormButton type="submit" className="w-full space-x-1 md:w-auto">
            <CheckCircle weight="duotone" className="text-[1.5em]" />
            <span>Konfirmasi</span>
          </FormButton>
        </div>
      </div>
    </section>
  );
}
