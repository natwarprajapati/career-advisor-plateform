import { cva } from "class-variance-authority";

export const alertVariants = cva(
  "relative w-full rounded-xl border p-4 text-sm backdrop-blur-md transition-all duration-200 flex items-start gap-3.5",
  {
    variants: {
      variant: {
        default: "bg-muted/70 text-foreground border-border",
        info: "bg-blue-500/10 text-blue-900 dark:text-blue-200 border-blue-500/30",
        success: "bg-emerald-500/10 text-emerald-900 dark:text-emerald-200 border-emerald-500/30",
        warning: "bg-amber-500/10 text-amber-900 dark:text-amber-200 border-amber-500/30",
        destructive: "bg-rose-500/10 text-rose-900 dark:text-rose-200 border-rose-500/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
