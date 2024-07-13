import { cn } from "@/lib/utils/common";
import { Button } from "@/ui/atoms/button";
import Reveal from "@/ui/atoms/reveal";
import { goodTimes } from "@/ui/fonts";
import Image from "next/image";
import Link from "next/link";

export default function EventSeminarHeader() {
  return (
    <section className="container relative flex flex-col items-center overflow-hidden pt-2 text-center md:pt-10">
      <div className="-z- absolute -top-[80%] -z-10 w-[20rem] md:-top-[170%] md:w-[90rem]">
        <Image
          src="/images/tf2024_Frame.svg"
          alt=""
          width={1000}
          height={1000}
          className="mx-auto rotate-45"
        />
      </div>
      <div className="mt-28 md:mt-40">
        <Reveal noDelay width="100%">
          <h1
            className={cn(
              goodTimes.className,
              "max-w-4xl text-xl text-primary md:text-6xl",
            )}
          >
            Internet of Things: Connecting Our World
          </h1>
        </Reveal>

        <Reveal noDelay width="100%">
          <p className={cn(goodTimes.className, "mt-1 text-xs md:text-base")}>
            Seminar Technology Festival 2024
          </p>
        </Reveal>

        <Reveal noDelay width="100%">
          <div className="mt-10 flex w-full flex-col justify-center gap-y-2 md:flex-row md:gap-x-4 md:gap-y-0">
            <Button variant="gradient" size="lg">
              <Link
                href="#about"
                className="flex flex-row items-center gap-x-2"
              >
                Daftar Sekarang
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
