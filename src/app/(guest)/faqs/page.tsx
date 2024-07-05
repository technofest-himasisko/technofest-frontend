import CommonPageContainer from "@/ui/molecules/common-page-container";
import FaqsFaqList from "@/ui/organisms/faqs/faq-list";
import FaqsHeader from "@/ui/organisms/faqs/header";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <CommonPageContainer>
      <FaqsHeader />
      <FaqsFaqList />
    </CommonPageContainer>
  );
}
