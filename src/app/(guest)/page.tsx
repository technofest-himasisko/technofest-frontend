import { isComingSoon } from "@/lib/utils/common";
import CommonPageContainer from "@/ui/molecules/common-page-container";
import ComingSoon from "@/ui/organisms/coming-soon";

import dynamic from "next/dynamic";
import Image from "next/image";

const HomeAbout = dynamic(() => import("@/ui/organisms/home/about"));
const HomeAgenda = dynamic(() => import("@/ui/organisms/home/agenda"));
const HomeCompetition = dynamic(
  () => import("@/ui/organisms/home/competitions"),
);
const HomeCountDown = dynamic(() => import("@/ui/organisms/home/countdown"));
const HomeFaqs = dynamic(() => import("@/ui/organisms/home/faqs"));
const HomeHero = dynamic(() => import("@/ui/organisms/home/hero"));
const HomeMediaPartners = dynamic(
  () => import("@/ui/organisms/home/media-partners"),
);
const HomeSeminar = dynamic(() => import("@/ui/organisms/home/seminar"));
const HomeSponsors = dynamic(() => import("@/ui/organisms/home/sponsors"));

export default function Page() {
  if (isComingSoon()) {
    return <ComingSoon />;
  }

  return (
    <CommonPageContainer>
      <HomeHero />
      <HomeAbout />
      <HomeCompetition />
      {/* <HomeSeminar /> */}
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
