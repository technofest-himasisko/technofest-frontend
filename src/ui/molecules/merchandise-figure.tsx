import { Minus, Plus } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function MerchandiseFigure() {
  return (
    <figure className="flex flex-col border border-primary/20 bg-primary/10">
      <Image
        src="/images/merchandise.webp"
        alt=""
        width={400}
        height={400}
        className="aspect-video bg-slate-900/40 object-cover"
      />
      <figcaption className="p-2">
        <h2 className="text-lg">Gantungan Kunci Acrylic: Lady Tifa</h2>
        <div className="flex flex-col">
          <div className="mt-1 flex gap-x-4 font-semibold">
            <p>
              <span className="text-3xl">8.000</span>
              <span className="text-primary">/pc</span>
            </p>
            <p>
              <span className="text-3xl">15.000</span>
              <span className="text-primary">/2 pcs</span>
            </p>
          </div>
          <div className="mt-2 flex items-center">
            <div className="flex h-10 grow items-center border border-primary/20 bg-primary/10 px-2 text-lg font-semibold">
              0
            </div>
            <div className="flex">
              <button className="h-10 border border-primary/20 px-2.5 text-primary hover:bg-primary/30 md:px-4">
                <Minus weight="bold" className="text-[1.5em]" />
              </button>
              <button
                type="submit"
                className="h-10 bg-primary/20 px-2.5 text-primary hover:bg-primary/30 md:px-4"
              >
                <Plus weight="bold" className="text-[1.5em]" />
              </button>
            </div>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
