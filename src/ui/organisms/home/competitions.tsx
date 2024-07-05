import { Button } from "@/ui/atoms/button";
import { Card } from "@/ui/atoms/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/atoms/tabs";
import { CommonPageSection } from "@/ui/molecules/common-page-section";
import SectionHeader from "@/ui/molecules/section-header";
import {
  Aperture,
  FigmaLogo,
  ImageSquare,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function HomeCompetition() {
  return (
    <CommonPageSection className="container">
      <SectionHeader
        title="Kompetisi"
        subtitle="Kompetisi Tahun Ini"
        position="center"
      />
      <Tabs defaultValue="photography" className="mt-10">
        <TabsContent value="photography" className="md:h-[20rem]">
          <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-10 md:gap-y-0">
            <div className="flex items-center justify-center bg-primary/10 p-4 group-hover:bg-primary/20 md:aspect-square md:p-14">
              <Aperture
                weight="duotone"
                className="size-[4rem] text-primary/80 group-hover:text-primary md:size-[10rem]"
              />
            </div>
            <Card>
              <h2 className="text-3xl font-semibold">Fotografi</h2>
              <p className="mt-4 font-light text-slate-400 md:text-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                optio voluptates facilis deleniti blanditiis architecto
                voluptate? Expedita doloribus itaque, fugit odio aut, ab
                cupiditate debitis vero, officiis magni aliquam nulla!
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-6 w-full md:w-auto"
              >
                <Link href="/events/photography">More Info</Link>
              </Button>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="uiux" className="md:h-[20rem]">
          <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-10 md:gap-y-0">
            <div className="flex items-center justify-center bg-primary/10 p-4 group-hover:bg-primary/20 md:aspect-square md:p-14">
              <FigmaLogo
                weight="duotone"
                className="size-[4rem] text-primary/80 group-hover:text-primary md:size-[10rem]"
              />
            </div>
            <Card>
              <h2 className="text-3xl font-semibold">UI/UX</h2>
              <p className="mt-4 font-light text-slate-400 md:text-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                optio voluptates facilis deleniti blanditiis architecto
                voluptate? Expedita doloribus itaque, fugit odio aut, ab
                cupiditate debitis vero, officiis magni aliquam nulla!
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-6 w-full md:w-auto"
              >
                <Link href="/events/uiux">More Info</Link>
              </Button>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="poster" className="md:h-[20rem]">
          <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-10 md:gap-y-0">
            <div className="flex items-center justify-center bg-primary/10 p-4 group-hover:bg-primary/20 md:aspect-square md:p-14">
              <ImageSquare
                weight="duotone"
                className="size-[4rem] text-primary/80 group-hover:text-primary md:size-[10rem]"
              />
            </div>
            <Card>
              <h2 className="text-3xl font-semibold">Poster</h2>
              <p className="mt-4 font-light text-slate-400 md:text-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                optio voluptates facilis deleniti blanditiis architecto
                voluptate? Expedita doloribus itaque, fugit odio aut, ab
                cupiditate debitis vero, officiis magni aliquam nulla!
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-6 w-full md:w-auto"
              >
                <Link href="/events/poster">More Info</Link>
              </Button>
            </Card>
          </div>
        </TabsContent>
        <TabsList className="mx-auto mt-6 grid max-w-2xl grid-cols-3 md:mt-10">
          <TabsTrigger value="photography">Fotografi</TabsTrigger>
          <TabsTrigger value="uiux">UI/UX</TabsTrigger>
          <TabsTrigger value="poster">Poster</TabsTrigger>
        </TabsList>
      </Tabs>
    </CommonPageSection>
  );
}
