"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Code2, Lightbulb, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background pt-24 pb-12 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Documentation That{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Empowers
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Clear, concise, and comprehensive documentation for developers.
                Start building with confidence.
              </p>
            </div>
            <div className="w-full max-w-2xl space-y-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  className="w-full bg-white pl-10 dark:bg-gray-950"
                  placeholder="Search documentation..."
                  type="search"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
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
                Yes. It&apos;s animated by default, providing smooth
                transitions, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Decorative Elements */}
          <div className="absolute inset-x-0 top-0 flex justify-center overflow-hidden pointer-events-none">
            <div className="w-[200px] h-[200px] bg-gradient-radial from-primary to-transparent opacity-10 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex justify-center overflow-hidden pointer-events-none">
            <div className="w-[300px] h-[300px] bg-gradient-radial from-primary/60 to-transparent opacity-5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background pt-24 pb-12 flex justify-center">
        <div className="container px-4 py-12 md:px-6 md:py-24">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
              Dive into our documentation and start building amazing
              applications today.
            </p>
            <Button size="lg" className="mt-4">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
