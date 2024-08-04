import { EventType } from "@/lib/definitions/constants";
import { eventsGetByCodename } from "@/lib/fetch/v2";
import CommonPageContainer from "@/ui/molecules/common-page-container";
import EventCompetitionAgenda from "@/ui/organisms/event/competition-agenda";
import EventCompetitionHeader from "@/ui/organisms/event/competition-header";
import EventContactPersons from "@/ui/organisms/event/contact-persons";
import EventCountdown from "@/ui/organisms/event/countdown";
import EventFaqs from "@/ui/organisms/event/faqs";
import EventRegister from "@/ui/organisms/event/register";
import EventSeminarDescription from "@/ui/organisms/event/seminar-description";
import EventSeminarHeader from "@/ui/organisms/event/seminar-header";
import EventSeminarModerator from "@/ui/organisms/event/seminar-moderator";
import EventSeminarSpeakers from "@/ui/organisms/event/seminar-speakers";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { codename: string };
}) {
  const event = await eventsGetByCodename(params.codename);

  if (event.data?.eventable_type === EventType.COMPETITION) {
    return (
      <CommonPageContainer>
        <EventCompetitionHeader
          codename={event.data.codename}
          description={event.data.description!}
          name={event.data.name!}
        />
        <div className="mt-20 bg-gradient-to-b from-primary/5 to-secondary/20 pb-20 md:mt-40 md:pb-40">
          <EventCompetitionAgenda timelines={event.data.milestones!} />
          <div className="pt-10 md:pt-20">
            <EventCountdown />
          </div>
        </div>
        <EventRegister />
        <EventContactPersons contactPersons={event.data.contact_persons!} />
        <EventFaqs />
      </CommonPageContainer>
    );
  } else if (event.data?.eventable_type === EventType.SEMINAR) {
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
        <EventContactPersons contactPersons={event.data.contact_persons!} />
        <EventFaqs />
      </CommonPageContainer>
    );
  } else {
    return notFound();
  }
}
