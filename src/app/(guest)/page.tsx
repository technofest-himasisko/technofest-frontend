import { isComingSoon } from "@/lib/utils";
import CommonPageContainer from "@/ui/molecules/common-page-container";
import ComingSoon from "@/ui/organisms/coming-soon";
import HomeAbout from "@/ui/organisms/home/about";
import HomeAgenda from "@/ui/organisms/home/agenda";
import HomeCompetition from "@/ui/organisms/home/competitions";
import HomeCountDown from "@/ui/organisms/home/count-down";
import HomeFaqs from "@/ui/organisms/home/faqs";
import HomeHero from "@/ui/organisms/home/hero";
import HomeMediaPartners from "@/ui/organisms/home/media-partners";
import HomeSeminar from "@/ui/organisms/home/seminar";
import HomeSponsors from "@/ui/organisms/home/sponsors";

export default function Page() {
  if (isComingSoon()) {
    return <ComingSoon />;
  }

  return (
    <CommonPageContainer>
      <HomeHero />
      <HomeAbout />
      <HomeCompetition />
      <HomeSeminar />
      <HomeAgenda />
      <HomeCountDown />
      <HomeFaqs />
      <HomeSponsors />
      <HomeMediaPartners />
    </CommonPageContainer>
  );
}
