"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 flex items-center gap-1 
      opacity-0 group-hover:opacity-100 transition-all duration-200
      text-xs bg-zinc-600/80 backdrop-blur px-2 py-1 rounded-md 
      text-white hover:bg-zinc-700"
    >
      {copied ? (
        <span className="flex items-center gap-1 text-green-400">
          <Check className="w-3 h-3 animate-scale-in" />
        </span>
      ) : (
        <span className="flex items-center gap-1">
          <Copy className="w-3 h-3" />
        </span>
      )}
    </button>
  );
}