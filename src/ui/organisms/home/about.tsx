import Reveal from "@/ui/atoms/reveal";
import { CommonPageSection } from "@/ui/molecules/common-page-section";
import SectionHeader from "@/ui/molecules/section-header";
import { Compass } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function HomeAbout() {
  return (
    <CommonPageSection
      id="about"
      className="container flex flex-col items-center justify-between gap-y-10 md:flex-row md:gap-x-20 md:gap-y-0"
    >
      <div>
        <Image
          src="/images/mascot.png"
          alt="Mascot"
          width={1000}
          height={1000}
          className="width-[20rem] md:width-[28rem]"
        />
      </div>
      <div className="md:max-w-2xl">
        <Reveal direction="right">
          <SectionHeader
            title="About"
            subtitle="Selamat Datang di Technofest 2024"
          />
        </Reveal>
        <Reveal direction="right">
          <p className="mt-4 font-light text-slate-400 md:text-xl">
            Technology Festival atau yang biasa dikenal dengan Technofest adalah
            forum kompetitif berskala nasional yang mewadahi minat dan bakat
            kaum muda dalam dunia teknologi. Ajang kompetitif yang disediakan
            adalah lomba essay, poster, dan UI/UX. Technofest juga memberikan
            seminar untuk menyalurkan pengetahuan dan informasi yang berkembang
            pesat kepada generasi muda dengan tujuan untuk memotivasi kaum muda
            agar dapat berinovasi dan memajukan teknologi di Indonesia.
          </p>
        </Reveal>
      </div>
    </CommonPageSection>
  );
}
