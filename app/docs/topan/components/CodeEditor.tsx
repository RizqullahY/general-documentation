"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const THEMES = [
  { value: "vs-dark", label: "Dark" },
  { value: "light", label: "Light" },
];

export default function CodeEditor() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [theme, setTheme] = useState("vs-dark");

  const handleCodeChange = (value: string | undefined) => {
    setCode(value || "");
  };

  const handleRun = () => {
    setIsRunning(true);
    setOutput("");

    try {
      let output = "";
      const secureConsole = {
        log: (...args: any[]) => {
          output +=
            args
              .map((arg) =>
                typeof arg === "object"
                  ? JSON.stringify(arg, null, 2)
                  : String(arg)
              )
              .join(" ") + "\n";
        },
        error: (...args: any[]) => {
          output +=
            "Error: " +
            args
              .map((arg) =>
                typeof arg === "object"
                  ? JSON.stringify(arg, null, 2)
                  : String(arg)
              )
              .join(" ") +
            "\n";
        },
        warn: (...args: any[]) => {
          output +=
            "Warning: " +
            args
              .map((arg) =>
                typeof arg === "object"
                  ? JSON.stringify(arg, null, 2)
                  : String(arg)
              )
              .join(" ") +
            "\n";
        },
      };

      const secureEval = new Function("console", code);
      secureEval(secureConsole);

      setOutput(output || "Code executed successfully (no output)");
    } catch (error) {
      setOutput(
        `Error: ${error instanceof Error ? error.message : String(error)}`
      );
    } finally {
      setIsRunning(false);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "code.js"; // Always download as JavaScript
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="grid gap-4">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-4">
          <Select value={theme} onValueChange={setTheme}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select theme" />
            </SelectTrigger>
            <SelectContent>
              {THEMES.map((t) => (
                <SelectItem key={t.value} value={t.value}>
                  {t.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Button onClick={handleRun} disabled={isRunning} className="gap-2">
            <Play className="h-4 w-4" />
            {isRunning ? "Running..." : "Run"}
          </Button>
          <Button variant="outline" onClick={handleDownload} className="gap-2">
            <Download className="h-4 w-4" />
            Download
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 h-screen">
        {/* Editor di kiri */}
        <div className="flex flex-col gap-4 h-96">
          <Editor
            height="100%"
            defaultLanguage="javascript"
            language="javascript"
            theme={theme}
            value={code}
            onChange={handleCodeChange}
            options={{
              minimap: { enabled: true },
              fontSize: 14,
              lineNumbers: "on",
              roundedSelection: false,
              scrollBeyondLastLine: false,
              readOnly: false,
              automaticLayout: true,
            }}
          />
        </div>

        {/* Output di kanan */}
        <div className="flex flex-col gap-4 h-96">
          {output && (
            <div className="bg-black text-white p-4 font-mono text-sm overflow-auto">
              <pre>{output}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
