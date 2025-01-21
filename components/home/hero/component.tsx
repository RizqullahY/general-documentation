import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
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
              placeholder="Search..."
              type="search"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero;
