import { Button } from "@/ui/atoms/button";
import { Card } from "@/ui/atoms/card";
import Reveal from "@/ui/atoms/reveal";
import { CommonPageSection } from "@/ui/molecules/common-page-section";
import SectionHeader from "@/ui/molecules/section-header";
import { QuestionMark } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function EventFaqs() {
  return (
    <CommonPageSection id="faqs" className="container">
      <Reveal width="100%">
        <Card className="relative overflow-hidden md:px-20">
          <SectionHeader title="Faqs" subtitle="Ada Pertanyaan?" />
          <p className="mt-4 max-w-xl font-light text-slate-400 md:text-xl">
            Punya pertanyaan seputar event perlombaan atau seminar? Silakan
            masuk ke halaman Faqs yaa.
          </p>
          <div className="mt-8 flex flex-col gap-y-2 md:flex-row md:gap-x-2 md:gap-y-0">
            <Button className="w-full md:w-auto">
              <Link href="/faqs">Faqs</Link>
            </Button>
            <Button variant="ghost" className="w-full md:w-auto">
              <Link href="#">Guidebook</Link>
            </Button>
          </div>
          <QuestionMark className="absolute bottom-0 right-0 hidden text-primary/20 md:block md:size-[14rem]" />
        </Card>
      </Reveal>
    </CommonPageSection>
  );
}
