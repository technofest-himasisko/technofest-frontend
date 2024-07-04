import { isComingSoon } from "@/lib/utils";
import ComingSoon from "@/ui/organisms/coming-soon";
import HomeAbout from "@/ui/organisms/home/about";
import HomeCountDown from "@/ui/organisms/home/count-down";
import HomeFaqs from "@/ui/organisms/home/faqs";
import HomeHero from "@/ui/organisms/home/hero";
import HomeSponsors from "@/ui/organisms/home/sponsors";

export default function Page() {
  if (isComingSoon()) {
    return <ComingSoon />;
  }

  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeCountDown />
      <HomeFaqs />
      <HomeSponsors />
    </>
  );
}
