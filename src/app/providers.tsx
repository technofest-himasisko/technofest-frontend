"use client";

import { Toaster } from "@/ui/atoms/toaster";
import { TooltipProvider } from "@/ui/atoms/tooltip";
import { SessionProvider } from "next-auth/react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
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

      <ProgressBar
        height="1px"
        color="#BC477F"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
