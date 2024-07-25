"use client";

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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Alert, AlertDescription } from "../atoms/alert";
import { UploadSimple } from "@phosphor-icons/react";

const formSchema = z.object({
  paymentProof: z.string(),
});

export default function UploadPaymentProofForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentProof: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 flex w-full flex-col gap-y-4"
      >
        <div className="grow">
          <FormField
            control={form.control}
            name="paymentProof"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Unggah bukti pembayaran</FormLabel>
                <FormControl>
                  <Input type="file" placeholder="Nama tim" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Alert variant="danger">
          <AlertDescription>Pengunggahan gagal dilakukan.</AlertDescription>
        </Alert>

        <div>
          <FormButton type="submit" className="w-full space-x-1 md:w-auto">
            <UploadSimple
              weight="duotone"
              className="inline-block text-[1.5em]"
            />
            <span>Unggah</span>
          </FormButton>
        </div>
      </form>
    </Form>
  );
}
