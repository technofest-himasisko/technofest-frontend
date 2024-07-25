"use client";

import { Toaster } from "@/ui/atoms/toaster";
import { TooltipProvider } from "@/ui/atoms/tooltip";
import { RecoilRoot } from "recoil";

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Readonly<Props>) {
  return (
    <>
      <RecoilRoot>
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </RecoilRoot>
    </>
  );
}
