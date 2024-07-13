"use client";

import useCountdown from "@/lib/hooks/use-countdown";
import { cn } from "@/lib/utils/common";
import Reveal from "@/ui/atoms/reveal";

export default function EventCountdown() {
  const { countdownString } = useCountdown(new Date(2024, 7, 5));

  return (
    <section id="countdown" className="container">
      <div className="mx-auto flex flex-col items-center text-center">
        <Reveal>
          <p className="uppercase text-primary md:text-xl">
            Pembukaan Pendaftaran
          </p>
        </Reveal>
        <Reveal>
          <p className={cn("text-4xl font-extrabold md:text-6xl")}>
            {countdownString}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
