import { cn } from "@/lib/utils/common";
import { Button } from "@/ui/atoms/button";
import Reveal from "@/ui/atoms/reveal";
import { goodTimes } from "@/ui/fonts";
import { FigmaLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function EventCompetitionHeader() {
  return (
    <section className="container flex flex-col items-center pt-2 text-center md:pt-10">
      <Reveal noDelay width="100%">
        <div className="flex w-full items-center justify-center bg-primary/10 p-10 group-hover:bg-primary/20 md:p-14">
          <FigmaLogo
            weight="duotone"
            className="size-[4rem] text-primary/80 group-hover:text-primary md:size-[10rem]"
          />
        </div>
      </Reveal>

      <Reveal noDelay>
        <h1
          className={cn(
            goodTimes.className,
            "mt-4 max-w-4xl text-2xl text-primary md:text-6xl",
          )}
        >
          Fotografi
        </h1>
      </Reveal>

      <Reveal noDelay width="100%">
        <p className={cn(goodTimes.className, "mt-1 text-xs md:text-base")}>
          Technology Festival 2024
        </p>
      </Reveal>

      <Reveal noDelay>
        <p className="mt-4 max-w-xl font-light text-slate-400 md:text-xl">
          Kompetisi UI/UX adalah kompetisi desain yang fokus pada pembangunan
          antarmuka yang ramah pengguna dan nyaman untuk sistem/produk.
        </p>
      </Reveal>

      <Reveal noDelay width="100%">
        <div className="mt-10 flex w-full flex-col justify-center gap-y-2 md:flex-row md:gap-x-4 md:gap-y-0">
          <Button variant="gradient" size="lg">
            <Link href="#about" className="flex flex-row items-center gap-x-2">
              Daftar Sekarang
            </Link>
          </Button>
          <Button variant="outline" size="lg">
            Baca Guidebook
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
