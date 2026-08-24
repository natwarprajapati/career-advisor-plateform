import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;

    const textareaElement = (
      <textarea
        id={textareaId}
        className={cn(
          "flex min-h-[80px] w-full rounded-xl border bg-background/80 px-3.5 py-2 text-sm text-foreground shadow-sm backdrop-blur-md transition-all duration-200 placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 focus-visible:border-sky-500 disabled:cursor-not-allowed disabled:opacity-50",
          error
            ? "border-rose-500/80 focus-visible:ring-rose-500/40 focus-visible:border-rose-500"
            : "border-border hover:border-slate-400 dark:hover:border-slate-600",
          className
        )}
        ref={ref}
        {...props}
      />
    );

    if (label || error || helperText) {
      return (
        <div className="w-full space-y-1.5 text-left">
          {label && (
            <label
              htmlFor={textareaId}
              className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              {label}
            </label>
          )}
          {textareaElement}
          {error ? (
            <p className="text-xs font-medium text-rose-500 animate-in fade-in-50 duration-200">
              {error}
            </p>
          ) : helperText ? (
            <p className="text-xs text-muted-foreground">{helperText}</p>
          ) : null}
        </div>
      );
    }

    return textareaElement;
  }
);

Textarea.displayName = "Textarea";
