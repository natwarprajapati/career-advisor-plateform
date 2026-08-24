import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { 
  CheckCircle2, 
  Clock, 
  Lock, 
  Sparkles, 
  ArrowRight, 
  GraduationCap 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { learnerBadgeVariants } from "./learnerBadgeVariants";

export type LearnerStatus = "default" | "in-progress" | "completed" | "disabled";

export interface LearnerProgressBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof learnerBadgeVariants> {
  status?: LearnerStatus;
  skillName?: string;
  category?: string;
  progress?: number;
  duration?: string;
  interactive?: boolean;
  onStartLearning?: () => void;
}

export function LearnerProgressBadge({
  className,
  status = "default",
  size = "md",
  skillName = "React Architecture & Patterns",
  category,
  progress = 0,
  duration,
  interactive = false,
  onStartLearning,
  ...props
}: LearnerProgressBadgeProps) {
  const isCard = size === "card";

  const statusIcons: Record<LearnerStatus, React.ReactNode> = {
    default: <Clock className="h-4 w-4 text-sky-500 shrink-0" />,
    "in-progress": (
      <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60" />
        <Sparkles className="h-4 w-4 text-cyan-500 dark:text-cyan-300 relative z-10" />
      </span>
    ),
    completed: <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />,
    disabled: <Lock className="h-4 w-4 text-muted-foreground shrink-0" />,
  };

  const statusLabels: Record<LearnerStatus, string> = {
    default: "Ready to Learn",
    "in-progress": `${progress > 0 ? `${progress}% In Progress` : "In Progress"}`,
    completed: "Mastered & Verified",
    disabled: "Prerequisites Locked",
  };

  if (isCard) {
    return (
      <div
        className={cn(
          learnerBadgeVariants({ status, size }),
          interactive && status !== "disabled" && "cursor-pointer hover:-translate-y-0.5 hover:shadow-lg transition-transform",
          className
        )}
        onClick={status !== "disabled" ? onStartLearning : undefined}
        {...props}
      >
        <div className="flex items-center gap-3.5 w-full sm:w-auto">
          <div
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border shadow-sm",
              status === "default" && "bg-sky-500/15 border-sky-500/30 text-sky-500",
              status === "in-progress" && "bg-cyan-500/15 border-cyan-400/40 text-cyan-400 animate-pulse",
              status === "completed" && "bg-emerald-500/15 border-emerald-500/30 text-emerald-400",
              status === "disabled" && "bg-muted/60 border-border/60 text-muted-foreground"
            )}
          >
            <GraduationCap className="h-5 w-5" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              {category && (
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  {category}
                </span>
              )}
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold">
                {statusIcons[status]}
                <span>{statusLabels[status]}</span>
              </span>
            </div>
            <h4 className="text-sm sm:text-base font-bold text-foreground truncate">
              {skillName}
            </h4>
            {duration && (
              <p className="text-xs text-muted-foreground mt-0.5">Estimated: {duration}</p>
            )}
          </div>
        </div>

        {(status === "in-progress" || status === "completed") && (
          <div className="w-full sm:w-44 space-y-1 my-2 sm:my-0">
            <div className="flex justify-between text-[11px] font-semibold text-muted-foreground">
              <span>Progress</span>
              <span className="font-mono">{status === "completed" ? "100%" : `${progress}%`}</span>
            </div>
            <div className="h-2 w-full rounded-full bg-muted/80 overflow-hidden">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-700",
                  status === "completed"
                    ? "bg-emerald-500 w-full"
                    : "bg-gradient-to-r from-sky-500 to-cyan-400"
                )}
                style={{ width: status === "completed" ? "100%" : `${progress}%` }}
              />
            </div>
          </div>
        )}

        {interactive && status !== "disabled" && (
          <div className="flex items-center gap-1 text-xs font-semibold text-sky-500 shrink-0">
            <span>{status === "completed" ? "Review" : "Continue"}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        learnerBadgeVariants({ status, size }),
        className
      )}
      {...props}
    >
      {statusIcons[status]}
      <span className="font-semibold">{skillName}</span>
      <span className="opacity-70 text-[11px] font-medium border-l border-current/20 pl-1.5">
        {statusLabels[status]}
      </span>
    </div>
  );
}
