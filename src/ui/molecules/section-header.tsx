import { cn } from "@/lib/utils";
import { Circle } from "@phosphor-icons/react/dist/ssr";
import { goodTimes } from "../fonts";

interface Props {
  title: string;
  subtitle?: string;
  position?: "left" | "center";
}

export default function SectionHeader({
  title,
  subtitle,
  position = "left",
}: Props) {
  return (
    <header
      className={cn(
        position === "center" && "items-center text-center",
        "flex flex-col",
      )}
    >
      <h2
        className={cn(
          goodTimes.className,
          "flex flex-row items-center gap-x-2 uppercase tracking-[0.2em]",
        )}
      >
        <Circle weight="duotone" className="text-[0.6em]" />
        <span className="bg-gradient-to-br from-slate-200 to-slate-400 bg-clip-text text-sm text-transparent md:text-base">
          {title}
        </span>
      </h2>
      <p className="text-3xl font-bold uppercase text-primary md:text-4xl">
        {subtitle}
      </p>
    </header>
  );
}
