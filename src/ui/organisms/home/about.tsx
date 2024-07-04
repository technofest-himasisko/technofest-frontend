import SectionHeader from "@/ui/molecules/section-header";
import { Compass } from "@phosphor-icons/react/dist/ssr";

export default function HomeAbout() {
  return (
    <section className="container mt-40 flex flex-row items-center justify-between gap-x-10">
      <div>
        <Compass
          weight="duotone"
          className="h-[16rem] w-[16rem] text-primary"
        />
      </div>
      <div>
        <SectionHeader
          title="About"
          subtitle="Selamat Datang di Technofest 2024"
        />
        <p className="mt-4 text-xl font-light text-slate-400">
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
