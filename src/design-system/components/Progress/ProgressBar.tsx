import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const progressVariants = cva(
  "relative w-full overflow-hidden rounded-full bg-muted/80 backdrop-blur-sm",
  {
    variants: {
      size: {
        sm: "h-1.5",
        md: "h-2.5",
        lg: "h-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface ProgressBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants> {
  value: number;
  max?: number;
  showValue?: boolean;
  label?: string;
  variant?: "primary" | "gradient" | "success" | "warning" | "destructive" | "cyan";
  animated?: boolean;
}

export function ProgressBar({
  value = 0,
  max = 100,
  size,
  showValue = false,
  label,
  variant = "gradient",
  animated = true,
  className,
  ...props
}: ProgressBarProps) {
  const percentage = Math.min(Math.max(Math.round((value / max) * 100), 0), 100);

  const fillStyles = {
    primary: "bg-sky-500",
    gradient: "bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-400",
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    destructive: "bg-rose-500",
    cyan: "bg-cyan-400",
  };

  return (
    <div className={cn("w-full space-y-1.5", className)} {...props}>
      {(label || showValue) && (
        <div className="flex items-center justify-between text-xs font-semibold">
          {label && <span className="text-foreground">{label}</span>}
          {showValue && (
            <span className="text-muted-foreground font-mono">{percentage}%</span>
          )}
        </div>
      )}
      <div className={cn(progressVariants({ size }))}>
        <div
          className={cn(
            "h-full rounded-full transition-all duration-700 ease-out shadow-sm",
            fillStyles[variant],
            animated && "transition-all"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export interface CircularGaugeProps {
  score: number;
  maxScore?: number;
  size?: "sm" | "md" | "lg" | "xl";
  label?: string;
  sublabel?: string;
  showGrade?: boolean;
  className?: string;
}

export function CircularGauge({
  score,
  maxScore = 100,
  size = "md",
  label = "ATS Score",
  sublabel,
  showGrade = true,
  className,
}: CircularGaugeProps) {
  const percentage = Math.min(Math.max(Math.round((score / maxScore) * 100), 0), 100);

  const sizeConfigs = {
    sm: { dimension: 80, strokeWidth: 7, fontSize: "text-lg", radius: 30 },
    md: { dimension: 120, strokeWidth: 9, fontSize: "text-2xl", radius: 46 },
    lg: { dimension: 160, strokeWidth: 12, fontSize: "text-3xl", radius: 62 },
    xl: { dimension: 200, strokeWidth: 14, fontSize: "text-4xl", radius: 80 },
  };

  const { dimension, strokeWidth, fontSize, radius } = sizeConfigs[size];
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const getColor = (pct: number) => {
    if (pct >= 80) return { stroke: "#10b981", text: "text-emerald-500", grade: "Excellent" };
    if (pct >= 60) return { stroke: "#38bdf8", text: "text-sky-400", grade: "Good" };
    if (pct >= 40) return { stroke: "#f59e0b", text: "text-amber-500", grade: "Average" };
    return { stroke: "#ef4444", text: "text-rose-500", grade: "Needs Work" };
  };

  const colorInfo = getColor(percentage);

  return (
    <div className={cn("flex flex-col items-center justify-center text-center", className)}>
      <div className="relative flex items-center justify-center">
        <svg
          width={dimension}
          height={dimension}
          viewBox={`0 0 ${dimension} ${dimension}`}
          className="transform -rotate-90"
        >
          {/* Background track */}
          <circle
            cx={dimension / 2}
            cy={dimension / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            className="text-muted/60 dark:text-slate-800"
          />
          {/* Animated fill stroke */}
          <circle
            cx={dimension / 2}
            cy={dimension / 2}
            r={radius}
            stroke={colorInfo.stroke}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* Inner score text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={cn("font-extrabold tracking-tight font-sans", fontSize, colorInfo.text)}>
            {percentage}
          </span>
          <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
            / {maxScore}
          </span>
        </div>
      </div>

      {(label || showGrade || sublabel) && (
        <div className="mt-2.5 space-y-0.5">
          {label && <p className="text-xs font-semibold text-foreground">{label}</p>}
          {showGrade && (
            <p className={cn("text-xs font-bold", colorInfo.text)}>{colorInfo.grade}</p>
          )}
          {sublabel && <p className="text-[11px] text-muted-foreground">{sublabel}</p>}
        </div>
      )}
    </div>
  );
}
