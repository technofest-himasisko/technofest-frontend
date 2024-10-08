import { clsx, type ClassValue } from "clsx";
import { Session } from "next-auth";
import { twMerge } from "tailwind-merge";
import { auth } from "@/lib/auth/auth";
import {
  Competition,
  Event,
  EventRegistration,
  Seminar,
} from "@/lib/definitions/technofest";
import {
  EventType,
  PaymentStatus,
  RegistrationStatus,
} from "@/lib/definitions/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const tw = (strings: TemplateStringsArray, ...values: any[]) =>
  String.raw({ raw: strings }, ...values);

export function isComingSoon(): boolean {
  return process.env.NEXT_PUBLIC_COMING_SOON === "true";
}

export function getAvatarCallbackLetter(str: string): string {
  return str
    .split(" ")
    .map((word, index) => (index >= 2 ? "" : word.charAt(0)))
    .join("")
    .toUpperCase();
}

export async function getSession(): Promise<Session> {
  return (await auth()) as Session;
}

export async function getServerSanctumToken(): Promise<string | undefined> {
  const { cookies } = await import("next/headers");
  return cookies().get("sanctum-token")?.value;
}

export function toParticipantId(str: string): string {
  return `U-${str}`;
}

export function toRegistrationId(str: string): string {
  return `E-${str}`;
}

export function formatToRupiah(amount: number): string {
  if (isNaN(amount)) {
    throw new Error("Invalid number");
  }

  return `Rp${amount.toLocaleString("id-ID")}`;
}

export function generateEventRegistrationStatus(
  registration: EventRegistration,
): RegistrationStatus {
  if (registration.event?.codename === "seminar") {
    return RegistrationStatus.FINISHED;
  }

  if (!registration.confirmed) {
    return RegistrationStatus.PREPARING_TEAM;
  }

  if (
    registration.confirmed &&
    registration.event_registration_payment?.status ===
      PaymentStatus.NOT_CONFIRMED
  ) {
    return RegistrationStatus.PENDING_PAYMENT;
  }

  if (
    registration.event_registration_payment?.status === PaymentStatus.REJECTED
  ) {
    return RegistrationStatus.PAYMENT_REJECTED;
  }

  // if (!registration.submission) {
  //   return RegistrationStatus.PENDING_SUBMISSION;
  // }

  return RegistrationStatus.FINISHED;
}

export function isCompetition(obj: Event<any>): obj is Event<Competition> {
  return obj.eventable_type === EventType.COMPETITION;
}

export function isSeminar(obj: Event<any>): obj is Event<Seminar> {
  return obj.eventable_type === EventType.SEMINAR;
}
