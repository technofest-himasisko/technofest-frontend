import LoadingComp from "@/ui/atoms/loading";

export default function Loading() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-2">
      <div className="h-fit w-fit">
        <LoadingComp />
      </div>
      <p className="text-gray-600">Loading</p>
    </div>
  );
}
