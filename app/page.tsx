import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-64px)] flex items-center justify-center px-6">
      
      <div className="flex flex-col items-center text-center max-w-4xl">

        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/Keploy_Logo.png"
            alt="Keploy Logo"
            width={70}
            height={70}
            className="mx-auto"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Run and Record Go API Tests with{" "}
          <span className="text-amber-600">Keploy</span>
        </h1>
<div className="mt-8">
          <Image
            src="/images/keploy_image.png" 
            alt="Keploy Demo"
            width={800}
            height={450}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-lg"
          />
        </div>
        {/* Subtext */}
        <p className="mt-6 text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg">
          A beginner-friendly guide to testing Go APIs using real traffic.  
          No mocks. No manual setup. Just record and replay.
        </p>

        {/* CTA */}
        <div className="mt-10 flex gap-4">
          <Link
            href="/tutorial"
            className="px-6 py-3 rounded-xl bg-amber-600 text-white font-medium hover:bg-amber-500 transition"
          >
            Start Tutorial 
          </Link>

          <Link
            href="https://github.com/keploy/keploy"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            GitHub
          </Link>
        </div>
      </div>
    </main>
  );
}