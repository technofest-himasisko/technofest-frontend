import SectionHeader from "@/ui/molecules/section-header";
import Image from "next/image";

export default function HomeSponsors() {
  return (
    <section className="container mt-40">
      <SectionHeader title="Sponsor" position="center" />
      <ul className="mt-10 flex flex-wrap justify-center gap-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <li key={i} className="border border-primary/50 bg-primary/10 p-4">
            <Image
              src="/images/logoipsum.svg"
              alt=""
              width={200}
              height={200}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
