import {
  Competition,
  Event,
  Milestone,
  Seminar,
} from "@/lib/definitions/technofest";
import { Card } from "@/ui/atoms/card";
import Reveal from "@/ui/atoms/reveal";
import { CommonPageSection } from "@/ui/molecules/common-page-section";
import SectionHeader from "@/ui/molecules/section-header";

interface Props {
  timelines: Milestone<Event<Competition | Seminar>>[];
}

export default function EventCompetitionAgenda({ timelines }: Props) {
  return (
    <CommonPageSection className="container flex flex-col items-center gap-y-10">
      <Reveal width="100%">
        <SectionHeader
          title="Agenda"
          position="center"
          subtitle="Timeline Event UI/UX"
        />
      </Reveal>
      <div className="flex w-full max-w-2xl flex-col items-center">
        {timelines.map((timeline, index) => (
          <>
            <Reveal opacityOnly width="100%" key={timeline.id}>
              <Card className="text-center backdrop-blur">
                <p className="text-sm font-semibold text-primary md:text-base">
                  {timeline.date}
                </p>
                <h3 className="text-xl font-semibold uppercase md:text-3xl">
                  {timeline.name}
                </h3>
                <p className="mt-2 font-light text-slate-400 md:mt-4 md:text-xl">
                  {timeline.description}
                </p>
              </Card>
            </Reveal>
            {timelines.length !== index + 1 && (
              <Reveal opacityOnly width="100%">
                <div className="mx-auto h-6 w-1 bg-primary" />
              </Reveal>
            )}
          </>
        ))}
      </div>
    </CommonPageSection>
  );
}
