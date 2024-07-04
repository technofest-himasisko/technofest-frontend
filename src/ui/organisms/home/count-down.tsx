"use client";

import useCountdown from "@/lib/hooks/use-countdown";
import { cn } from "@/lib/utils";

export default function HomeCountDown() {
  const { countdownString } = useCountdown(new Date(2024, 7, 5));

  return (
    <section className="container mt-40">
      <div className="mx-auto flex flex-col items-center text-center">
        <p className="text-xl uppercase text-primary">Pembukaan Pendaftaran</p>
        <p className={cn("text-6xl font-extrabold")}>{countdownString}</p>
      </div>
    </section>
  );
}
