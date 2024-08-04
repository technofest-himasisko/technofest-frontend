import { cn } from "@/lib/utils/common";
import Image from "next/image";

interface Props {
  image: {
    src: string;
    alt: string;
  };
  size?: "sm" | "lg";
}

export default function LogoCard({ image, size = "sm" }: Props) {
  return (
    <div className="border border-primary/50 bg-primary/10 p-2 md:p-4">
      <Image
        src={image.src}
        alt={image.alt}
        width={600}
        height={600}
        className={cn(
          size == "lg" ? "h-[2rem] md:h-[4rem]" : "h-[1rem] md:h-[2rem]",
          "w-auto",
        )}
      />
    </div>
  );
}
