import { Button } from "@/ui/atoms/button";
import { Copy, TrashSimple } from "@phosphor-icons/react/dist/ssr";

export default function ParticipantEventRegistrationActions() {
  return (
    <section className="container flex flex-col items-start justify-between gap-y-4 md:flex-row md:items-center md:gap-y-0">
      <div className="flex flex-row border border-primary/20 bg-primary/10">
        <p className="px-4 py-2 text-xl font-semibold md:text-3xl">
          ID: E-05390979
        </p>
        <button className="bg-primary/10 px-4 py-2 text-primary transition-colors hover:bg-primary/20">
          <Copy />
        </button>
      </div>

      <Button variant="danger" className="space-x-1 self-end">
        <TrashSimple weight="duotone" className="text-[1.5em]" />
        <span>Hapus Pendaftaran</span>
      </Button>
    </section>
  );
}
