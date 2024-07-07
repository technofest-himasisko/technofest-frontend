import Reveal from "@/ui/atoms/reveal";
import CastFigure from "@/ui/molecules/cast-figure";
import { CommonPageSection } from "@/ui/molecules/common-page-section";
import SectionHeader from "@/ui/molecules/section-header";

export default function EventSeminarSpeakers() {
  return (
    <CommonPageSection>
      <Reveal width="100%">
        <SectionHeader
          title="Pembicara"
          subtitle="Our Speakers"
          position="center"
        />
      </Reveal>
      <Reveal width="100%">
        <div className="mt-10 flex flex-col items-center justify-center gap-y-10 md:flex-row md:gap-x-10 md:gap-y-0">
          <CastFigure />
          <CastFigure />
        </div>
      </Reveal>
    </CommonPageSection>
  );
}
