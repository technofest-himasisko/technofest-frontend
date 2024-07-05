import { Card } from "@/ui/atoms/card";
import EventItem from "@/ui/molecules/event-item";

export default function ParticipantEventEventList() {
  return (
    <section className="container">
      <h2 className="text-2xl font-semibold">Event yang Tersedia</h2>

      <div className="mt-10 space-y-4">
        <EventItem
          color="lime"
          event={{
            name: "Fotografi",
            codename: "photography",
            price: 40000,
            type: "Individual",
            isRegistered: false,
          }}
        />
        <EventItem
          color="lime"
          event={{
            name: "UI/UX",
            codename: "uiux",
            price: 40000,
            type: "Tim - maks 4 peserta",
            isRegistered: true,
          }}
        />
        <EventItem
          color="lime"
          event={{
            name: "Poster",
            codename: "poster",
            price: 40000,
            type: "Individual",
            isRegistered: false,
          }}
        />
        <EventItem
          color="teal"
          event={{
            name: "Seminar",
            codename: "seminar",
            price: 40000,
            type: "Individual",
            isRegistered: false,
          }}
        />
      </div>
    </section>
  );
}
