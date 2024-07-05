"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/ui/atoms/avatar";
import { Badge } from "@/ui/atoms/badge";
import { Button } from "@/ui/atoms/button";
import { Card } from "@/ui/atoms/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/ui/atoms/form";
import { Input } from "@/ui/atoms/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "@phosphor-icons/react";
import {
  PencilSimple,
  Plus,
  TrashSimple,
  X,
} from "@phosphor-icons/react/dist/ssr";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export default function ParticipantEventRegistrationRegistrant() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-2 flex gap-y-4"
            >
              <div className="grow">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Email"
                          disabled
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit">
                <PencilSimple weight="bold" className="text-[1.5em]" />
              </Button>

              <div className="hidden">
                <Button type="submit">
                  <Check weight="bold" className="text-[1.5em]" />
                </Button>
                <Button type="submit" variant="outline">
                  <X weight="bold" className="text-[1.5em]" />
                </Button>
              </div>
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
                <button className="flex items-center text-xs text-red-500 hover:text-red-500/80 md:px-4 md:text-base">
                  <TrashSimple weight="duotone" className="text-[1.5em]" />
                </button>
              </div>
            </div>

            <button className="flex h-20 flex-col items-center justify-center border border-primary/50 bg-primary/10 p-4 text-sm text-slate-100/50 hover:bg-primary/20 hover:text-slate-100 md:text-base">
              <Plus weight="bold" className="text-2em" />
              <span>Tambah Peserta</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
