import { Circle } from "@phosphor-icons/react/dist/ssr";

interface Props {
  title: string;
}

export default function CommonPageHeader({ title }: Props) {
  return (
    <div className="mb-20 mt-36 flex flex-col">
      <h1 className="container z-10 flex flex-row items-center gap-x-2 text-6xl font-bold uppercase">
        <Circle weight="duotone" className="text-[0.6em] text-primary" />
        {title}
      </h1>
      <div className="h-[2px] bg-gradient-to-r from-primary to-primary/10" />
    </div>
  );
}
