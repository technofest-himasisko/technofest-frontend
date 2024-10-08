"use client";

import { Messenger } from "@/lib/utils/text-transformer";
import { cn } from "@/lib/utils/common";
import { Button } from "@/ui/atoms/button";
import { goodTimes } from "@/ui/fonts";
import { Lightning } from "@phosphor-icons/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Reveal from "@/ui/atoms/reveal";

export default function HomeHero() {
  const [messenger, setMessenger] = useState("IoT");

  useEffect(() => {
    // eslint-disable-next-line no-new
    new Messenger(setMessenger);
  }, []);

  return (
    <div className="bg-gradient-to-t from-primary/10 to-transparent to-25%">
      <header className="relative flex h-[calc(100dvh-4rem)] flex-col items-center overflow-hidden pt-[20vh] md:pt-[18vh]">
        <Reveal noDelay width="100%">
          <p className="-mr-[1.6em] text-center font-mono text-sm font-medium uppercase tracking-[1.1em] md:text-xl md:tracking-[1.6em]">
            {messenger}
          </p>
        </Reveal>
        <Reveal noDelay>
          <h1
            className={cn(
              goodTimes.className,
              "mt-4 max-w-3xl bg-gradient-to-br from-primary from-60% to-secondary bg-clip-text text-center text-3xl text-transparent md:mt-10 md:text-7xl",
            )}
          >
            Technology Festival 2024
          </h1>
        </Reveal>
        <Reveal noDelay>
          <p
            className={cn(
              goodTimes.className,
              "mt-4 max-w-[22rem] bg-gradient-to-br from-slate-200 to-slate-400 bg-clip-text text-center text-sm text-transparent md:max-w-2xl md:text-xl",
            )}
          >
            Art-Tech Fusion: Redefining Boundaries in the Age of Digital
            Creativity
          </p>
        </Reveal>
        <Reveal noDelay width="100%">
          <div className="container mt-10 flex w-full flex-col justify-center gap-y-2 md:flex-row md:gap-x-4 md:gap-y-0">
            <Button variant="gradient" size="lg" asChild>
              <Link
                href="#about"
                className="flex flex-row items-center gap-x-2"
              >
                <Lightning weight="duotone" /> <span>More Info</span>
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link
                href="https://drive.google.com/drive/folders/1fvlevgC7xLy9LiI6ShJeYQW_r4EjtN-g"
                target="_blank"
              >
                Baca Guidebook
              </Link>
            </Button>
          </div>
        </Reveal>

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
