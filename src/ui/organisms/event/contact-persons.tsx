import {
  Competition,
  ContactPerson,
  Event,
  Seminar,
} from "@/lib/definitions/technofest";
import { Card } from "@/ui/atoms/card";
import Reveal from "@/ui/atoms/reveal";
import { CommonPageSection } from "@/ui/molecules/common-page-section";
import SectionHeader from "@/ui/molecules/section-header";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

interface Props {
  contactPersons: ContactPerson<Event<Competition | Seminar>>[];
}

export default function EventContactPersons({ contactPersons }: Props) {
  return (
    <CommonPageSection id="faqs" className="container">
      <Reveal width="100%">
        <SectionHeader
          title="Narahubung"
          subtitle="Contact Person"
          position="center"
        />
      </Reveal>

      <Reveal width="100%">
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {contactPersons.map((contactPerson) => (
            <Card
              key={contactPerson.id}
              className="flex flex-col items-center text-center"
            >
              <p className="text-xl font-semibold md:text-2xl">
                {contactPerson.name}
              </p>
              <div className="mt-2 flex gap-x-4 md:mt-4">
                <Link
                  href={`https://wa.me/${contactPerson.whatsapp}`}
                  className="flex w-full items-center justify-center space-x-1 text-center text-sm font-semibold hover:text-brand-whatsapp md:w-auto md:text-base"
                  target="_blank"
                >
                  <WhatsappLogo
                    weight="fill"
                    className="text-[1.5em] text-brand-whatsapp"
                  />
                  <span>{contactPerson.whatsapp}</span>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Reveal>
    </CommonPageSection>
  );
}
