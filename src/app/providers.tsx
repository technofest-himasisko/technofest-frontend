"use client";

import { Toaster } from "@/ui/atoms/toaster";
import { TooltipProvider } from "@/ui/atoms/tooltip";

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Readonly<Props>) {
  return (
    <TooltipProvider>
      {children}
      <Toaster />
    </TooltipProvider>
  );
}
