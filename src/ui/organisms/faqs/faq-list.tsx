import { Faq } from "@/lib/definitions/technofest";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/atoms/accordion";

interface Props {
  faqs: Faq[];
}

export default function FaqsFaqList({ faqs }: Props) {
  return (
    <section className="container">
      <Accordion type="single" collapsible className="mt-8 w-full">
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
