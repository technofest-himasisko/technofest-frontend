import Reveal from "@/ui/atoms/reveal";
import { CommonPageSection } from "@/ui/molecules/common-page-section";
import SectionHeader from "@/ui/molecules/section-header";

export default function EventSeminarDescription() {
  return (
    <CommonPageSection className="container">
      <Reveal width="100%">
        <SectionHeader
          title="Seminar Technofest"
          subtitle="Hai Technofolks!"
          position="center"
        />
      </Reveal>
      <Reveal width="100%">
        <p className="mx-auto mt-4 max-w-3xl text-center font-light text-slate-400 md:text-xl">
          20 September bakalan jadi momen seru yang enggak boleh kamu lewatkan!
          Siap-siap buat join dalam seminar &quot;Internet of Things (IoT):
          Connecting Our World&quot;. Kita bakal bahas bagaimana cara kerja, dan
          mengapa IoT menjadi penting dalam dunia teknologi saat ini. Ada
          pembicara asyik yaitu Pak Kemahyanto, yang bakal bikin kamu thinking
          out of the box!
        </p>
      </Reveal>
    </CommonPageSection>
  );
}
