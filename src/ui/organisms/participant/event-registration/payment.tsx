import { PaymentStatus, TeamStatus } from "@/lib/definitions/constants";
import { EventRegistrationPayment } from "@/lib/definitions/technofest";
import { formatToRupiah } from "@/lib/utils/common";
import { Alert, AlertDescription, AlertTitle } from "@/ui/atoms/alert";
import UploadPaymentProofForm from "@/ui/forms/upload-payment-proof-form";
import AccountNumber from "@/ui/molecules/account-number";
import { ArrowSquareOut, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

interface Props {
  payment: EventRegistrationPayment;
  price: number;
  registrationUid: string;
  confirmed: TeamStatus;
  isCurrentUserLeader: boolean;
}

export default function ParticipantEventRegistrationPayment({
  payment,
  price,
  registrationUid,
  confirmed,
}: Props) {
  return (
    <section className="container mt-6 md:mt-10">
      <div className="flex md:ml-10">
        <div className="inline-block bg-primary/10 px-4 py-2">
          <h2 className="text-sm font-semibold text-primary md:text-lg">
            Pembayaran
          </h2>
        </div>
        {payment.status === PaymentStatus.ACCEPTED && (
          <div className="flex items-center bg-green-500/10 px-4 py-2">
            <p className="flex items-center gap-1 text-sm font-semibold text-green-500 md:text-base">
              <CheckCircle weight="duotone" className="text-[1em]" /> Selesai
            </p>
          </div>
        )}
      </div>
      <div className="bg-slate-900 p-4 shadow-lg md:p-6">
        <div className="max-w-xl space-y-4">
          {confirmed === TeamStatus.UNCONFIRMED && (
            <Alert variant="warning">
              <AlertTitle>Perhatian!</AlertTitle>
              <AlertDescription>
                Silakan konfirmasi tim sebelum melakukan pembayaran.
              </AlertDescription>
            </Alert>
          )}

          {payment.proof && payment.status === PaymentStatus.NOT_CONFIRMED && (
            <Alert variant="info">
              <AlertTitle>Info!</AlertTitle>
              <AlertDescription>
                Menunggu panitia mengkonfirmasi pembayaran.
              </AlertDescription>
            </Alert>
          )}

          {payment.proof && payment.status === PaymentStatus.REJECTED && (
            <Alert variant="danger">
              <AlertTitle>Kesalahan!</AlertTitle>
              <AlertDescription>
                Pembayaran ditolak oleh panitia.
              </AlertDescription>
            </Alert>
          )}

          {payment.proof && payment.status === PaymentStatus.ACCEPTED && (
            <Alert variant="success">
              <AlertTitle>Berhasil!</AlertTitle>
              <AlertDescription>
                Pembayaran diterima oleh panitia.
              </AlertDescription>
            </Alert>
          )}

          {confirmed === TeamStatus.CONFIRMED &&
            !payment.proof &&
            payment.status !== PaymentStatus.ACCEPTED && (
              <>
                <div>
                  <p>
                    Pembayaran sebesar{" "}
                    <span className="font-semibold text-primary">
                      {formatToRupiah(price)}
                    </span>
                  </p>
                </div>

                <div className="flex flex-col items-start gap-y-1">
                  <AccountNumber
                    account="082121222"
                    name="Marzuki"
                    type="bni"
                    color="bni"
                  />
                </div>

                <UploadPaymentProofForm
                  paymentId={payment.id}
                  paymentProof={payment.proof || ""}
                  registrationUid={registrationUid}
                />
              </>
            )}

          {payment.proof && (
            <Link
              href={payment.proof}
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
