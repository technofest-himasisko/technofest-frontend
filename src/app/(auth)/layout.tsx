import { Card } from "@/ui/atoms/card";
import CommonPageContainer from "@/ui/molecules/common-page-container";
import CommonPageHeader from "@/ui/molecules/common-page-header";
import { CommonPageSection } from "@/ui/molecules/common-page-section";
import SectionHeader from "@/ui/molecules/section-header";
import Header from "@/ui/organisms/header";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Readonly<Props>) {
  return (
    <>
      <Header minimal />
      <main className="grow">
        <CommonPageContainer>
          <CommonPageSection className="container mx-auto max-w-lg py-20">
            {children}
          </CommonPageSection>
        </CommonPageContainer>
      </main>
    </>
  );
}
