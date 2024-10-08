import { auth } from "@/lib/auth/auth";
import CommonPageContainer from "@/ui/molecules/common-page-container";
import { CommonPageSection } from "@/ui/molecules/common-page-section";
import Header from "@/ui/organisms/header";
import { redirect } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default async function Layout({ children }: Readonly<Props>) {
  const session = await auth();

  if (session) {
    return redirect("/u/home");
  }

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
