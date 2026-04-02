import Image from "next/image";
import Link from "next/link";

type ToolCardProps = {
  title: string;
  description: string;
  href: string;
  logo: string;
};

export function ToolCard({ title, description, href, logo }: ToolCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 
      bg-gradient-to-br from-white/70 to-zinc-100/40 dark:from-zinc-900 dark:to-zinc-800/60 
      backdrop-blur-md hover:shadow-lg hover:shadow-indigo-500/10 
      transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start gap-4">
        <div className="flex items-center justify-center rounded-full  bg-white dark:bg-zinc-800">
          <Image src={logo} alt={title} width={24} height={24} className="object-contain w-6 h-6" />
        </div>

        <div>
          <h3 className="font-semibold text-base group-hover:text-indigo-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}