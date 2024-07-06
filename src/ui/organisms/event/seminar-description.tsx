import CommonPageContainer from "@/ui/molecules/common-page-container";
import { CommonPageSection } from "@/ui/molecules/common-page-section";
import SectionHeader from "@/ui/molecules/section-header";

export default function EventSeminarDescription() {
  return (
    <CommonPageSection className="container">
      <SectionHeader
        title="Seminar Technofest"
        subtitle="Hai Technofolks!"
        position="center"
      />
      <p className="mx-auto mt-4 max-w-xl text-center font-light text-slate-400 md:text-xl">
        16 September bakalan jadi momen seru yang enggak boleh kamu lewatkan!
        Siap-siap buat join dalam seminar &quot;Great Leadership & Green Tech
        ala Gen Z&quot;. Kita bakal bahas kepemimpinan keren yang bisa mengubah
        dunia serta peran mahasiswa di teknologi ramah lingkungan yang lagi
        hits. Ada pembicara asyik yaitu Pak Ferdi Kawi dan Pak Kemahyanto, yang
        bakal bikin kamu thinking out of the box!
      </p>
    </CommonPageSection>
  );
}
