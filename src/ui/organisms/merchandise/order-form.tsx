import { Card } from "@/ui/atoms/card";
import OrderMerchandiseForm from "@/ui/forms/order-merchandise-form";
import { Suspense } from "react";

export default function MerchandiseOrderForm() {
  return (
    <Suspense fallback={<p className="text-xl text-white">Loading...</p>}>
      <section className="container mt-10">
        <Card>
          <h2 className="text-xl font-semibold md:text-2xl">Form Pre-Order</h2>
          <p className="text-xs text-slate-100/50 md:text-base">
            Pre-Order Merchandise Technofest 2024
          </p>
          <p className="text-xs text-slate-100/50 md:text-base">
            Pemesanan 14 Agustus - 6 September
          </p>

          <OrderMerchandiseForm />
        </Card>
      </section>
    </Suspense>
  );
}
