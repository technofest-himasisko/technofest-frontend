"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils/common";
import { extatica, goodTimes } from "@/ui/fonts";
import useCountdown from "@/lib/hooks/use-countdown";

export default function ComingSoon() {
  const [direction, setDirection] = useState<number>(0);
  const { countdownString } = useCountdown(new Date(2024, 7, 1));

  const handleDirectionChange = () => {
    setTimeout(
      () => {
        const newDirection = Math.floor(Math.random() * 360);
        setDirection(newDirection);
      },
      Math.random() * 4000 + 700,
    );
  };

  useEffect(() => {
    handleDirectionChange();
  }, [direction]);

  return (
    <section
      className={cn(
        goodTimes.className,
        "relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-slate-950 px-4 text-center",
      )}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="absolute -top-1/2 w-[200vw] opacity-10 md:-top-[130%] md:w-[80vw]"
      >
        <Image
          src="/images/tf2024_Frame.svg"
          alt="Technology Festival 2024"
          width={130}
          height={130}
          className="w-full"
        />
      </motion.div>
      <div className="relative">
        <motion.div
          className="needle"
          animate={{ rotate: direction }}
          transition={{ type: "spring", stiffness: 300, damping: 100 }}
        >
          <Image
            src="/images/tf2024_Frame.svg"
            alt="Technology Festival 2024"
            width={120}
            height={120}
          />
        </motion.div>

        <Image
          src="/images/tf2024_T.svg"
          alt="Technology Festival 2024"
          width={120}
          height={120}
          className="absolute inset-0 m-auto"
        />
      </div>
      <h1 className="mt-10 bg-gradient-to-br from-primary to-secondary bg-clip-text text-xl text-transparent md:text-2xl">
        Technology Festival 2024
      </h1>
      <p className="bg-gradient-to-br from-slate-500 to-slate-400 bg-clip-text text-transparent">
        Coming Soon
      </p>

      <p
        className={cn(
          extatica.className,
          "mt-4 bg-gradient-to-br from-slate-500 to-slate-400 bg-clip-text text-3xl font-extrabold text-transparent",
        )}
      >
        {countdownString}
      </p>
    </section>
  );
}
