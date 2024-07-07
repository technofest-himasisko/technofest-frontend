"use client";

import { Alert, AlertDescription, AlertTitle } from "@/ui/atoms/alert";
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
import { UploadSimple } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  submission: z.string(),
});

export default function ParticipantEventRegistrationSubmission() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      submission: "",
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
          Submission
        </h2>
      </div>
      <div className="bg-slate-900 p-4 shadow-lg md:p-6">
        <div className="max-w-xl space-y-4">
          <Alert variant="warning">
            <AlertTitle>Perhatian!</AlertTitle>
            <AlertDescription>
              Silakan unggah bukti pembayaran dan tunggu konfirmasi dari panitia
              sebelum mengumpulkan submission.
            </AlertDescription>
          </Alert>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-4 flex w-full flex-col gap-y-4"
            >
              <div className="grow">
                <FormField
                  control={form.control}
                  name="submission"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Unggah Submission</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          placeholder="Submission"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormButton
                  type="submit"
                  className="w-full space-x-1 md:w-auto"
                >
                  <UploadSimple weight="duotone" className="text-[1.5em]" />
                  <span>Unggah</span>
                </FormButton>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
