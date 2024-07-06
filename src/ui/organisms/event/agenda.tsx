import { Card } from "@/ui/atoms/card";
import { CommonPageSection } from "@/ui/molecules/common-page-section";
import SectionHeader from "@/ui/molecules/section-header";

export default function EventAgenda() {
  return (
    <CommonPageSection className="container flex flex-col gap-y-10">
      <SectionHeader
        title="Agenda"
        position="center"
        subtitle="Timeline Event UI/UX"
      />
      <div className="mx-auto max-w-2xl">
        <Card className="text-center backdrop-blur">
          <p className="text-sm font-semibold text-primary md:text-base">
            5 Agustus 2024
          </p>
          <h3 className="text-xl font-semibold uppercase md:text-3xl">
            Opening Caremony
          </h3>
          <p className="mt-2 font-light text-slate-400 md:mt-4 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            inventore tempora sit, nam corrupti porro cumque neque cum, ducimus
            sed cupiditate iure accusantium nobis! Blanditiis rem obcaecati
            autem temporibus fugit?
          </p>
        </Card>
        <div className="mx-auto h-6 w-1 bg-primary" />
        <Card className="text-center backdrop-blur">
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
        <div className="mx-auto h-6 w-1 bg-primary" />

        <Card className="text-center backdrop-blur">
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
      </div>
    </CommonPageSection>
  );
}
