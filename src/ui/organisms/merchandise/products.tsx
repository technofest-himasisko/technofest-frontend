import MerchandiseFigure from "@/ui/molecules/merchandise-figure";
import { Suspense } from "react";

export default function MerchandiseProducts() {
  return (
    <Suspense fallback={<p className="text-xl text-white">Loading...</p>}>
      <section className="container grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-6">
        <MerchandiseFigure />
        <MerchandiseFigure />
        <MerchandiseFigure />
        <MerchandiseFigure />
        <MerchandiseFigure />
        <MerchandiseFigure />
        <MerchandiseFigure />
        <MerchandiseFigure />
        <MerchandiseFigure />
      </section>
    </Suspense>
  );
}
