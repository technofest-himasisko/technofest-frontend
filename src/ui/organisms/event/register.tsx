import { Button } from "@/ui/atoms/button";
import { Card } from "@/ui/atoms/card";
import { CommonPageSection } from "@/ui/molecules/common-page-section";
import SectionHeader from "@/ui/molecules/section-header";
import Link from "next/link";

export default function EventRegister() {
  return (
    <CommonPageSection id="faqs" className="container">
      <Card className="relative overflow-hidden md:px-20">
        <SectionHeader
          title="Register"
          subtitle="Daftar Sekarang"
          position="center"
        />
        <div className="mt-8 flex justify-center">
          <Button className="w-full md:w-auto">
            <Link href="/faqs">Gass!</Link>
          </Button>
        </div>
      </Card>
    </CommonPageSection>
  );
}
