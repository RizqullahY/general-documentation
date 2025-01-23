"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"; // import button dari UI ShadCN
import { Input } from "@/components/ui/input"; // import input
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Swal from "sweetalert2";

export interface Question {
  question: string;
  correctAnswer: string;
  encodedFlag: string;
  hint: string;
}

export const questions: Question[] = [
  {
    question: "What is the flag for the Cryptography challenge?",
    correctAnswer: "123",
    encodedFlag: "Y3J5cHRve3RlY2VvZGluZ19pcyBmdW59",
    hint: "The flag is encoded in Base64. Try to decode it.",
  },
];

export default function Crypto() {
  const [answer, setAnswer] = useState<string>("");
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const currentQuestion = questions[0];
    if (answer.trim() === currentQuestion.correctAnswer) {
      Toast.fire({
        icon: "success",
        title: "Correct",
      });
    } else {
      Toast.fire({
        icon: "error",
        title: "Try Again",
      });
    }
  };

  return (
    <div className="container p-5 flex justify-center items-center min-h-screen">
      <div className="mx-auto max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center">Crypto CTF Challenge</h1>

        <div className="mt-5">
          <h2 className="text-2xl text-center">Apa itu Cryptography?</h2>
          <p className="text-sm text-center">
            Cryptography adalah seni dan ilmu untuk mengamankan komunikasi dan
            informasi dari pihak yang tidak berwenang. Dalam tantangan ini, Anda
            akan mencoba untuk memecahkan cipher yang digunakan untuk
            menyembunyikan informasi penting.
          </p>
        </div>

        <div className="mt-10 text-center">
          {/* Button untuk membuka dialog dengan petunjuk */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">HINT</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>HINT</DialogTitle>
                <DialogDescription>{questions[0].hint}</DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link" className="sr-only">
                    Flag Ter-encode
                  </Label>
                  <p>{questions[0].encodedFlag}</p>
                </div>
              </div>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Form untuk submit jawaban */}
        <div className="mt-10">
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <h3 className="text-xl text-center">Masukkan Jawaban Anda</h3>
            <Input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="px-4 py-2 border rounded w-full"
              placeholder="Masukkan flag yang sudah didekode"
            />
            <Button type="submit" className="w-full mt-4">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
