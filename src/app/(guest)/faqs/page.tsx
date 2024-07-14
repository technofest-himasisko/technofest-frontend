import { faqsGetAll } from "@/lib/fetch/v2";
import CommonPageContainer from "@/ui/molecules/common-page-container";
import FaqsFaqList from "@/ui/organisms/faqs/faq-list";
import FaqsHeader from "@/ui/organisms/faqs/header";

export default async function Page() {
  const faqs = await faqsGetAll();

  return (
    <CommonPageContainer>
      <FaqsHeader />
      <FaqsFaqList faqs={faqs.data || []} />
    </CommonPageContainer>
  );
}
