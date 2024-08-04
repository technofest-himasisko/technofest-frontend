import config from "@/config";
import Reveal from "@/ui/atoms/reveal";
import { CommonPageSection } from "@/ui/molecules/common-page-section";
import LogoCard from "@/ui/molecules/logo-card";
import SectionHeader from "@/ui/molecules/section-header";

export default function HomeMediaPartners() {
  return (
    <CommonPageSection id="media-partners" className="container">
      <Reveal width="100%">
        <SectionHeader title="Media Partner" position="center" />
      </Reveal>
      <ul className="mt-10 flex flex-wrap justify-center gap-1.5 md:gap-2">
        {config.mediaPartners.map((mediaPartner, index) => (
          <li key={index}>
            <Reveal opacityOnly>
              <LogoCard image={{ src: mediaPartner, alt: "" }} />
            </Reveal>
          </li>
        ))}
      </ul>
    </CommonPageSection>
  );
}
