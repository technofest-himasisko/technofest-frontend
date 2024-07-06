import CastFigure from "@/ui/molecules/cast-figure";
import { CommonPageSection } from "@/ui/molecules/common-page-section";
import SectionHeader from "@/ui/molecules/section-header";

export default function HomeSeminar() {
  return (
    <CommonPageSection className="container">
      <SectionHeader
        title="Seminar"
        subtitle="Our Speakers"
        position="center"
      />

      <div className="mt-10 flex flex-col items-center justify-center gap-y-10 md:flex-row md:gap-x-10 md:gap-y-0">
        <CastFigure />
        <CastFigure />
      </div>
    </CommonPageSection>
  );
}
