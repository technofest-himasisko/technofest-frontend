import CommonPageContainer from "@/ui/molecules/common-page-container";
import EventCompetitionHeader from "@/ui/organisms/event/competition-header";
import EventContactPersons from "@/ui/organisms/event/contact-persons";
import EventCountdown from "@/ui/organisms/event/countdown";
import EventFaqs from "@/ui/organisms/event/faqs";
import EventRegister from "@/ui/organisms/event/register";
import EventSeminarDescription from "@/ui/organisms/event/seminar-description";
import EventSeminarHeader from "@/ui/organisms/event/seminar-header";
import { notFound } from "next/navigation";
import EventSeminarSpeakers from "@/ui/organisms/event/seminar-speakers";
import EventSeminarModerator from "@/ui/organisms/event/seminar-moderator";
import EventCompetitionAgenda from "@/ui/organisms/event/competition-agenda";

export default function Page({ params }: { params: { codename: string } }) {
  if (["uiux", "poster", "photography"].includes(params.codename)) {
    return (
      <CommonPageContainer>
        <EventCompetitionHeader />
        <div className="mt-20 bg-gradient-to-b from-primary/5 to-secondary/20 pb-20 md:mt-40 md:pb-40">
          <EventCompetitionAgenda />
          <div className="pt-10 md:pt-20">
            <EventCountdown />
          </div>
        </div>
        <EventRegister />
        <EventContactPersons />
        <EventFaqs />
      </CommonPageContainer>
    );
  } else if (params.codename === "seminar") {
    return (
      <CommonPageContainer>
        <EventSeminarHeader />
        <EventSeminarDescription />
        <EventSeminarSpeakers />
        <EventSeminarModerator />
        <div className="mt-20 bg-gradient-to-b from-primary/5 to-secondary/20 py-20 md:py-40">
          <EventCountdown />
        </div>
        <EventRegister />
        <EventContactPersons />
        <EventFaqs />
      </CommonPageContainer>
    );
  } else {
    return notFound();
  }
}
