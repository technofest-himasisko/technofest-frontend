import Reveal from "@/ui/atoms/reveal";
import { CommonPageSection } from "@/ui/molecules/common-page-section";
import SectionHeader from "@/ui/molecules/section-header";
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
            Di era globalisasi, perkembangan teknologi yang pesat mempengaruhi
            hampir semua aspek kehidupan manusia, termasuk komunikasi,
            transportasi, dan pendidikan. Meskipun teknologi awalnya diciptakan
            untuk memenuhi kebutuhan dasar, kini perannya telah berkembang
            menjadi penentu arah perkembangan sosial dan ekonomi. Generasi muda
            dituntut untuk memahami dan beradaptasi dengan teknologi agar tidak
            tertinggal. Untuk mendukung pemahaman ini, Himpunan Mahasiswa Sistem
            Komputer Fakultas Ilmu Komputer Universitas Sriwijaya akan
            menyelenggarakan Technology Festival 2024 dengan tema &quot;Art-Tech
            Fusion: Redefining Boundaries in the Age of Digital
            Creativity&quot;. Acara ini melibatkan mahasiswa dan siswa SMA/SMK
            di seluruh Indonesia dengan tujuan memotivasi generasi muda untuk
            berinovasi dalam teknologi.
          </p>
        </Reveal>
      </div>
    </CommonPageSection>
  );
}
