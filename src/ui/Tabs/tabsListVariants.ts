import { cva } from "class-variance-authority";

export const tabsListVariants = cva(
  "inline-flex items-center justify-center rounded-xl p-1 text-muted-foreground",
  {
    variants: {
      variant: {
        pills: "bg-muted/80 backdrop-blur-md border border-border/50",
        glass: "bg-card/70 dark:bg-slate-900/60 backdrop-blur-xl border border-border/50 dark:border-sky-500/20 shadow-sm",
        underline: "bg-transparent border-b border-border/80 rounded-none p-0 gap-6",
      },
    },
    defaultVariants: {
      variant: "pills",
    },
  }
);
