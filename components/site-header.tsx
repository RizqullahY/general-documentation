"use client"

import Link from "next/link";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { CodeXml  } from "lucide-react";
// import AlgoliaSearch from "./search-bar";
import { useRouter } from "next/navigation"; 

export function SiteHeader() {
  const router = useRouter(); // Untuk melakukan navigasi programatik jika diperlukan
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2 ml-5">
            <CodeXml className="h-6 w-6" />
            <span className="font-bold">raflyasliGalek</span>
          </Link>
          <div className="hidden md:block">
            <MainNav />
          </div>
          {/* <searchBox /> */}
          {/* <AlgoliaSearch /> */}
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ModeToggle />
            <div className="lg:hidden">
              <MobileNav />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
