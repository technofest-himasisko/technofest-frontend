import CommonPageContainer from "@/ui/molecules/common-page-container";
import FaqsFaqList from "@/ui/organisms/faqs/faq-list";
import FaqsHeader from "@/ui/organisms/faqs/header";

export default function Page() {
  return (
    <CommonPageContainer>
      <FaqsHeader />
      <FaqsFaqList />
    </CommonPageContainer>
  );
}
