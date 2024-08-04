import config from "@/config";
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
      <ul className="mt-10 flex flex-wrap items-stretch justify-center gap-1.5 md:gap-2">
        {config.sponsors.map((sponsor, index) => (
          <li key={index}>
            <Reveal opacityOnly>
              <LogoCard image={{ src: sponsor, alt: "" }} size="lg" />
            </Reveal>
          </li>
        ))}
      </ul>
    </CommonPageSection>
  );
}
