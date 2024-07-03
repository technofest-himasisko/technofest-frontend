import { isComingSoon } from "@/lib/utils";
import { Button } from "@/ui/atoms/button";
import ComingSoon from "@/ui/organisms/coming-soon";

export default function Page() {
  if (isComingSoon()) {
    return <ComingSoon />;
  }

  return (
    <div className="flex gap-x-4 p-40">
      <Button>Join Us</Button>
      <Button>Join Us</Button>
      <Button>Join Us</Button>
      <Button>Join Us</Button>
    </div>
  );
}
