import { auth } from "@/lib/auth/auth";
import {
  cn,
  getAvatarCallbackLetter,
  toParticipantId,
} from "@/lib/utils/common";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/atoms/avatar";
import { goodTimes } from "@/ui/fonts";
import IdDisplay from "@/ui/molecules/id-display";
import { Session } from "next-auth";
import Image from "next/image";
import { Suspense } from "react";

export default async function ParticipantHomeHeader() {
  const session = (await auth()) as Session;

  return (
    <Suspense fallback={<p className="text-xl text-white">Loading...</p>}>
      <section className="container mt-4 md:mt-10">
        <div className="relative h-36 border border-primary/20 bg-gradient-to-br from-primary/20 to-secondary/20 md:h-40">
          <Avatar size="lg" className="absolute inset-x-0 -bottom-8 mx-auto">
            <AvatarImage src={session.user?.avatar} alt="User avatar" />
            <AvatarFallback>
              {getAvatarCallbackLetter(session.user?.name || "")}
            </AvatarFallback>
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
          <p className="text-lg font-semibold md:text-2xl">
            {session.user?.name}
          </p>
          <p className="text-sm text-slate-100/40 md:text-base">
            {session.user?.email}
          </p>

          <IdDisplay ID={toParticipantId(session.user?.uid!)} />
        </div>
      </section>
    </Suspense>
  );
}
