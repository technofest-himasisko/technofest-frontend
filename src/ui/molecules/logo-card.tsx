import Image from "next/image";

interface Props {
  image: {
    src: string;
    alt: string;
  };
}

export default function LogoCard({ image }: Props) {
  return (
    <div className="border border-primary/50 bg-primary/10 p-2 md:p-4">
      <Image
        src={image.src}
        alt={image.alt}
        width={128}
        height={128}
        className="w-[8rem] md:w-[12rem]"
      />
    </div>
  );
}
