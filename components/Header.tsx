import React from "react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import  Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-5xl">
        
        <Image
          src="/Keploy_Logo.png"
          alt="Keploy Logo"
          width={100}
          height={100}
        />

        <div className="flex justify-center items-center gap-4">
          <ThemeToggle />
          <Link
            href="https://github.com/keploy/keploy"
            target="_blank"
            className="p-2 bg-slate-100 text-zinc-800 hover:bg-slate-200 rounded-lg hover:ring-2 ring-zinc-500 transition-all"
          >
            <p>Star us on Github ⭐</p>
          </Link>
        </div>

      </div>
    </header>
  );
}
