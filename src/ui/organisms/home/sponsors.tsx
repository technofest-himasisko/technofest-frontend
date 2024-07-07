import Reveal from "@/ui/atoms/reveal";
import { CommonPageSection } from "@/ui/molecules/common-page-section";
import LogoCard from "@/ui/molecules/logo-card";
import SectionHeader from "@/ui/molecules/section-header";

export default function HomeSponsors() {
  return (
    <CommonPageSection id="sponsors" className="container">
      <Reveal width="100%">
        <SectionHeader title="Sponsor" position="center" />
      </Reveal>
      <ul className="mt-10 flex flex-wrap justify-center gap-1.5 md:gap-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <li key={i}>
            <Reveal opacityOnly>
              <LogoCard image={{ src: "/images/logoipsum.svg", alt: "" }} />
            </Reveal>
          </li>
        ))}
      </ul>
    </CommonPageSection>
  );
}
