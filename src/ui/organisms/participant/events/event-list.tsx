import { EventType } from "@/lib/definitions/constants";
import { Competition, Event, Seminar } from "@/lib/definitions/technofest";
import { userGetAllEvents } from "@/lib/fetch/v2";
import { generateEventRegistrationStatus } from "@/lib/utils/common";
import {
  eventTypeToColor,
  registrationStatusToColor,
  registrationStatusToLabel,
} from "@/lib/utils/converter";
import EventItem from "@/ui/molecules/event-item";

export default async function ParticipantEventEventList() {
  const events = await userGetAllEvents();

  if (!events.data) {
    return (
      <section className="container">
        <h2 className="text-2xl font-semibold">
          Tidak ada event yang Tersedia
        </h2>
      </section>
    );
  }

  const seminars: Event<Seminar>[] = events.data.filter(
    (event) => event.eventable_type === EventType.SEMINAR,
  ) as Event<Seminar>[];

  const competitions: Event<Competition>[] = events.data.filter(
    (event) => event.eventable_type === EventType.COMPETITION,
  ) as Event<Competition>[];

  return (
    <section className="container">
      <h2 className="text-2xl font-semibold">Event yang Tersedia</h2>
      <div className="mt-10 space-y-4">
        {/* {seminars.map((seminar) => (
          <EventItem
            key={seminar.codename}
            color={eventTypeToColor(seminar.eventable_type)}
            event={{
              name: seminar.name,
              codename: seminar.codename,
              price: seminar.price || 0,
              maxParticipant: 1,
              type: EventType.SEMINAR,
              isRegistered:
                seminar.event_registrations !== undefined &&
                seminar.event_registrations?.length > 0,
            }}
          />
        ))} */}

        {/* {competitions.map((competition) => (
          <EventItem
            key={competition.codename}
            color={eventTypeToColor(competition.eventable_type)}
            event={{
              name: competition.name,
              codename: competition.codename,
              price: competition.price || 0,
              maxParticipant: competition.eventable?.max_participants || 1,
              type: EventType.COMPETITION,
              isRegistered:
                competition.event_registrations !== undefined &&
                competition.event_registrations?.length > 0,
            }}
          />
        ))} */}
      </div>
    </section>
  );
}
