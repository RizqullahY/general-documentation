import React from 'react'
import { Button } from "@/components/ui/button";

const GetStarted = () => {
  return (
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
        <Button className="mt-4">
          Get Started
        </Button>
      </div>
    </div>
  </section>
  )
}

export default GetStarted
