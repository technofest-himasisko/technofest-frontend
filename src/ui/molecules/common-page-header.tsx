import { Circle } from "@phosphor-icons/react/dist/ssr";

interface Props {
  title: string;
}

export default function CommonPageHeader({ title }: Props) {
  return (
    <div className="mb-10 mt-8 flex flex-col md:mb-20 md:mt-20">
      <h1 className="container z-10 flex flex-row items-center gap-x-2 text-4xl font-bold uppercase md:text-6xl">
        <Circle weight="duotone" className="text-[0.6em] text-primary" />
        {title}
      </h1>
      <div className="h-[2px] bg-gradient-to-r from-secondary via-primary/60 to-primary/10 to-70%" />
    </div>
  );
}
