import { Skeleton } from "@/ui/atoms/skeleton";
import CommonPageContainer from "@/ui/molecules/common-page-container";
import { CommonPageSection } from "@/ui/molecules/common-page-section";
import FaqsHeader from "@/ui/organisms/faqs/header";

export default function Loading() {
  return (
    <CommonPageContainer>
      <FaqsHeader />
      <section className="container pb-8">
        <Skeleton className="my-2 h-[56px] md:h-[60px]" />
        <Skeleton className="my-2 h-[56px] md:h-[60px]" />
        <Skeleton className="my-2 h-[56px] md:h-[60px]" />
        <Skeleton className="my-2 h-[56px] md:h-[60px]" />
        <Skeleton className="my-2 h-[56px] md:h-[60px]" />
      </section>
    </CommonPageContainer>
  );
}
