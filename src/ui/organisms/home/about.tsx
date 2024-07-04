import SectionHeader from "@/ui/molecules/section-header";
import { Compass } from "@phosphor-icons/react/dist/ssr";

export default function HomeAbout() {
  return (
    <section className="container mt-20 flex flex-col items-center justify-between gap-y-10 md:mt-40 md:flex-row md:gap-x-10 md:gap-y-0">
      <div>
        <Compass
          weight="duotone"
          className="size-[10rem] text-primary md:size-[16rem]"
        />
      </div>
      <div>
        <SectionHeader
          title="About"
          subtitle="Selamat Datang di Technofest 2024"
        />
        <p className="mt-4 font-light text-slate-400 md:text-xl">
          Technology Festival atau yang biasa dikenal dengan Technofest adalah
          forum kompetitif berskala nasional yang mewadahi minat dan bakat kaum
          muda dalam dunia teknologi. Ajang kompetitif yang disediakan adalah
          lomba essay, poster, dan UI/UX. Technofest juga memberikan seminar
          untuk menyalurkan pengetahuan dan informasi yang berkembang pesat
          kepada generasi muda dengan tujuan untuk memotivasi kaum muda agar
          dapat berinovasi dan memajukan teknologi di Indonesia.
        </p>
      </div>
    </section>
  );
}
