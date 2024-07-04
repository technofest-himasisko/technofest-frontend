import { cn } from "@/lib/utils";
import Image from "next/image";
import { goodTimes } from "../fonts";
import Link from "next/link";
import config from "@/config";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  // if (isComingSoon()) {
  //   return undefined;
  // }

  return (
    <footer className="mt-10 flex flex-col bg-primary/10">
      <div className="relative overflow-hidden">
        <div className="container flex flex-col gap-x-20 py-10 md:flex-row">
          <div>
            <Image
              src="/images/tf2024_Regular.svg"
              alt=""
              width={72}
              height={72}
            />
            <p
              className={cn(goodTimes.className, "mt-2 flex flex-col text-xs")}
            >
              <span className="text-slate-100">Technofest</span>
              <span className="text-primary">2024</span>
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Technology Festival 2024. Himpunan Mahasiswa Jurusan Sistem
              Komputer Universitas Sriwijaya.
            </p>
          </div>

          <div
            className={`mt-10 grid w-full grid-cols-2 justify-between gap-6 md:mt-0 md:grid-cols-3`}
          >
            {config.footerNavigations.map((navigation, key) => (
              <div key={key}>
                <p className="text-lg font-bold uppercase text-primary md:text-xl">
                  {navigation.label}
                </p>
                <ul className="mt-4 flex flex-col gap-y-2">
                  {navigation.children.map((subnavigation, subkey) => (
                    <li key={subkey}>
                      <Link
                        href={subnavigation.href}
                        className="font-medium text-slate-300 underline decoration-transparent decoration-2 hover:decoration-primary"
                        target={subnavigation.target || "_self"}
                      >
                        <span>{subnavigation.label}</span>{" "}
                        {subnavigation.target === "_blank" && (
                          <ArrowSquareOut className="inline" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Image
          src="/images/tf2024_Frame.svg"
          alt=""
          width={800}
          height={800}
          className="absolute -bottom-[40%] -right-[40%] -z-10 scale-x-[-1] opacity-20 md:bottom-0 md:right-0"
        />
      </div>
      <div className="bg-slate-950/40 py-6 text-center text-xs text-white/30 md:text-sm">
        <p className="container">
          © Copyright {new Date().getFullYear()} - Built by Tech Team at
          Himasisko
        </p>
      </div>
    </footer>
  );
}
