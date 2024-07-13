import CommonPageHeader from "@/ui/molecules/common-page-header";
import { Suspense } from "react";

export default function MerchandiseHeader() {
  return (
    <Suspense fallback={<p className="text-xl text-white">Loading...</p>}>
      <header>
        <CommonPageHeader title="Merchandise" />
      </header>
    </Suspense>
  );
}
