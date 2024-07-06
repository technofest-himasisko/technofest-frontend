import MerchandiseFigure from "@/ui/molecules/merchandise-figure";

export default function MerchandiseProducts() {
  return (
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
  );
}
