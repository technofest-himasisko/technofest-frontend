"use client";

import { Button } from "@/ui/atoms/button";
import { Card } from "@/ui/atoms/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/atoms/form";
import { Input } from "@/ui/atoms/input";
import { Separator } from "@/ui/atoms/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
  name: z.string(),
  whatsapp: z.string(),
  address: z.string(),
  items: z.string(),
  paymentProof: z.string(),
});

export default function MerchandiseOrderForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      items: "",
      paymentProof: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <section className="container mt-10">
      <Card>
        <h2 className="text-xl font-semibold md:text-2xl">Form Pre-Order</h2>
        <p className="text-xs text-slate-100/50 md:text-base">
          Pre-Order Merchandise Technofest 2024
        </p>
        <p className="text-xs text-slate-100/50 md:text-base">
          Pemesanan 14 Agustus - 6 September
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-8 flex max-w-xl flex-col gap-y-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="uwu@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="whatsapp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nomor WhatsApp</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="uwu@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alamat (Opsional)</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="uwu@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <FormLabel>Pesanan</FormLabel>
              <FormDescription className="mt-0.5">
                Silakan pilih merchandise di atas.
              </FormDescription>
              <div className="mt-2 space-y-2 border border-primary/20 bg-primary/10 p-4 text-sm md:text-base">
                <div className="flex items-start justify-between gap-x-3">
                  <p>Gantungan Kunci Acrylic: Lady Tifa</p>
                  <p className="font-semibold text-primary">4x</p>
                </div>
                <div className="flex items-start justify-between gap-x-3">
                  <p>Gantungan Kunci Acrylic: Lady Tifa</p>
                  <p className="font-semibold text-primary">4x</p>
                </div>
                <div className="flex items-start justify-between gap-x-3">
                  <p>Gantungan Kunci Acrylic: Lady Tifa</p>
                  <p className="font-semibold text-primary">4x</p>
                </div>
                <Separator className="my-3" />
                <div className="flex flex-col items-end">
                  <FormLabel>Total</FormLabel>
                  <p className="text-xl font-semibold text-primary md:text-4xl">
                    Rp40.000
                  </p>
                </div>
              </div>
            </div>

            <FormField
              control={form.control}
              name="paymentProof"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bukti pembayaran</FormLabel>
                  <FormControl>
                    <Input type="file" placeholder="uwu@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="mt-4 w-full md:w-auto">
              Pesan
            </Button>
          </form>
        </Form>
      </Card>
    </section>
  );
}
