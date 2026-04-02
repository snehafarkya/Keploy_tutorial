"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function TableOfContents() {
  const pathname = usePathname();

  const [headings, setHeadings] = useState<
    { id: string; text: string }[]
  >([]);

  useEffect(() => {
    if (!pathname.startsWith("/tutorial")) return;

    const elements = Array.from(document.querySelectorAll("h2"));

    const mapped = elements.map((el) => {
      const id =
        el.id ||
        el.textContent!.toLowerCase().replace(/\s+/g, "-");

      el.id = id;

      return {
        id,
        text: el.textContent || "",
      };
    });

    setHeadings(mapped);
  }, [pathname]);

  // ❗ Hide completely if not tutorial page
  if (!pathname.startsWith("/tutorial")) return null;

  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-24">
        <p className="text-sm font-semibold mb-3">
          Table of contents
        </p>

        <ul className="space-y-2 text-sm text-zinc-500">
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className="hover:text-indigo-600 transition"
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}