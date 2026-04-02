"use client";

import Image from "next/image";

export default function MDXImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <div className="my-8">
      <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={700}
          className="w-full h-auto object-cover"
        />
      </div>

      {caption && (
        <p className="text-center text-sm text-zinc-500 mt-2">
          {caption}
        </p>
      )}
    </div>
  );
}