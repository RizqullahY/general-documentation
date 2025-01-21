import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section className="relative bg-gradient-to-b from-background to-primary/5 pt-24 pb-12 flex justify-center">
      <div className="container px-4 py-12 md:px-6 md:py-24">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Find answers to the most common questions about our product and
            services.
          </p>
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold transition-transform hover:text-primary">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-muted-foreground">
              Yes. It adheres to the WAI-ARIA design pattern, ensuring
              accessibility for everyone.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-semibold transition-transform hover:text-primary">
              Is it styled?
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-muted-foreground">
              Yes. It comes with default styles that match the other
              components&apos; aesthetic, making it cohesive.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-semibold transition-transform hover:text-primary">
              Is it animated?
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-muted-foreground">
              Yes. It&apos;s animated by default, providing smooth transitions,
              but you can disable it if you prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
