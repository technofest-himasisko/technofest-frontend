import { EventType } from "@/lib/definitions/constants";
import { Competition, Event } from "@/lib/definitions/technofest";
import { eventsGetAll } from "@/lib/fetch/v2";
import { codenameToIcon } from "@/lib/utils/converter";
import { Button } from "@/ui/atoms/button";
import { Card } from "@/ui/atoms/card";
import Reveal from "@/ui/atoms/reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/atoms/tabs";
import { CommonPageSection } from "@/ui/molecules/common-page-section";
import SectionHeader from "@/ui/molecules/section-header";
import {
  Aperture,
  FigmaLogo,
  ImageSquare,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default async function HomeCompetition() {
  const events = await eventsGetAll();

  console.log(events);

  const competitions: Event<Competition>[] = events.data?.filter(
    (event) => event.eventable_type === EventType.COMPETITION,
  ) as Event<Competition>[];

  return (
    <CommonPageSection className="container">
      <Reveal width="100%">
        <SectionHeader
          title="Kompetisi"
          subtitle="Kompetisi Tahun Ini"
          position="center"
        />
      </Reveal>
      <Tabs
        defaultValue={competitions[0].codename}
        className="mt-10 flex flex-col-reverse gap-y-6 md:flex-col md:gap-y-10"
      >
        <Reveal width="100%">
          {competitions.map((competition) => {
            const Icon = codenameToIcon(competition.codename);

            return (
              <TabsContent
                key={competition.id}
                value={competition.codename}
                className="duration-300 animate-in fade-in slide-in-from-bottom-4 md:h-[20rem]"
              >
                <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-10 md:gap-y-0">
                  <div className="flex items-center justify-center bg-primary/10 p-4 group-hover:bg-primary/20 md:aspect-square md:p-14">
                    <Icon
                      weight="duotone"
                      className="size-[4rem] text-primary/80 group-hover:text-primary md:size-[10rem]"
                    />
                  </div>
                  <Card>
                    <h2 className="text-3xl font-semibold">
                      {competition.name}
                    </h2>
                    <p className="mt-4 font-light text-slate-400 md:text-xl">
                      {competition.description}
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="mt-6 w-full md:w-auto"
                    >
                      <Link href={`/events/${competition.codename}`}>
                        More Info
                      </Link>
                    </Button>
                  </Card>
                </div>
              </TabsContent>
            );
          })}
        </Reveal>
        <Reveal width="100%">
          <TabsList className="mx-auto grid w-full max-w-2xl grid-cols-3">
            {competitions.map((competition) => (
              <TabsTrigger key={competition.id} value={competition.codename}>
                {competition.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Reveal>
      </Tabs>
    </CommonPageSection>
  );
}
