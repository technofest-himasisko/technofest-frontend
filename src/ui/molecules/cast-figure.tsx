import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function CastFigure() {
  return (
    <figure className="group relative flex aspect-[3/4] h-[26rem] flex-col justify-end overflow-hidden border border-primary/10 bg-gradient-to-b from-primary/25 to-secondary/10 to-60% transition duration-300 hover:border-primary/70">
      <div className="flex h-full flex-col items-center justify-start pb-10">
        <Image
          src="/images/kemahyanto.png"
          alt=""
          width={400}
          height={400}
          className="h-full w-full object-cover"
        />
        <figcaption className="absolute -bottom-[72%] h-full w-full bg-slate-950/90 p-5 text-left backdrop-blur transition-all duration-300 group-hover:bottom-0">
          <h3 className="text-xl font-semibold uppercase md:text-3xl">
            Kemahyanto Exaudi
          </h3>
          <p className="text-xs font-medium text-primary md:text-sm">
            Dosen Fasilkom Unsri Bidang Sistem Embedded dan Internet of Things
          </p>
          <div className="mt-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <p className="font-light text-slate-400">
              Kemahyanto Exaudi adalah dosen di Fakultas Ilmu Komputer
              Universitas Sriwijaya, dengan fokus pada Sistem Embedded dan
              Internet of Things. Ia memiliki latar belakang pendidikan dalam
              bidang Sistem Komputer. Ia juga terlibat dalam berbagai penelitian
              inovatif, termasuk dalam pengembangan sistem berbasis IoT.
            </p>
            {/* <p className="mt-4">
              <Link
                href=""
                className="flex flex-row items-center gap-x-1 font-semibold hover:underline"
                target="_blank"
              >
                <span>LinkedIn</span>
                <ArrowSquareOut />
              </Link>
            </p> */}
          </div>
        </figcaption>
      </div>

      <div className="absolute -bottom-[100%] -right-[100%] -z-10 w-[200%]">
        <Image
          src="/images/tf2024_Frame.svg"
          alt=""
          width={200}
          height={200}
          className="w-full opacity-20"
        />
      </div>

      <div className="absolute -left-[80%] -top-[80%] -z-10 w-[200%]">
        <Image
          src="/images/tf2024_Frame.svg"
          alt=""
          width={200}
          height={200}
          className="w-full opacity-20"
        />
      </div>
    </figure>
  );
}
