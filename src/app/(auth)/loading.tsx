import LoadingComp from "@/ui/atoms/loading";

export default function Loading() {
  return (
    <div className="absolute inset-x-0 bottom-[50%] mx-auto">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="h-fit w-fit">
          <LoadingComp />
        </div>
        <p className="text-gray-600">Loading</p>
      </div>
    </div>
  );
}
