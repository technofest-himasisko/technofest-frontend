import EventTicket from "@/ui/molecules/event-ticket";

export default function ParticipantHomeEvents() {
  return (
    <section className="container mt-10 max-w-2xl px-0 md:px-[1.5rem]">
      <div className="bg-primary/10 px-[1.5rem] py-8">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-center text-2xl font-semibold">Events</h2>
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
        </div>
      </div>
    </section>
  );
}
