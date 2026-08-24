import { cva } from "class-variance-authority";

export const cardVariants = cva("rounded-2xl transition-all duration-300 relative", {
  variants: {
    variant: {
      default:
        "bg-card text-card-foreground border border-border/80 shadow-sm",
      glass:
        "bg-card/85 dark:bg-slate-900/75 backdrop-blur-xl border border-border/80 dark:border-sky-500/20 shadow-md shadow-slate-950/5 dark:shadow-black/30",
      glow:
        "bg-card/90 dark:bg-slate-900/80 backdrop-blur-xl border border-sky-500/35 shadow-lg shadow-sky-500/15",
      flat:
        "bg-muted/40 border border-border/70 text-foreground",
    },
    hover: {
      none: "",
      lift: "hover:-translate-y-1 hover:shadow-xl hover:border-sky-500/40 hover:shadow-sky-500/10",
      glow: "hover:shadow-xl hover:shadow-cyan-500/20 hover:border-cyan-400/50",
      scale: "hover:scale-[1.01] hover:shadow-md",
    },
  },
  defaultVariants: {
    variant: "default",
    hover: "none",
  },
});
