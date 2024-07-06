import useCopy from "@/lib/hooks/use-copy";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/atoms/avatar";
import { goodTimes } from "@/ui/fonts";
import { Copy } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function ParticipantHomeHeader() {
  const { copyToClipboard } = useCopy();

  function handleCopyClick() {
    copyToClipboard("081367436851");
  }

  return (
    <section className="container mt-4 md:mt-10">
      <div className="relative h-36 border border-primary/20 bg-gradient-to-br from-primary/20 to-secondary/20 md:h-40">
        <Avatar className="absolute inset-x-0 -bottom-8 mx-auto size-16">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="absolute bottom-[50%] w-full">
          <p
            className={cn(
              goodTimes.className,
              "bg-gradient-to-r from-primary to-secondary bg-clip-text text-center tracking-widest text-transparent md:text-lg",
            )}
          >
            Welcome
          </p>
        </div>

        <div className="relative h-36 w-full overflow-hidden md:h-40">
          <div className="absolute inset-x-0 -bottom-[220px] -z-10 md:-bottom-[300px]">
            <Image
              src="/images/tf2024_Frame.svg"
              alt=""
              width={400}
              height={400}
              className="mx-auto opacity-10"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center text-center">
        <p className="text-lg font-semibold md:text-2xl">Kevin Anggara</p>
        <p className="text-sm text-slate-100/40 md:text-base">
          slow9ie@gmail.com
        </p>

        <div className="mt-4 flex flex-row border border-primary/20 bg-primary/10">
          <p className="px-4 py-2 font-medium">ID: U-05390979</p>
          <button
            onClick={handleCopyClick}
            className="bg-primary/10 px-4 py-2 text-primary transition-colors hover:bg-primary/20"
          >
            <Copy />
          </button>
        </div>
      </div>
    </section>
  );
}
