"use client";

import useCopy from "@/lib/hooks/use-copy";
import { Alert, AlertDescription, AlertTitle } from "@/ui/atoms/alert";
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
import { Copy, UploadSimple } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  paymentProof: z.string(),
});

export default function ParticipantEventRegistrationPayment() {
  const { copyToClipboard } = useCopy();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentProof: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  function handleCopyClick() {
    copyToClipboard("081367436851");
  }

  return (
    <section className="container mt-6 md:mt-10">
      <div className="inline-block bg-primary/10 px-4 py-2 md:ml-10">
        <h2 className="text-sm font-semibold text-primary md:text-lg">
          Pembayaran
        </h2>
      </div>
      <div className="bg-slate-900 p-4 shadow-lg md:p-6">
        <div className="max-w-xl space-y-4">
          <Alert variant="warning">
            <AlertTitle>Perhatian!</AlertTitle>
            <AlertDescription>
              Silakan konfirmasi tim sebelum melakukan pembayaran.
            </AlertDescription>
          </Alert>

          <div>
            <p>
              Pembayaran sebesar{" "}
              <span className="font-semibold text-primary">Rp4.000.000,00</span>
            </p>
          </div>

          <div className="flex flex-col items-start gap-y-1">
            <div className="flex items-center gap-x-2">
              <span className="bg-brand-dana px-2 font-medium">Dana</span>
              <span className="font-semibold">082121222</span>
              <span className="text-slate-100/50">a.n. Marzuki</span>
              <button
                onClick={handleCopyClick}
                className="px-4 py-2 text-primary transition-colors hover:bg-primary/20"
              >
                <Copy />
              </button>
            </div>

            <div className="flex items-center gap-x-2">
              <span className="bg-brand-bni px-2 font-medium">BNI</span>
              <span className="font-semibold">082121222</span>
              <span className="text-slate-100/50">a.n. Marzuki</span>
              <button
                onClick={handleCopyClick}
                className="px-4 py-2 text-primary transition-colors hover:bg-primary/20"
              >
                <Copy />
              </button>
            </div>
          </div>

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

              <div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center space-x-1 bg-primary/20 px-2.5 py-2 text-center font-semibold text-primary hover:bg-primary/30 md:w-auto md:px-4"
                >
                  <UploadSimple weight="duotone" className="text-[1.5em]" />
                  <span>Unggah</span>
                </button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
