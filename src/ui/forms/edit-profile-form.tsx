"use client";

import { Alert, AlertDescription } from "@/ui/atoms/alert";
import { Button } from "@/ui/atoms/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/atoms/form";
import { FormButton } from "@/ui/atoms/form-button";
import { Input } from "@/ui/atoms/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/atoms/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  institution: z.string(),
  gender: z.string(),
  whatsapp: z.string(),
});

export default function EditProfileForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "H. Thoriq",
      email: "slow9ie@gmail.com",
      institution: "",
      gender: "",
      whatsapp: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    setIsLoading(true);
    wait().then(() => {
      setIsLoading(false);
      toast.success("Berhasil Memperbarui profile");
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex max-w-xl flex-col gap-y-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama</FormLabel>
              <FormControl>
                <Input
                  type="name"
                  placeholder="Nama"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" disabled {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="institution"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Asal Institusi</FormLabel>
              <FormControl>
                <Input
                  type="institution"
                  placeholder="Universitas Sriwijaya"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormDescription>Contoh: Universitas Sriwijaya</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Jenis Kelamin</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={isLoading}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih jenis kelamin" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="male">Laki-laki</SelectItem>
                  <SelectItem value="female">Perempuan</SelectItem>
                </SelectContent>
              </Select>
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
                <Input
                  type="whatsapp"
                  placeholder="0821xxxxxxxx"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormDescription>Contoh: 0821xxxxxxxx</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Alert variant="danger">
          <AlertDescription>Terjadi kesalahan.</AlertDescription>
        </Alert>

        <div>
          <FormButton
            loading={isLoading}
            type="submit"
            className="mt-4 w-full md:w-auto"
          >
            Perbarui
          </FormButton>
        </div>
      </form>
    </Form>
  );
}
