import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva("rounded-2xl transition-all duration-300 relative", {
  variants: {
    variant: {
      default:
        "bg-card text-card-foreground border border-border/80 shadow-sm",
      glass:
        "bg-card/75 dark:bg-slate-900/60 backdrop-blur-xl border border-border/50 dark:border-sky-500/15 shadow-md shadow-slate-950/5 dark:shadow-black/20",
      glow:
        "bg-card/80 dark:bg-slate-900/70 backdrop-blur-xl border border-sky-500/30 shadow-lg shadow-sky-500/10",
      flat:
        "bg-muted/40 border border-border/60 text-foreground",
    },
    hover: {
      none: "",
      lift: "hover:-translate-y-1 hover:shadow-xl hover:border-sky-500/40 hover:shadow-sky-500/10",
      glow: "hover:shadow-xl hover:shadow-cyan-500/15 hover:border-cyan-400/50",
      scale: "hover:scale-[1.02] hover:shadow-lg",
    },
  },
  defaultVariants: {
    variant: "glass",
    hover: "none",
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function Card({
  className,
  variant,
  hover,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(cardVariants({ variant, hover }), className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-5 pb-3", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-lg font-bold leading-tight tracking-tight text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-xs text-muted-foreground leading-relaxed", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-5 pt-0 text-sm text-foreground", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center p-5 pt-0 border-t border-border/40 mt-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
