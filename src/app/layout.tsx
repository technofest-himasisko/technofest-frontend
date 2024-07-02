import type { Metadata } from "next";
import "@/ui/globals.css";
import { goodTimes } from "@/ui/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Technofest 2024",
  description:
    "Technofest 2024 - Coming Soon! Selamat datang di Technofest 2024, acara teknologi paling ditunggu-tunggu tahun ini!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(goodTimes.className, "overflow-hidden")}>
        {children}
      </body>
    </html>
  );
}
