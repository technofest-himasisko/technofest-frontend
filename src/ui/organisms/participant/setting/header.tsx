import CommonPageHeader from "@/ui/molecules/common-page-header";
import { Suspense } from "react";

export default function ParticipantSettingHeader() {
  return (
    <header>
      <Suspense fallback={<p className="text-xl text-white">Loading...</p>}>
        <CommonPageHeader title="Setting" />
      </Suspense>
    </header>
  );
}
