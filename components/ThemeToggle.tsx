"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:ring-2 ring-zinc-500 transition-all"
      aria-label="Toggle Theme"
    >
      {resolvedTheme === "dark" ? (
        < Moon size={20} className="text-yellow-400" />
      ) : (
        <Sun size={20} className="text-zinc-400" />
      )}
    </button>
  );
}