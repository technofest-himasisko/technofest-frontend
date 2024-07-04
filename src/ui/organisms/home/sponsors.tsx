import { CommonPageSection } from "@/ui/molecules/common-page-section";
import SectionHeader from "@/ui/molecules/section-header";
import Image from "next/image";

export default function HomeSponsors() {
  return (
    <CommonPageSection id="sponsors" className="container">
      <SectionHeader title="Sponsor" position="center" />
      <ul className="mt-10 flex flex-wrap justify-center gap-1.5 md:gap-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <li
            key={i}
            className="border border-primary/50 bg-primary/10 p-2 md:p-4"
          >
            <Image
              src="/images/logoipsum.svg"
              alt=""
              width={200}
              height={200}
              className="w-[8rem] md:w-[12rem]"
            />
          </li>
        ))}
      </ul>
    </CommonPageSection>
  );
}
