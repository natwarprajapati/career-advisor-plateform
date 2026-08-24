import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        primary:
          "bg-primary from-sky-500 to-cyan-500 text-white shadow-md shadow-sky-500/20 hover:shadow-lg hover:shadow-cyan-500/30 hover:brightness-105",
        secondary:
          "bg-muted text-foreground hover:bg-muted/80 border border-border/70",
        glow:
          "bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-cyan-500/40 hover:scale-[1.02] hover:brightness-110",
        glass:
          "bg-white/10 dark:bg-slate-900/60 backdrop-blur-xl border border-white/20 dark:border-sky-500/20 text-foreground hover:bg-white/20 dark:hover:bg-slate-800/80 hover:scale-[1.02] shadow-sm",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-muted hover:text-foreground hover:scale-[1.01]",
        ghost:
          "text-foreground hover:bg-muted/80 hover:text-foreground",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md hover:shadow-rose-500/20 hover:scale-[1.01]",
        link:
          "text-sky-500 underline-offset-4 hover:underline p-0 h-auto font-medium",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-8 px-3 text-xs rounded-lg",
        md: "h-10 px-4 py-2 text-sm",
        lg: "h-12 px-6 text-base rounded-xl",
        icon: "h-10 w-10 p-0 rounded-xl",
        "icon-sm": "h-8 w-8 p-0 rounded-lg",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  }
);
