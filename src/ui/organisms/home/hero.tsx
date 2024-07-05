"use client";

import useCountdown from "@/lib/hooks/use-countdown";
import { Messenger } from "@/lib/text-transformer";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/ui/atoms/button";
import { goodTimes } from "@/ui/fonts";
import { Lightning } from "@phosphor-icons/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeHero() {
  const [messenger, setMessenger] = useState("2024");

  useEffect(() => {
    // eslint-disable-next-line no-new
    new Messenger(setMessenger);
  }, []);

  return (
    <div className="bg-gradient-to-t from-primary/[6%] to-transparent to-25%">
      <header className="relative flex h-[calc(100dvh-4rem)] flex-col items-center overflow-hidden pt-[30vh] md:pt-[18vh]">
        <p className="-mr-[1.6em] text-center font-mono text-sm font-medium uppercase tracking-[1.1em] md:text-xl md:tracking-[1.6em]">
          {messenger}
        </p>
        <h1
          className={cn(
            goodTimes.className,
            "mt-4 max-w-3xl bg-gradient-to-br from-primary from-60% to-secondary bg-clip-text text-center text-3xl text-transparent md:mt-10 md:text-7xl",
          )}
        >
          Technology Festival 2024
        </h1>
        <p
          className={cn(
            goodTimes.className,
            "mt-4 bg-gradient-to-br from-slate-200 to-slate-400 bg-clip-text text-center text-xs text-transparent md:text-xl",
          )}
        >
          Himasisko Fasilkom Universitas Sriwijaya
        </p>
        <div className="mt-10 flex flex-row gap-x-2 md:gap-x-4">
          <Button variant="gradient" size="lg">
            <Link href="#about" className="flex flex-row items-center gap-x-2">
              <Lightning weight="duotone" /> <span>More Info</span>
            </Link>
          </Button>
          <Button variant="outline" size="lg">
            Baca Guidebook
          </Button>
        </div>

        <div className="absolute -bottom-[150%] -z-10 h-[170%] w-[170%] opacity-20 md:-bottom-[14%] md:h-[50%] md:w-[50%]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            <Image
              src="/images/tf2024_Frame.svg"
              alt=""
              width={1200}
              height={1200}
              className="w-full"
            />
          </motion.div>
        </div>
      </header>
    </div>
  );
}
