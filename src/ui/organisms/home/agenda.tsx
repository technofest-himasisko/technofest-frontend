import { Card } from "@/ui/atoms/card";
import { CommonPageSection } from "@/ui/molecules/common-page-section";
import SectionHeader from "@/ui/molecules/section-header";

export default function HomeAgenda() {
  return (
    <CommonPageSection className="container flex flex-col gap-y-10 md:flex-row md:gap-x-20 md:gap-y-0">
      <SectionHeader title="Agenda" subtitle="Timeline Tecnofest" />
      <div>
        <Card>
          <p className="font-semibold text-primary">5 Agustus 2024</p>
          <h3 className="text-3xl font-semibold uppercase">Opening Caremony</h3>
          <p className="mt-2 font-light text-slate-400 md:mt-4 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            inventore tempora sit, nam corrupti porro cumque neque cum, ducimus
            sed cupiditate iure accusantium nobis! Blanditiis rem obcaecati
            autem temporibus fugit?
          </p>
        </Card>
        <div className="mx-auto h-6 w-1 bg-primary/20 md:ml-10" />
        <Card>
          <p className="font-semibold text-primary">5 Agustus 2024</p>
          <h3 className="text-3xl font-semibold uppercase">Kompetisi</h3>
          <p className="mt-2 font-light text-slate-400 md:mt-4 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            inventore tempora sit, nam
          </p>
        </Card>
        <div className="mx-auto h-6 w-1 bg-primary/20 md:ml-10" />

        <Card>
          <p className="font-semibold text-primary">5 Agustus 2024</p>
          <h3 className="text-3xl font-semibold uppercase">Seminar</h3>
          <p className="mt-2 font-light text-slate-400 md:mt-4 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            inventore tempora
          </p>
        </Card>
      </div>
    </CommonPageSection>
  );
}
