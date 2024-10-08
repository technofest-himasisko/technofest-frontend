"use client";

import useCopy from "@/lib/hooks/use-copy";
import { Card } from "@/ui/atoms/card";
import Link from "next/link";
import { Suspense } from "react";

export default function MerchandiseProvisions() {
  const { copyToClipboard } = useCopy();

  function handleCopyClick() {
    copyToClipboard("081367436851");
  }

  return (
    <Suspense fallback={<p className="text-xl text-white">Loading...</p>}>
      <section className="container mt-10">
        <Card>
          <div className="max-w-xl md:px-8">
            <h2 className="mb-8 text-xl font-semibold md:text-2xl">
              Ketentuan
            </h2>
            <ul className="mt-4 list-disc space-y-4 pl-4 font-light text-slate-400 md:text-xl">
              <li>
                Merchandise dapat diambil dan dibeli secara langsung pada 16
                September 2023 di Gedung Fasilkom lt. 7 Universitas Sriwijaya
                Bukit Palembang.
              </li>
              <li>
                Pembayaran dapat dilakukan melalui aplikasi Dana dengan nomor
                081367436851 a.n. Ika Putri Aprilia.
                <button
                  onClick={handleCopyClick}
                  className="block bg-primary px-2 py-1 text-sm font-medium text-slate-100 hover:bg-primary/90"
                >
                  Salin nomor Dana
                </button>
              </li>

              <li>
                Untuk informasi lebih lanjut, Kamu dapat menghubungi{" "}
                <Link href="#" className="text-primary hover:underline">
                  083802532272
                </Link>{" "}
                a.n. Ika Putri Aprilia.
              </li>
            </ul>
          </div>
        </Card>
      </section>
    </Suspense>
  );
}
