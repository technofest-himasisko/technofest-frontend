import { AvatarMedia } from "@/lib/definitions/web";
import { userGetAllRegistrations } from "@/lib/fetch/v2";
import {
  generateEventRegistrationStatus,
  getAvatarCallbackLetter,
  toRegistrationId,
} from "@/lib/utils/common";
import {
  eventTypeToColor,
  registrationStatusToColor,
  registrationStatusToLabel,
} from "@/lib/utils/converter";
import { Card } from "@/ui/atoms/card";
import EventTicket from "@/ui/molecules/event-ticket";
import { CardsThree, Pi } from "@phosphor-icons/react/dist/ssr";

export default async function ParticipantHomeRegistrations() {
  const registrations = await userGetAllRegistrations();

  return (
    <section className="container mt-4 max-w-2xl">
      <Card className="flex flex-col gap-y-6">
        <h2 className="flex items-center gap-1 text-xl font-semibold text-slate-400">
          <CardsThree weight="bold" className="text-[1em] text-primary" />
          Pendaftaran
        </h2>
        <div className="space-y-4">
          {registrations.data?.length !== 0 ? (
            registrations.data?.map((registration) => {
              const status = generateEventRegistrationStatus(registration);

              return (
                <EventTicket
                  key={registration.id}
                  color={eventTypeToColor(registration.event?.eventable_type!)}
                  eventRegistration={{
                    name: registration.event?.name!,
                    codename: registration.event?.codename!,
                    status: {
                      label: registrationStatusToLabel(status)!,
                      color: registrationStatusToColor(status)!,
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
              );
            })
          ) : (
            <div className="flex flex-col items-center">
              <Pi className="size-10 text-slate-700" />
              <h4 className="text-xl font-medium text-slate-700">Kosong</h4>
              <p className="font-light text-slate-700">
                Event yang Anda ikuti akan tampil di sini
              </p>
            </div>
          )}
        </div>
      </Card>
    </section>
  );
}
