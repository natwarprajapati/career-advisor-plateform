import * as React from "react";
import { FolderSearch } from "lucide-react";
import { Button } from "../Button/Button";
import { cn } from "@/lib/utils";

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  actionIcon?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  actionIcon,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-2xl border border-dashed border-border/80 bg-muted/20 backdrop-blur-sm",
        className
      )}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-500 mb-4 shadow-sm shadow-sky-500/10">
        {icon || <FolderSearch className="h-8 w-8" />}
      </div>
      <h4 className="text-base font-bold text-foreground mb-1.5">{title}</h4>
      <p className="text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed mb-6">
        {description}
      </p>
      {actionLabel && onAction && (
        <Button
          variant="primary"
          size="md"
          onClick={onAction}
          leftIcon={actionIcon}
        >
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
