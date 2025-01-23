"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Swal from "sweetalert2";

interface Question {
  correctAnswer: string;
  question: string;
}

const questions: Question = {
  question: "JAM{Z4Al_QzFQaA==KJPVK6Q=43e}",
  correctAnswer: "CTF{M4Ny_C1PheR_Uz43E}",
};

/**
 * J - { = Caesar Chiper
 * Z - _ = ROT13
 * Q - == = BASE64
 * K - = = BASE32
 * 4 - } = Punycode
 */

export default function ManyChiper() {
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

    if (answer.trim() === questions.correctAnswer) {
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
        <h1 className="text-4xl font-bold text-center">
          Many Cipher & Encode Flag
        </h1>

        <div className="mt-5">
          <p className="text-base text-center">
            Flag ini di encode oleh beberapa metode seperti Caesar Cipher,
            ROT13, BASE64, BASE32, dan Punycode.
          </p>
          <p className="text-base text-center font-bold">
            {questions.question}
          </p>
        </div>

        {/* Dialog untuk memberikan hint */}
        <div className="mt-10 text-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">HINT</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>HINT</DialogTitle>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <pre>
                    {`
   * J - { = Caesar Cipher
   * Z - _ = ROT13
   * Q - == = BASE64
   * K - = = BASE32
   * 4 - } = Punycode`}
                  </pre>
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
              placeholder="CTF{...}"
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
