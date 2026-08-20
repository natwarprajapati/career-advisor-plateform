import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const spinnerVariants = cva("animate-spin text-current", {
  variants: {
    size: {
      xs: "h-3.5 w-3.5",
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-12 w-12",
    },
    variant: {
      default: "text-foreground",
      primary: "text-sky-500",
      cyan: "text-cyan-400",
      white: "text-white",
      muted: "text-muted-foreground",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
});

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  label?: string;
}

export function Spinner({
  className,
  size,
  variant,
  label,
  ...props
}: SpinnerProps) {
  return (
    <div
      className={cn("inline-flex flex-col items-center justify-center gap-2", className)}
      {...props}
    >
      <Loader2 className={cn(spinnerVariants({ size, variant }))} />
      {label && (
        <span className="text-xs font-medium text-muted-foreground animate-pulse">
          {label}
        </span>
      )}
    </div>
  );
}

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-xl bg-muted/60 dark:bg-slate-800/60 backdrop-blur-sm",
        className
      )}
      {...props}
    />
  );
}
