"use client";

import useCopy from "@/lib/hooks/use-copy";
import { Alert, AlertDescription, AlertTitle } from "@/ui/atoms/alert";
import UploadPaymentProofForm from "@/ui/forms/upload-payment-proof-form";
import { Copy } from "@phosphor-icons/react";

export default function ParticipantEventRegistrationPayment() {
  const { copyToClipboard } = useCopy();

  function handleCopyClick() {
    copyToClipboard("081367436851");
  }

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

          <Alert variant="info">
            <AlertTitle>Info!</AlertTitle>
            <AlertDescription>
              Menunggu konfirmasi pembayaran dari panitia.
            </AlertDescription>
          </Alert>

          <Alert variant="danger">
            <AlertTitle>Kesalahan!</AlertTitle>
            <AlertDescription>
              Pembayaran ditolak oleh panitia.
            </AlertDescription>
          </Alert>

          <Alert variant="success">
            <AlertTitle>Berhasil!</AlertTitle>
            <AlertDescription>
              Pembayaran diterima oleh panitia.
            </AlertDescription>
          </Alert>

          <div>
            <p>
              Pembayaran sebesar{" "}
              <span className="font-semibold text-primary">Rp4.000.000,00</span>
            </p>
          </div>

          <div className="flex flex-col items-start gap-y-1">
            <div className="flex items-center gap-x-2">
              <span className="bg-brand-dana px-2 font-medium">Dana</span>
              <span className="font-semibold">082121222</span>
              <span className="text-slate-100/50">a.n. Marzuki</span>
              <button
                onClick={handleCopyClick}
                className="px-4 py-2 text-primary transition-colors hover:bg-primary/20"
              >
                <Copy />
              </button>
            </div>

            <div className="flex items-center gap-x-2">
              <span className="bg-brand-bni px-2 font-medium">BNI</span>
              <span className="font-semibold">082121222</span>
              <span className="text-slate-100/50">a.n. Marzuki</span>
              <button
                onClick={handleCopyClick}
                className="px-4 py-2 text-primary transition-colors hover:bg-primary/20"
              >
                <Copy />
              </button>
            </div>
          </div>

          <UploadPaymentProofForm />
        </div>
      </div>
    </section>
  );
}
