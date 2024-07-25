"use client";

import { Alert, AlertDescription } from "@/ui/atoms/alert";
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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

const formSchema = z.object({
  oldPassword: z.string(),
  newPassword: z.string(),
  confirmNewPassword: z.string(),
});

export default function EditPasswordForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true);
    wait().then(() => {
      setIsLoading(false);
      toast.success("Berhasil Memperbarui password");
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
          name="oldPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password Lama</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Pasword lama"
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
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password Baru</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Password baru"
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
          name="confirmNewPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Konfirmasi Password Baru</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Konfirmasi password baru"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
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
