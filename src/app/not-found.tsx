import { Button } from "@/ui/atoms/button";
import CommonPageContainer from "@/ui/molecules/common-page-container";
import { CommonPageSection } from "@/ui/molecules/common-page-section";
import Link from "next/link";

export default function NotFound() {
  return (
    <CommonPageContainer>
      <CommonPageSection className="container flex justify-center text-center">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            4<span className="inline-block animate-spin text-primary">0</span>4
            Not Found
          </h1>
          <p className="mt-4 text-slate-100/40 md:text-lg">
            Maaf, halaman yang Anda cari tidak ditemukan.
          </p>
          <Button asChild className="mt-6 md:mt-10">
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </CommonPageSection>
    </CommonPageContainer>
  );
}
