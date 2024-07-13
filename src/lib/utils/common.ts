import { clsx, type ClassValue } from "clsx";
import { Session } from "next-auth";
import { twMerge } from "tailwind-merge";
import { auth } from "@/lib/auth/auth";

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
    .join("");
}

export async function getSession(): Promise<Session> {
  return (await auth()) as Session;
}

export async function getServerSanctumToken(): Promise<string | undefined> {
  const { cookies } = await import("next/headers");
  return cookies().get("sanctum-token")?.value;
}
