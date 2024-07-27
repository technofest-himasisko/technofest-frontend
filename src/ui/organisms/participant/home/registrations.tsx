import { AvatarMedia } from "@/lib/definitions/web";
import { userGetAllRegistrations } from "@/lib/fetch/v2";
import { getAvatarCallbackLetter, toRegistrationId } from "@/lib/utils/common";
import { eventTypeToColor } from "@/lib/utils/converter";
import { Card } from "@/ui/atoms/card";
import EventTicket from "@/ui/molecules/event-ticket";
import { Suspense } from "react";

export default async function ParticipantHomeRegistrations() {
  const registrations = await userGetAllRegistrations();

  return (
    <Suspense fallback={<p className="text-xl text-white">Loading...</p>}>
      <section className="container mt-4 max-w-2xl">
        <Card className="flex flex-col gap-y-10">
          <h2 className="text-2xl font-semibold">Events</h2>
          <div className="space-y-4">
            {registrations.data?.length !== 0 ? (
              registrations.data?.map((registration) => (
                <EventTicket
                  key={registration.id}
                  color={eventTypeToColor(registration.event?.eventable_type!)}
                  eventRegistration={{
                    name: registration.event?.name!,
                    codename: registration.event?.codename!,
                    status: {
                      label: "Pending Pembayaran",
                      color: "blue",
                    },
                    uid: toRegistrationId(registration.uid),
                    userImages: registration.users?.map((user) => {
                      return {
                        src: user.avatar,
                        alt: user.name,
                        fallback: getAvatarCallbackLetter(user.name),
                      };
                    }) as AvatarMedia[],
                  }}
                />
              ))
            ) : (
              <div>losong</div>
            )}
          </div>
        </Card>
      </section>
    </Suspense>
  );
}
