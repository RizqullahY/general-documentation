"use client";

import React, { useEffect } from "react";
import { Search, Command } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const AlgoliaSearch = () => {
  const [open, setOpen] = React.useState(false);

  // Handle keyboard shortcuts
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "relative h-9 w-full justify-start text-sm text-muted-foreground sm:w-64 sm:pr-12 md:w-80 lg:w-96",
            "dark:bg-muted dark:hover:bg-muted/80"
          )}
        >
          <span className="hidden lg:inline-flex">Search documentation...</span>
          <span className="inline-flex lg:hidden">Search...</span>
          <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 sm:flex dark:bg-muted/80">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[850px] p-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center border-b px-3 dark:border-muted">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Input
              placeholder="Type to search..."
              className="h-12 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-transparent"
            />
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            {/* Search results would go here */}
            <div className="flex items-center justify-center py-16 text-muted-foreground">
              <Command className="h-8 w-8 mr-2" />
              <span>Type a command or search...</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AlgoliaSearch;
