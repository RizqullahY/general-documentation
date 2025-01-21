"use client"

import Link from "next/link";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import AlgoliaSearch from "./search-bar";
import { cookies } from "next/headers";
import { useRouter } from "next/navigation"; // untuk navigasi programatik
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter(); // Untuk melakukan navigasi programatik jika diperlukan

  useEffect(() => {
    // Mengambil token dari cookies menggunakan document.cookie
    const cookies = document.cookie.split(';');
    let token = null;

    cookies.forEach(cookie => {
      const [name, value] = cookie.split('=');
      if (name.trim() === 'token') {
        token = value;
      }
    });

    // Cek apakah token ada
    if (token) {
      setIsLoggedIn(true); // Jika token ada, set status login ke true
    } else {
      setIsLoggedIn(false); // Jika tidak ada, set status login ke false
    }
  }, []);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2 ml-5">
            <BookOpen className="h-6 w-6" />
            <span className="font-bold">Docs</span>
          </Link>
          <div className="hidden md:block">
            <MainNav />
          </div>
          {/* <searchBox /> */}
          <AlgoliaSearch />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ModeToggle />
            <div className="hidden md:block">
              {isLoggedIn ? (
                <Link href="/api/auth/logout">
                  <Button variant="outline" className="bg-red-500 text-white">
                    Logout
                  </Button>
                </Link>
              ) : (
                <Link href="/login">
                  <Button variant="outline">Sign In</Button>
                </Link>
              )}
            </div>
            <div className="lg:hidden">
              <MobileNav />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
