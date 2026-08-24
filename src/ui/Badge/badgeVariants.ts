import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-semibold transition-colors select-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary/10 text-primary border border-primary/20",
        primary:
          "bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/30",
        secondary:
          "bg-muted text-muted-foreground border border-border",
        success:
          "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30",
        warning:
          "bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30",
        destructive:
          "bg-rose-500/15 text-rose-700 dark:text-rose-400 border border-rose-500/30",
        cyan:
          "bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30",
        glass:
          "bg-white/10 dark:bg-slate-900/60 backdrop-blur-md text-foreground border border-white/20 dark:border-sky-500/20 shadow-sm",
        glow:
          "bg-gradient-to-r from-sky-500/20 to-cyan-500/20 text-sky-600 dark:text-sky-300 border border-sky-400/40 shadow-sm shadow-sky-500/20",
        outline:
          "text-foreground border border-border",
      },
      size: {
        sm: "px-2 py-0.5 text-[10px] rounded-md",
        md: "px-2.5 py-1 text-xs rounded-lg",
        lg: "px-3 py-1.5 text-sm rounded-xl font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);
