import { Alert, AlertDescription, AlertTitle } from "@/ui/atoms/alert";
import { SignIn } from "@phosphor-icons/react/dist/ssr";

export default function ParticipantEventRegistrationWhatsapp() {
  return (
    <section className="container mt-6 md:mt-10">
      <div className="inline-block bg-primary/10 px-4 py-2 md:ml-10">
        <h2 className="text-sm font-semibold text-primary md:text-lg">
          Grup WhatsApp
        </h2>
      </div>
      <div className="bg-slate-900 p-4 shadow-lg md:p-6">
        <div className="max-w-xl space-y-4">
          <Alert variant="warning">
            <AlertTitle>Perhatian!</AlertTitle>
            <AlertDescription>
              Silakan unggah bukti pembayaran dan tunggu konfirmasi dari panitia
              sebelum memasuki grup WhatsApp.
            </AlertDescription>
          </Alert>

          <div>
            <p>
              Silakan bergabung ke grup{" "}
              <span className="font-semibold text-primary">WhatsApp</span> untuk
              informasi penting dari panitia Technofest.
            </p>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full items-center justify-center space-x-1 bg-primary/20 px-2.5 py-2 text-center font-semibold text-primary hover:bg-primary/30 md:w-auto md:px-4"
            >
              <SignIn className="text-[1.5em]" />
              <span>Join grup</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
