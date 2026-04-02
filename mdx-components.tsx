import type { MDXComponents } from "mdx/types";
import React from "react";
import Callout from "@/components/Callout";
import MDXImage from "./components/MdxImage";
import CopyButton from "@/components/copyButton";
import Link from "next/link";
import { ToolCard } from "@/components/Card";
function Pre({ children }: { children: React.ReactNode }) {
  let code = "";

  try {
    const child = children as any;

    if (typeof child === "string") {
      code = child;
    } else if (child?.props?.children) {
      code =
        typeof child.props.children === "string"
          ? child.props.children
          : child.props.children.join("");
    }
  } catch (e) {
    console.error("Code extraction failed", e);
  }

  return (
    <div className="relative group my-6">
      <pre className="bg-zinc-300 text-zinc-900 p-4 rounded-2xl overflow-x-auto text-sm leading-6">
        {children}
      </pre>

      <CopyButton code={code} />
    </div>
  );
}

export function useMDXComponents(
  components: MDXComponents
): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-5xl font-bold mb-6 text-amber-600 ">
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold  my-5 pb-2">
        {children}
      </h2>
    ),

    p: ({ children }) => (
      <p className="my-3 leading-7 text-zinc-400 ">
        {children}
      </p>
    ),

    ul: ({ children }) => (
      <ul className="list-disc ml-6 my-3 space-y-1 text-zinc-400">
        {children}
      </ul>
    ),

    ol: ({ children }) => (
      <ol className="list-decimal ml-6 my-3 space-y-1">
        {children}
      </ol>
    ),

    li: ({ children }) => <li>{children}</li>,
    a: ({ href, children }) => {
  const isExternal = href?.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-600 underline underline-offset-4 hover:decoration-2"
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href as string}
      className="text-indigo-600 underline underline-offset-4 hover:decoration-2"
    >
      {children}
    </Link>
  );
},
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-amber-500 pl-4 italic text-zinc-600 my-4">
        {children}
      </blockquote>
    ),
    Callout: Callout, // custom callout component
    MDXImage: MDXImage, // custom image component
    ToolCard: ToolCard,
    pre: Pre,   // code blocks

    ...components,
  };
}