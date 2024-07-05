import { Alert, AlertDescription, AlertTitle } from "@/ui/atoms/alert";

export default function ParticipantEventRegistrationPayment() {
  return (
    <section className="container mt-6 md:mt-10">
      <div className="inline-block bg-primary/10 px-4 py-2 md:ml-10">
        <h2 className="text-sm font-semibold text-primary md:text-lg">
          Pembayaran
        </h2>
      </div>
      <div className="bg-slate-900 p-4 shadow-lg md:p-6">
        <div className="max-w-xl space-y-4">
          <Alert variant="warning">
            <AlertTitle>Perhatian!</AlertTitle>
            <AlertDescription>
              Silakan konfirmasi tim sebelum melakukan pembayaran.
            </AlertDescription>
          </Alert>

          <div className="">
            <p>Dana 082121222 a.n. Marzuki</p>
            <p>Dana 082121222 a.n. Marzuki</p>
          </div>
        </div>
      </div>
    </section>
  );
}
