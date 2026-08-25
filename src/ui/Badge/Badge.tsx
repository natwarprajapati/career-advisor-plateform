import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { badgeVariants } from "./badgeVariants";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
  icon?: React.ReactNode;
}

export function Badge({
  className,
  variant,
  size,
  dot,
  icon,
  children,
  ...props
}: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {dot && (
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            variant === "success" && "bg-emerald-500 animate-pulse",
            variant === "warning" && "bg-amber-500",
            variant === "destructive" && "bg-rose-500",
            variant === "cyan" && "bg-cyan-400 animate-pulse",
            variant === "primary" && "bg-sky-500 animate-pulse",
            (!variant || variant === "default" || variant === "secondary" || variant === "glass" || variant === "glow") &&
              "bg-sky-400"
          )}
        />
      )}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}
