"use client";

import { Toaster } from "@/ui/atoms/toaster";
import { TooltipProvider } from "@/ui/atoms/tooltip";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Readonly<Props>) {
  return (
    <>
      <SessionProvider>
        <RecoilRoot>
          <TooltipProvider>
            {children}
            <Toaster />
          </TooltipProvider>
        </RecoilRoot>
      </SessionProvider>
    </>
  );
}
