"use client";

import useCountdown from "@/lib/hooks/use-countdown";
import { cn } from "@/lib/utils";

export default function HomeCountDown() {
  const { countdownString } = useCountdown(new Date(2024, 7, 5));

  return (
    <section className="container mt-20 md:mt-40">
      <div className="mx-auto flex flex-col items-center text-center">
        <p className="uppercase text-primary md:text-xl">
          Pembukaan Pendaftaran
        </p>
        <p className={cn("text-4xl font-extrabold md:text-6xl")}>
          {countdownString}
        </p>
      </div>
    </section>
  );
}
