"use client";

import { DialogFooter } from "../atoms/dialog";
import React from "react";
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

const wait = () => new Promise((resolve) => setTimeout(resolve, 4000));

interface Props {
  onFormOpen?: (isOpened: boolean) => void;
}

export default function RegisterEventForm({ onFormOpen }: Props) {
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
      onFormOpen && onFormOpen(false);
      setIsLoading(false);
      router.push("/u/events/uiux/registration");
    });
  }

  function resetForm() {
    form.resetField("teamName");
    form.resetField("eventRegistrationId");
  }

  return (
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
                          Buat pendaftaran baru, Anda akan menjadi ketua tim.
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
                        <p className="text-lg font-semibold">Gabung tim</p>
                        <p className="text-sm text-white/40">
                          Masuk ke pendaftaran yang sudah ada dengan memasukkan
                          ID pendaftaran.
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
  );
}
