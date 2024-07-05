import CommonPageContainer from "@/ui/molecules/common-page-container";
import { CommonPageSection } from "@/ui/molecules/common-page-section";
import Footer from "@/ui/organisms/footer";
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
            <Footer minimal />
          </CommonPageSection>
        </CommonPageContainer>
      </main>
    </>
  );
}
