import { CommonPageSection } from "@/ui/molecules/common-page-section";
import SectionHeader from "@/ui/molecules/section-header";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function HomeSeminar() {
  return (
    <CommonPageSection className="container">
      <SectionHeader
        title="Seminar"
        subtitle="Our Speakers"
        position="center"
      />

      <div className="mt-10 flex flex-col items-center justify-center gap-y-10 md:flex-row md:gap-x-10 md:gap-y-0">
        <div className="group relative max-w-[20rem] overflow-hidden border border-primary/10 bg-gradient-to-b from-primary/25 to-secondary/10 to-60% transition duration-300 hover:border-primary/70">
          <div className="flex flex-col items-center">
            <div className="flex items-end justify-center px-8 pt-8">
              <Image
                src="https://doodleipsum.com/700/avatar-3?i=8e35093c1d72d06087e5d708e7bce941"
                alt=""
                width={200}
                height={200}
                className="w-full"
              />
            </div>
            <div className="absolute -bottom-[70%] h-full w-full bg-slate-950/90 p-5 text-left backdrop-blur transition-all duration-300 group-hover:bottom-0">
              <h3 className="text-xl font-semibold uppercase md:text-3xl">
                Mark Zuckebek
              </h3>
              <p className="text-xs font-medium text-primary md:text-sm">
                Founder of Facebuus and CEO of PT Margarin
              </p>
              <div className="mt-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <p className="font-light text-slate-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                  voluptates velit dolores corporis deleniti eum officiis animi
                  earum. Est aut explicabo sapiente exercitationem voluptatum
                  repellat dicta aliquid nesciunt numquam dolorum.
                </p>
                <p className="mt-4">
                  <Link
                    href=""
                    className="flex flex-row items-center gap-x-1 font-semibold hover:underline"
                    target="_blank"
                  >
                    <span>LinkedIn</span>
                    <ArrowSquareOut />
                  </Link>
                </p>
              </div>
            </div>
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
        </div>

        <div className="group relative max-w-[20rem] overflow-hidden border border-primary/10 bg-gradient-to-b from-primary/25 to-secondary/10 to-60% transition duration-300 hover:border-primary/70">
          <div className="flex flex-col items-center">
            <div className="flex items-end justify-center px-8 pt-8">
              <Image
                src="https://doodleipsum.com/700/avatar-3?i=5ff278e220eacb10b8e37efefef406a6"
                alt=""
                width={200}
                height={200}
                className="w-full"
              />
            </div>
            <div className="absolute h-full w-full bg-slate-950/90 p-5 text-left backdrop-blur transition-all duration-300 group-hover:bottom-0 md:-bottom-[70%]">
              <h3 className="text-xl font-semibold uppercase md:text-3xl">
                Mark Zuckebek
              </h3>
              <p className="text-xs font-medium text-primary md:text-sm">
                Founder of Facebuus and CEO of PT Margarin
              </p>
              <div className="mt-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <p className="font-light text-slate-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                  voluptates velit dolores corporis deleniti eum officiis animi
                  earum. Est aut explicabo sapiente exercitationem voluptatum
                  repellat dicta aliquid nesciunt numquam dolorum.
                </p>
                <p className="mt-4">
                  <Link
                    href=""
                    className="flex flex-row items-center gap-x-1 font-semibold hover:underline"
                    target="_blank"
                  >
                    <span>LinkedIn</span>
                    <ArrowSquareOut />
                  </Link>
                </p>
              </div>
            </div>
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
        </div>
      </div>
    </CommonPageSection>
  );
}
