"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ctfList } from "./data/ctfList";

interface CTFCategory {
  title: string;
  route: string;
  type: string;
}



const CaptureTheFlag: React.FC = () => {
  const [ctfData, setCtfData] = useState<CTFCategory[]>([]);
  const [visibleItems, setVisibleItems] = useState(6);

  useEffect(() => {
    const loadData = async () => {
      setCtfData(ctfList);
    };

    loadData();
  }, []);

  const loadMore = () => {
    setVisibleItems((prev) => prev + 10);
  };

  return (
    <div className="p-6">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Capture The Flag (CTF)</h1>
      </header>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center p-5">
        {ctfData.slice(0, visibleItems).map((ctf, index) => (
          <Link href={ctf.route}>
            <Card key={index} className="shadow-md transform transition-transform hover:scale-105 hover:rotate-1">
              <CardHeader>
                <CardTitle>{ctf.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className={`bg-primary mb-2`}>{ctf.type}</Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      {visibleItems < ctfData.length && (
        <div className="mt-8 text-center">
          <Button onClick={loadMore}>Load More</Button>
        </div>
      )}
    </div>
  );
};

export default CaptureTheFlag;
