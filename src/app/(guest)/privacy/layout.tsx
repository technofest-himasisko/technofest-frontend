import CommonPageContainer from "@/ui/molecules/common-page-container";
import { CommonPageSection } from "@/ui/molecules/common-page-section";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Readonly<Props>) {
  return (
    <CommonPageContainer>
      <CommonPageSection className="container">
        <article className="prose prose-slate prose-invert">{children}</article>
      </CommonPageSection>
    </CommonPageContainer>
  );
}
