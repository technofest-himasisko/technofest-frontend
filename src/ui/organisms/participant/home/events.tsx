import { Card } from "@/ui/atoms/card";
import EventTicket from "@/ui/molecules/event-ticket";
import { Suspense } from "react";

export default function ParticipantHomeEvents() {
  return (
    <Suspense fallback={<p className="text-xl text-white">Loading...</p>}>
      <section className="container mt-4 max-w-2xl">
        <Card className="flex flex-col gap-y-10">
          <h2 className="text-2xl font-semibold">Events</h2>
          <div className="space-y-4">
            <EventTicket
              color="lime"
              eventRegistration={{
                name: "UI/UX",
                codename: "uiux",
                status: {
                  label: "Pending Pembayaran",
                  color: "blue",
                },
                type: "Tim",
                uid: "E-031244",
                userImages: [
                  {
                    src: "https://github.com/shadcn.png",
                    alt: "",
                    fallback: "CN",
                  },
                  {
                    src: "https://github.com/shadcn.png",
                    alt: "",
                    fallback: "CN",
                  },
                  {
                    src: "https://github.com/shadcn.png",
                    alt: "",
                    fallback: "CN",
                  },
                ],
              }}
            />
            <EventTicket
              color="lime"
              eventRegistration={{
                name: "Fotografi",
                codename: "photography",
                status: {
                  label: "Submission Selesai",
                  color: "green",
                },
                type: "Individual",
                uid: "E-031243",
                userImages: [
                  {
                    src: "https://github.com/shadcn.png",
                    alt: "",
                    fallback: "CN",
                  },
                ],
              }}
            />
            <EventTicket
              color="teal"
              eventRegistration={{
                name: "Seminar",
                codename: "seminar",
                status: {
                  label: "Pending Pembayaran",
                  color: "blue",
                },
                type: "Tim",
                uid: "E-001212",
                userImages: [
                  {
                    src: "https://github.com/shadcn.png",
                    alt: "",
                    fallback: "CN",
                  },
                ],
              }}
            />
          </div>
        </Card>
      </section>
    </Suspense>
  );
}
