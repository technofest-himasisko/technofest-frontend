"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface Props {
  onClick?: (isOpened: boolean) => void;
  className?: string;
}

export default function MenuButton({ onClick, className }: Props) {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  function handleButtonClick() {
    setIsOpened(!isOpened);
    if (onClick) onClick(!isOpened);
  }

  return (
    <div
      onClick={handleButtonClick}
      className={cn(
        "flex h-8 w-8 cursor-pointer items-center justify-center",
        className,
      )}
    >
      <div className="space-y-2">
        <span
          className={cn(
            isOpened && "translate-y-1.5 rotate-45",
            "block h-1 w-8 origin-center rounded bg-slate-500 transition-transform ease-in-out",
          )}
        ></span>
        <span
          className={cn(
            isOpened
              ? "w-8 -translate-y-1.5 -rotate-45 bg-primary"
              : "w-6 from-primary to-primary/50",
            "block h-1 origin-center rounded bg-gradient-to-r transition-all ease-in-out",
          )}
        ></span>
      </div>
    </div>
  );
}
