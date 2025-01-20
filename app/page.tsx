"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Code2, Lightbulb, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background pt-24 pb-12">
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
                Clear, concise, and comprehensive documentation for developers. Start building with confidence.
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

      {/* Features Grid */}
      <section className="container px-4 py-12 md:px-6 md:py-24">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="group relative rounded-lg border p-6 hover:border-primary">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-bold">Comprehensive Guides</h3>
            <p className="mt-2 text-muted-foreground">
              Detailed documentation covering everything from basic concepts to advanced techniques.
            </p>
            <ChevronRight className="absolute bottom-6 right-6 h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          <div className="group relative rounded-lg border p-6 hover:border-primary">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-bold">Code Examples</h3>
            <p className="mt-2 text-muted-foreground">
              Real-world examples and code snippets to help you implement features quickly.
            </p>
            <ChevronRight className="absolute bottom-6 right-6 h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          <div className="group relative rounded-lg border p-6 hover:border-primary">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-bold">Best Practices</h3>
            <p className="mt-2 text-muted-foreground">
              Learn industry-standard practices and optimization techniques.
            </p>
            <ChevronRight className="absolute bottom-6 right-6 h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/50">
        <div className="container px-4 py-12 md:px-6 md:py-24">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
              Dive into our documentation and start building amazing applications today.
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