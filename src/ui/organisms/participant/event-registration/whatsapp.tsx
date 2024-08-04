import { Alert, AlertDescription, AlertTitle } from "@/ui/atoms/alert";
import { FormButton } from "@/ui/atoms/form-button";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

interface Props {
  isPaymentAccepted: boolean;
  groupLink: string;
}

export default function ParticipantEventRegistrationWhatsapp({
  isPaymentAccepted,
  groupLink,
}: Props) {
  return (
    <section className="container mt-6 md:mt-10">
      <div className="flex md:ml-10">
        <div className="inline-block bg-primary/10 px-4 py-2">
          <h2 className="text-sm font-semibold text-primary md:text-lg">
            Grup WhatsApp
          </h2>
        </div>
        {/* <div className="flex items-center bg-green-500/10 px-4 py-2">
          <p className="flex items-center gap-1 text-sm font-semibold text-green-500 md:text-base">
            <CheckCircle weight="duotone" className="text-[1em]" /> Selesai
          </p>
        </div> */}
      </div>
      <div className="bg-slate-900 p-4 shadow-lg md:p-6">
        <div className="max-w-xl space-y-4">
          {!isPaymentAccepted && (
            <Alert variant="warning">
              <AlertTitle>Perhatian!</AlertTitle>
              <AlertDescription>
                Silakan unggah bukti pembayaran dan tunggu konfirmasi dari
                panitia sebelum memasuki grup WhatsApp.
              </AlertDescription>
            </Alert>
          )}

          {isPaymentAccepted && (
            <>
              <div>
                <p>
                  Silakan bergabung ke grup{" "}
                  <span className="font-semibold text-primary">WhatsApp</span>{" "}
                  untuk informasi penting dari panitia Technofest.
                </p>
              </div>

              <div>
                <FormButton
                  type="submit"
                  className="w-full space-x-1 md:w-fit"
                  asChild
                >
                  <Link href={groupLink} target="_blank">
                    <WhatsappLogo weight="duotone" className="text-[1.5em]" />
                    <span>Join Grup</span>
                  </Link>
                </FormButton>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
