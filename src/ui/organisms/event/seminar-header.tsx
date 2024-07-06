import { cn } from "@/lib/utils";
import { Button } from "@/ui/atoms/button";
import { goodTimes } from "@/ui/fonts";
import { CommonPageSection } from "@/ui/molecules/common-page-section";
import Link from "next/link";

export default function EventSeminarHeader() {
  return (
    <CommonPageSection className="container flex flex-col items-center text-center">
      <h1
        className={cn(
          goodTimes.className,
          "mt-4 max-w-4xl text-xl text-primary md:text-6xl",
        )}
      >
        Internet of Things: Connecting Our World
      </h1>
      <p className={cn(goodTimes.className, "mt-1 text-xs md:text-base")}>
        Seminar Technology Festival 2024
      </p>

      <div className="mt-10 flex w-full flex-col justify-center gap-y-2 md:flex-row md:gap-x-4 md:gap-y-0">
        <Button variant="gradient" size="lg">
          <Link href="#about" className="flex flex-row items-center gap-x-2">
            Daftar Sekarang
          </Link>
        </Button>
      </div>
    </CommonPageSection>
  );
}
