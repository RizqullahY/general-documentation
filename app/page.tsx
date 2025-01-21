"use client";

import Particle from "@/components/particle";
import GetStarted from "@/components/home/get-started/component";
import Faq from "@/components/home/faq/component";
import Hero from "@/components/home/hero/component";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Particle />
      <Hero />
      <Faq />
      <GetStarted />
    </main>
  );
}
