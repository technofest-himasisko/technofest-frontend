import { Button } from "@/ui/atoms/button";
import { Card } from "@/ui/atoms/card";
import SectionHeader from "@/ui/molecules/section-header";
import { QuestionMark } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function HomeFaqs() {
  return (
    <section className="container mt-20 md:mt-40">
      <Card className="relative overflow-hidden md:px-20">
        <SectionHeader title="Faqs" subtitle="Ada Pertanyaan?" />
        <p className="mt-4 max-w-xl font-light text-slate-400 md:text-xl">
          Punya pertanyaan seputar event perlombaan atau seminar? Silakan masuk
          ke halaman Faqs yaa.
        </p>
        <div className="mt-8 flex gap-x-2">
          <Button>
            <Link href="/faqs">Faqs</Link>
          </Button>
        </div>
        <QuestionMark className="absolute bottom-0 right-0 hidden text-primary/20 md:block md:size-[14rem]" />
      </Card>
    </section>
  );
}
