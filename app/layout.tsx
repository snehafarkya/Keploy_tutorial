import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TableOfContents } from "@/components/TableOfContents";
import { Geist } from "next/font/google";
import Header from "@/components/Header";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: "A Beginner-friendly Guide to Recording Go API Tests with Keploy",
    template: "%s | Keploy Quickstart Guide",
  },
  description:
    "A beginner-friendly, hands-on guide to recording and testing APIs using Keploy with Echo and SQL.",

  keywords: [
    "Keploy",
    "API testing",
    "Go Echo",
    "PostgreSQL",
    "DevRel",
    "Backend testing",
  ],

  authors: [{ name: "Sneha Farkya" }],
  creator: "Sneha Farkya",

  openGraph: {
    title: "A Beginner-friendly Guide to Recording Go API Tests with Keploy",
    description:
      "Learn how to record and test APIs automatically using Keploy with a real Echo + SQL app.",
    url: "https://your-domain.com", // update later
    siteName: "Keploy Guide",
    images: [
      {
        url: "/og-image.png", // 👈 you will add this
        width: 1200,
        height: 630,
        alt: "Keploy Guide Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Keploy Go-SQL Guide",
    description:
      "Record API calls and generate tests automatically using Keploy.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={`${geist.className} min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header/>
          
          <main className="container mx-auto max-w-5xl px-6 py-12 flex gap-10">
            <article className="prose prose-pre:bg-transparent prose-pre:p-0 prose-slate dark:prose-invert prose-headings:font-bold prose-a:text-indigo-600 max-w-none">
              {children}
            </article>
            <TableOfContents />
          </main>
          
          <footer className="border-t border-slate-200 dark:border-slate-800 py-8 text-center text-sm text-slate-500">
            Keploy Tutorial • 2026
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}