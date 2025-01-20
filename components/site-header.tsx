import Link from "next/link";
import { MainNav } from "@/components/main-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6" />
            <span className="font-bold">Docs</span>
          </Link>
          <MainNav />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ModeToggle />
            <Button variant="outline">Sign In</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}