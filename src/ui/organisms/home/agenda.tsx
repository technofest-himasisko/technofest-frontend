import { Card } from "@/ui/atoms/card";
import Reveal from "@/ui/atoms/reveal";
import { CommonPageSection } from "@/ui/molecules/common-page-section";
import SectionHeader from "@/ui/molecules/section-header";

export default function HomeAgenda() {
  return (
    <CommonPageSection className="container flex flex-col gap-y-10 md:flex-row md:gap-x-20 md:gap-y-0">
      <Reveal direction="right">
        <SectionHeader title="Agenda" subtitle="Timeline Tecnofest" />
      </Reveal>
      <div>
        <Reveal opacityOnly>
          <Card className="backdrop-blur">
            <p className="text-sm font-semibold text-primary md:text-base">
              5 Agustus 2024
            </p>
            <h3 className="text-xl font-semibold uppercase md:text-3xl">
              Opening Caremony
            </h3>
            <p className="mt-2 font-light text-slate-400 md:mt-4 md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              inventore tempora sit, nam corrupti porro cumque neque cum,
              ducimus sed cupiditate iure accusantium nobis! Blanditiis rem
              obcaecati autem temporibus fugit?
            </p>
          </Card>
        </Reveal>
        <Reveal opacityOnly width="100%">
          <div className="mx-auto h-6 w-1 bg-primary md:ml-10" />
        </Reveal>
        <Reveal opacityOnly>
          <Card className="backdrop-blur">
            <p className="text-sm font-semibold text-primary md:text-base">
              5 Agustus 2024
            </p>
            <h3 className="text-xl font-semibold uppercase md:text-3xl">
              Kompetisi
            </h3>
            <p className="mt-2 font-light text-slate-400 md:mt-4 md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              inventore tempora sit, nam
            </p>
          </Card>
        </Reveal>
        <Reveal opacityOnly width="100%">
          <div className="mx-auto h-6 w-1 bg-primary md:ml-10" />
        </Reveal>
        <Reveal opacityOnly>
          <Card className="backdrop-blur">
            <p className="text-sm font-semibold text-primary md:text-base">
              5 Agustus 2024
            </p>
            <h3 className="text-xl font-semibold uppercase md:text-3xl">
              Seminar
            </h3>
            <p className="mt-2 font-light text-slate-400 md:mt-4 md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              inventore tempora
            </p>
          </Card>
        </Reveal>
      </div>
    </CommonPageSection>
  );
}
