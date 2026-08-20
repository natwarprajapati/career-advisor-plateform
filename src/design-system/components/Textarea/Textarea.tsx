import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  showCount?: boolean;
  maxLength?: number;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      helperText,
      error,
      showCount = false,
      maxLength,
      value,
      onChange,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;
    const currentLength = typeof value === "string" ? value.length : 0;

    return (
      <div className="w-full space-y-1.5 text-left">
        <div className="flex items-center justify-between">
          {label && (
            <label
              htmlFor={textareaId}
              className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              {label}
            </label>
          )}
          {showCount && maxLength && (
            <span
              className={cn(
                "text-xs text-muted-foreground",
                currentLength >= maxLength && "text-rose-500 font-semibold"
              )}
            >
              {currentLength}/{maxLength}
            </span>
          )}
        </div>
        <textarea
          id={textareaId}
          value={value}
          onChange={onChange}
          disabled={disabled}
          maxLength={maxLength}
          className={cn(
            "flex min-h-[90px] w-full rounded-xl border bg-background/80 px-3.5 py-2.5 text-sm text-foreground shadow-sm backdrop-blur-md transition-all duration-200 placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 focus-visible:border-sky-500 disabled:cursor-not-allowed disabled:opacity-50",
            error
              ? "border-rose-500/80 focus-visible:ring-rose-500/40 focus-visible:border-rose-500"
              : "border-border hover:border-slate-400 dark:hover:border-slate-600",
            className
          )}
          ref={ref}
          {...props}
        />
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
);

Textarea.displayName = "DSTextarea";
