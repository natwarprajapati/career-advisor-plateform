import { cva } from "class-variance-authority";

export const learnerBadgeVariants = cva(
  "relative inline-flex items-center transition-all duration-300 select-none font-sans",
  {
    variants: {
      status: {
        default:
          "bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/25 hover:bg-sky-500/15 hover:border-sky-500/40",
        "in-progress":
          "bg-gradient-to-r from-sky-500/15 via-cyan-500/15 to-sky-500/15 text-sky-700 dark:text-cyan-300 border border-cyan-400/40 shadow-sm shadow-cyan-500/20 hover:shadow-md hover:shadow-cyan-500/30",
        completed:
          "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/35 shadow-sm shadow-emerald-500/15 hover:bg-emerald-500/20",
        disabled:
          "bg-muted/40 text-muted-foreground/70 border border-border/40 opacity-60 cursor-not-allowed pointer-events-none",
      },
      size: {
        sm: "px-2.5 py-1 text-xs rounded-lg gap-1.5",
        md: "px-3.5 py-2 text-sm rounded-xl gap-2.5",
        lg: "px-4 py-3 text-base rounded-2xl gap-3",
        card: "p-4 sm:p-5 rounded-2xl gap-3 flex-col sm:flex-row items-start sm:items-center justify-between w-full backdrop-blur-xl",
      },
    },
    defaultVariants: {
      status: "default",
      size: "md",
    },
  }
);
