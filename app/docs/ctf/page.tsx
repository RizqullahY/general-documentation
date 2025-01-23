"use client"

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CTFCategory {
  title: string;
  route: string;
  type: string;
}

const categories = [
  "Web Exploitation",
  "Cryptography",
  "Reverse Engineering",
  "Forensics",
  "General Skills",
  "Binary Exploitation",
  "OSINT",
  "Stegano",
  "Programming",
];

const typeColors: Record<string, string> = {
  "Web Exploitation": "bg-blue-500",
  Cryptography: "bg-purple-500",
  "Reverse Engineering": "bg-orange-500",
  Forensics: "bg-teal-500",
  "General Skills": "bg-gray-500",
  "Binary Exploitation": "bg-pink-500",
  OSINT: "bg-indigo-500",
  Stegano: "bg-cyan-500",
  Programming: "bg-green-700",
};

const dummyData = [
  { title: "Web Exploitation Challenge 1", route: "/ctf/web-exploitation-1", type: "Web Exploitation" },
  { title: "Cryptography Challenge 1", route: "/ctf/cryptography-1", type: "Cryptography" },
  { title: "Reverse Engineering Challenge 1", route: "/ctf/reverse-engineering-1", type: "Reverse Engineering" },
  { title: "Forensics Challenge 1", route: "/ctf/forensics-1", type: "Forensics" },
  { title: "General Skills Challenge 1", route: "/ctf/general-skills-1", type: "General Skills" },
  { title: "Binary Exploitation Challenge 1", route: "/ctf/binary-exploitation-1", type: "Binary Exploitation" },
  { title: "OSINT Challenge 1", route: "/ctf/osint-1", type: "OSINT" },
  { title: "Stegano Challenge 1", route: "/ctf/stegano-1", type: "Stegano" },
  { title: "Programming Challenge 1", route: "/ctf/programming-1", type: "Programming" },
  { title: "Programming Challenge 1", route: "/ctf/programming-1", type: "Programming" },
  { title: "Programming Challenge 1", route: "/ctf/programming-1", type: "Programming" },
  { title: "Programming Challenge 1", route: "/ctf/programming-1", type: "Programming" },
  { title: "Programming Challenge 1", route: "/ctf/programming-1", type: "Programming" },
  { title: "Programming Challenge 1", route: "/ctf/programming-1", type: "Programming" },
  { title: "Programming Challenge 1", route: "/ctf/programming-1", type: "Programming" },
  { title: "Programming Challenge 1", route: "/ctf/programming-1", type: "Programming" },
  { title: "Programming Challenge 1", route: "/ctf/programming-1", type: "Programming" },
  { title: "Programming Challenge 1", route: "/ctf/programming-1", type: "Programming" },
  { title: "Programming Challenge 1", route: "/ctf/programming-1", type: "Programming" },
  // Add more dummy data as needed
];

const CaptureTheFlag: React.FC = () => {
  const [ctfData, setCtfData] = useState<CTFCategory[]>([]);
  const [visibleItems, setVisibleItems] = useState(10);

  useEffect(() => {
    // Simulate async loading of data
    const loadData = async () => {
      setCtfData(dummyData);
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
        <p className="text-lg text-gray-600">
          Explore a variety of challenges to test your skills in cybersecurity.
          From web exploitation to reverse engineering, there's something for everyone.
        </p>
      </header>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ctfData.slice(0, visibleItems).map((ctf, index) => (
          <Card key={index} className="shadow-md">
            <CardHeader>
              <CardTitle>{ctf.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge className={`${typeColors[ctf.type]} mb-2`}>{ctf.type}</Badge>
              <p className="mt-2 text-blue-500">
                <a href={ctf.route} className="hover:underline">
                  Go to Challenge
                </a>
              </p>
            </CardContent>
          </Card>
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
