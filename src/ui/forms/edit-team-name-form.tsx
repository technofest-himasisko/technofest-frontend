"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/ui/atoms/form";
import { FormButton } from "@/ui/atoms/form-button";
import { Input } from "@/ui/atoms/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "@phosphor-icons/react";
import { X } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const teamFormSchema = z.object({
  teamName: z.string(),
});

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

interface Props {
  onFormOpen?: (isOpened: boolean) => void;
}

export default function EditTeamNameFormForm({ onFormOpen }: Props) {
  const [isEditingTeamNameLoading, setIsEditingTeamNameLoading] =
    useState<boolean>(false);

  const teamForm = useForm<z.infer<typeof teamFormSchema>>({
    resolver: zodResolver(teamFormSchema),
    defaultValues: {
      teamName: "",
    },
  });

  function onTeamFormSubmit(values: z.infer<typeof teamFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsEditingTeamNameLoading(true);
    wait().then(() => {
      onFormOpen && onFormOpen(false);
      setIsEditingTeamNameLoading(false);
    });
  }

  function handleCancelEditTeamNameClick() {
    onFormOpen && onFormOpen(false);
    teamForm.reset();
  }

  return (
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
  );
}
