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
import Image from "next/image";

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
      <div className="relative mt-20 overflow-hidden bg-gradient-to-b from-primary/5 to-secondary/20 pb-20 md:mt-40 md:pb-40">
        <HomeAgenda />
        <HomeCountDown />

        <div className="absolute -inset-x-[10rem] -bottom-[50%] -z-10 mx-auto md:inset-x-0 md:-bottom-[70%]">
          <Image
            src="/images/tf2024_Frame.svg"
            alt=""
            width={1000}
            height={1000}
            className="mx-auto rotate-90 opacity-10 md:w-[60vw]"
          />
        </div>
      </div>
      <HomeFaqs />
      <HomeSponsors />
      <HomeMediaPartners />
    </CommonPageContainer>
  );
}
