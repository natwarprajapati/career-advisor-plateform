import * as React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "../Card";
import { Badge } from "../Badge";
import { cn } from "@/lib/utils";

export interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  subtitle?: string;
  className?: string;
  gradient?: "sky" | "cyan" | "emerald" | "amber" | "rose" | "purple";
  onClick?: () => void;
  ariaLabel?: string;
}

export function StatCard({
  title,
  value,
  icon,
  trend,
  subtitle,
  className,
  gradient = "sky",
  onClick,
  ariaLabel,
}: StatCardProps) {
  const gradientStyles = {
    sky: "from-sky-500/10 to-transparent border-sky-500/20 text-sky-500",
    cyan: "from-cyan-500/10 to-transparent border-cyan-500/20 text-cyan-500",
    emerald: "from-emerald-500/10 to-transparent border-emerald-500/20 text-emerald-500",
    amber: "from-amber-500/10 to-transparent border-amber-500/20 text-amber-500",
    rose: "from-rose-500/10 to-transparent border-rose-500/20 text-rose-500",
    purple: "from-purple-500/10 to-transparent border-purple-500/20 text-purple-500",
  };

  const iconBgStyles = {
    sky: "bg-sky-500/15 text-sky-500 border-sky-500/30",
    cyan: "bg-cyan-500/15 text-cyan-500 border-cyan-500/30",
    emerald: "bg-emerald-500/15 text-emerald-500 border-emerald-500/30",
    amber: "bg-amber-500/15 text-amber-500 border-amber-500/30",
    rose: "bg-rose-500/15 text-rose-500 border-rose-500/30",
    purple: "bg-purple-500/15 text-purple-500 border-purple-500/30",
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onClick();
    }
  };

  const computedAriaLabel = ariaLabel || `${title}: ${value}${subtitle ? `, ${subtitle}` : ""}`;

  return (
    <Card
      variant="glass"
      hover="lift"
      role={onClick ? "button" : "region"}
      tabIndex={onClick ? 0 : undefined}
      aria-label={computedAriaLabel}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={cn(
        "p-5 overflow-hidden transition-all duration-300 relative group select-none",
        onClick && "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gradient-to-bl blur-2xl opacity-40 transition-opacity group-hover:opacity-70 pointer-events-none",
          gradientStyles[gradient]
        )}
      />

      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {title}
          </p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground font-sans">
              {value}
            </span>
          </div>
        </div>
        {icon && (
          <div
            aria-hidden="true"
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border shadow-sm transition-transform duration-300 group-hover:scale-110",
              iconBgStyles[gradient]
            )}
          >
            {icon}
          </div>
        )}
      </div>

      {(trend || subtitle) && (
        <div className="mt-3 flex items-center gap-2 pt-2 border-t border-border/40">
          {trend && (
            <Badge
              size="sm"
              variant={trend.isPositive ? "success" : "destructive"}
              icon={
                trend.isPositive ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )
              }
            >
              {trend.value}
            </Badge>
          )}
          {subtitle && (
            <span className="text-xs text-muted-foreground truncate">{subtitle}</span>
          )}
        </div>
      )}
    </Card>
  );
}
