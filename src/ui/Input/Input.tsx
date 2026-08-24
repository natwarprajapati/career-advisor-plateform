import * as React from "react";
import { AlertCircle, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClear?: () => void;
  containerClassName?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassName,
      type = "text",
      label,
      helperText,
      error,
      startIcon,
      endIcon,
      onClear,
      value,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const hasValue = value !== undefined && value !== "";

    return (
      <div className={cn("w-full text-left space-y-1.5", containerClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center w-full">
          {startIcon && (
            <div className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center text-muted-foreground/70 z-10 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:shrink-0">
              {startIcon}
            </div>
          )}
          <input
            id={inputId}
            type={type}
            value={value}
            disabled={disabled}
            ref={ref}
            className={cn(
              "flex h-11 w-full rounded-xl border bg-background/80 px-3.5 py-2 text-sm text-foreground shadow-sm backdrop-blur-md transition-all duration-200 placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 focus-visible:border-sky-500 disabled:cursor-not-allowed disabled:opacity-50",
              startIcon ? "pl-10" : "pl-3.5",
              (endIcon || onClear) ? "pr-10" : "pr-3.5",
              error
                ? "border-rose-500/80 focus-visible:ring-rose-500/40 focus-visible:border-rose-500"
                : "border-border hover:border-slate-400 dark:hover:border-slate-600",
              className
            )}
            {...props}
          />
          {onClear && hasValue && !disabled && (
            <button
              type="button"
              onClick={onClear}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer z-10"
              aria-label="Clear input"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
          {endIcon && !onClear && (
            <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center text-muted-foreground/70 z-10 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:shrink-0">
              {endIcon}
            </div>
          )}
        </div>
        {error ? (
          <p className="text-xs font-medium text-rose-500 animate-in fade-in-50 duration-200 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{error}</span>
          </p>
        ) : helperText ? (
          <p className="text-xs text-muted-foreground">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";

export interface SearchInputProps
  extends Omit<InputProps, "startIcon" | "type"> {
  onSearchChange?: (value: string) => void;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ placeholder = "Search...", onChange, onSearchChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      onSearchChange?.(e.target.value);
    };

    return (
      <Input
        ref={ref}
        type="search"
        placeholder={placeholder}
        startIcon={<Search className="h-4 w-4 text-sky-500/70" />}
        onChange={handleChange}
        {...props}
      />
    );
  }
);

SearchInput.displayName = "SearchInput";

