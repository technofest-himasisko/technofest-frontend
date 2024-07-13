import { Suspense } from "react";

export default function ParticipantHomeAlerts() {
  return (
    <Suspense fallback={<p className="text-xl text-white">Loading...</p>}>
      <section></section>
    </Suspense>
  );
}
