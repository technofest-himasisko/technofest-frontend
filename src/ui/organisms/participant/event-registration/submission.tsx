import { Alert, AlertDescription, AlertTitle } from "@/ui/atoms/alert";
import UploadSubmissionForm from "@/ui/forms/upload-submission-form";
import { ArrowSquareOut, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

interface Props {
  isPaymentAccepted: boolean;
  eventName: string;
  submission?: string;
  registrationUid: string;
}

export default function ParticipantEventRegistrationSubmission({
  isPaymentAccepted,
  eventName,
  submission,
  registrationUid,
}: Props) {
  return (
    <section className="container mt-6 md:mt-10">
      <div className="flex md:ml-10">
        <div className="inline-block bg-primary/10 px-4 py-2">
          <h2 className="text-sm font-semibold text-primary md:text-lg">
            Submission
          </h2>
        </div>
        {submission && (
          <div className="flex items-center bg-green-500/10 px-4 py-2">
            <p className="flex items-center gap-1 text-sm font-semibold text-green-500 md:text-base">
              <CheckCircle weight="duotone" className="text-[1em]" /> Selesai
            </p>
          </div>
        )}
      </div>
      <div className="bg-slate-900 p-4 shadow-lg md:p-6">
        <div className="max-w-xl space-y-4">
          {submission && (
            <Alert variant="success">
              <AlertTitle>Berhasil!</AlertTitle>
              <AlertDescription>Submission berhasil diunggah.</AlertDescription>
            </Alert>
          )}

          {!isPaymentAccepted && (
            <Alert variant="warning">
              <AlertTitle>Perhatian!</AlertTitle>
              <AlertDescription>
                Silakan unggah bukti pembayaran dan tunggu konfirmasi dari
                panitia sebelum mengumpulkan submission.
              </AlertDescription>
            </Alert>
          )}

          {isPaymentAccepted && !submission && (
            <UploadSubmissionForm
              eventName={eventName}
              registrationUid={registrationUid}
            />
          )}

          {submission && (
            <Link
              href={submission}
              target="_blank"
              className="flex items-center gap-x-1 text-sm text-primary hover:underline"
            >
              <span>Lihat unggahan</span> <ArrowSquareOut />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
