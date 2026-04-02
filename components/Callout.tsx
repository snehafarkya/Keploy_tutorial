import { Info, AlertTriangle, Lightbulb } from "lucide-react"

export default function Callout({ type = 'info', title, children }: any) {
  const icons = {
    info: <Info className="w-5 h-5 text-blue-500" />,
    warning: <AlertTriangle className="w-5 h-5 text-amber-500" />,
    idea: <Lightbulb className="w-5 h-5 text-indigo-500" />
  }

  const bg = {
    info: "bg-blue-50/50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800",
    warning: "bg-amber-50/50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800",
    idea: "bg-indigo-50/50 border-indigo-200 dark:bg-indigo-900/20 dark:border-indigo-800"
  }

  return (
    <div className={` flex items-center gap-2 p-5 border rounded-2xl ${bg[type as keyof typeof bg]}`}>
      <div className="shrink-0">{icons[type as keyof typeof icons]}</div>
      <div className="text-sm leading-relaxed">
        {title && <strong className="block  text-black mb-1 uppercase tracking-wider text-xs">{title}</strong>}
        <div className="text-slate-700 dark:text-slate-300">{children}</div>
      </div>
    </div>
  )
}