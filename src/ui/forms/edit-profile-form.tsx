"use client";

import { FormButton } from "@/ui/atoms/form-button";
import { Input } from "@/ui/atoms/input";
import { Label } from "../atoms/label";
import FormItem from "../atoms/form-item";
import FormMessage from "../atoms/form-message";
import { useFormState } from "react-dom";
import { Alert, AlertDescription } from "../atoms/alert";
import { updateProfile } from "@/lib/actions/update-profile";
import { User } from "@/lib/definitions/technofest";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../atoms/select";
import Link from "next/link";
import { ArrowSquareOut } from "@phosphor-icons/react";
import FormDescription from "../atoms/form-description";
import { useEffect, useRef } from "react";
import { useSession } from "next-auth/react";

interface Props {
  user?: User;
}

export default function EditProfileForm({ user }: Props) {
  const ref = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(updateProfile, null);
  const { update } = useSession();

  if (state?.message) {
    ref.current?.reset();
  }

  useEffect(() => {
    if (state?.message?.type === "success") {
      update({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <form ref={ref} action={formAction} className="flex flex-col gap-y-6">
      <FormItem>
        <Label htmlFor="name">Nama Lengkap</Label>
        <Input
          id="name"
          name="name"
          type="text"
          defaultValue={user?.name}
          placeholder="Nama Lengkap"
        />
        <FormMessage messages={state?.errors?.name} />
      </FormItem>

      <FormItem>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          defaultValue={user?.email}
          disabled
        />
      </FormItem>

      <FormItem>
        <Label htmlFor="institution">Asal Institusi</Label>
        <FormDescription>Contoh: Universitas Sriwijaya</FormDescription>
        <Input
          id="institution"
          name="institution"
          type="text"
          defaultValue={user?.user_profile?.institution}
          placeholder="Asal Institusi"
        />
        <FormMessage messages={state?.errors?.institution} />
      </FormItem>

      <FormItem>
        <Label htmlFor="educationLevel">Status</Label>
        <Select
          name="educationLevel"
          defaultValue={String(
            user?.user_profile?.education_level !== undefined
              ? user?.user_profile?.education_level
              : "",
          )}
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">Siswa</SelectItem>
            <SelectItem value="1">Mahasiswa</SelectItem>
          </SelectContent>
        </Select>
        <FormMessage messages={state?.errors?.educationLevel} />
      </FormItem>

      <FormItem>
        <Label htmlFor="name">NISM/NIM</Label>
        <Input
          id="idNumber"
          name="idNumber"
          type="text"
          defaultValue={user?.user_profile?.id_number}
          placeholder="NISM/NIM"
        />
        <FormMessage messages={state?.errors?.idNumber} />
      </FormItem>

      <FormItem>
        <Label htmlFor="name">Kartu Tanda Siswa/Mahasiswa</Label>
        <FormDescription>
          Ekstensi yang diterima: jpg, jpeg, dan png
        </FormDescription>
        <Input
          id="idCardImage"
          name="idCardImage"
          type="file"
          accept="image/*"
        />
        <input
          type="hidden"
          name="idCardImageUrl"
          defaultValue={user?.user_profile?.id_card_image}
        />
        <FormMessage messages={state?.errors?.idCardImage} />
        {user?.user_profile?.id_card_image && (
          <Link
            href={user?.user_profile?.id_card_image}
            target="_blank"
            className="flex items-center gap-x-1 text-sm text-primary hover:underline"
          >
            <span>Lihat unggahan</span> <ArrowSquareOut />
          </Link>
        )}
      </FormItem>

      <FormItem>
        <Label htmlFor="gender">Jenis Kelamin</Label>
        <Select
          name="gender"
          defaultValue={String(
            user?.user_profile?.gender !== undefined
              ? user?.user_profile?.gender
              : "",
          )}
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih Jenis Kelamin" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">Laki-laki</SelectItem>
            <SelectItem value="1">Perempuan</SelectItem>
          </SelectContent>
        </Select>
        <FormMessage messages={state?.errors?.gender} />
      </FormItem>

      <FormItem>
        <Label htmlFor="whatsapp">WhatsApp</Label>
        <FormDescription>
          Dimulai dari 628, Contoh: 628217726336
        </FormDescription>
        <Input
          id="whatsapp"
          name="whatsapp"
          type="text"
          defaultValue={user?.user_profile?.whatsapp}
          placeholder="WhatsApp"
        />
        <FormMessage messages={state?.errors?.whatsapp} />
      </FormItem>

      <FormItem>
        <Label htmlFor="instagram">Instagram (opsional)</Label>
        <Input
          id="instagram"
          name="instagram"
          type="text"
          defaultValue={user?.user_profile?.instagram}
          placeholder="Instagram"
        />
        <FormMessage messages={state?.errors?.instagram} />
      </FormItem>

      {state?.message && (
        <Alert variant={state?.message?.type || "info"}>
          <AlertDescription>{state?.message?.text}</AlertDescription>
        </Alert>
      )}

      <FormButton type="submit" className="mt-4 w-full md:w-fit">
        Perbarui
      </FormButton>
    </form>
  );
}
