import { Alert, AlertDescription, AlertTitle } from "@/ui/atoms/alert";

export default function ParticipantEventRegistrationSubmission() {
  return (
    <section className="container mt-6 md:mt-10">
      <div className="inline-block bg-primary/10 px-4 py-2 md:ml-10">
        <h2 className="text-sm font-semibold text-primary md:text-lg">
          Submission
        </h2>
      </div>
      <div className="bg-slate-900 p-4 shadow-lg md:p-6">
        <div className="max-w-xl">
          <Alert variant="warning">
            <AlertTitle>Perhatian!</AlertTitle>
            <AlertDescription>
              Silakan unggah bukti pembayaran dan tunggu konfirmasi dari panitia
              sebelum mengumpulkan submission.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  );
}
