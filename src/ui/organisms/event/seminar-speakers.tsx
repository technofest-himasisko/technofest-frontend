import CastFigure from "@/ui/molecules/cast-figure";
import { CommonPageSection } from "@/ui/molecules/common-page-section";
import SectionHeader from "@/ui/molecules/section-header";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function EventSeminarSpeakers() {
  return (
    <CommonPageSection>
      <SectionHeader
        title="Pembicara"
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
