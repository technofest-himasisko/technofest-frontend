import { CommonPageSection } from "@/ui/molecules/common-page-section";
import LogoCard from "@/ui/molecules/logo-card";
import SectionHeader from "@/ui/molecules/section-header";

export default function HomeSponsors() {
  return (
    <CommonPageSection id="sponsors" className="container">
      <SectionHeader title="Sponsor" position="center" />
      <ul className="mt-10 flex flex-wrap justify-center gap-1.5 md:gap-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <li key={i}>
            <LogoCard image={{ src: "/images/logoipsum.svg", alt: "" }} />
          </li>
        ))}
      </ul>
    </CommonPageSection>
  );
}
