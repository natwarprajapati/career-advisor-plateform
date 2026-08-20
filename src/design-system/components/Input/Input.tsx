import * as React from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClear?: () => void;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
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
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {startIcon && (
            <div className="pointer-events-none absolute left-3.5 flex items-center text-muted-foreground">
              {startIcon}
            </div>
          )}
          <input
            id={inputId}
            type={type}
            value={value}
            disabled={disabled}
            className={cn(
              "flex h-11 w-full rounded-xl border bg-background/80 px-3.5 py-2 text-sm text-foreground shadow-sm backdrop-blur-md transition-all duration-200 placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 focus-visible:border-sky-500 disabled:cursor-not-allowed disabled:opacity-50",
              startIcon && "pl-10",
              (endIcon || onClear) && "pr-10",
              error
                ? "border-rose-500/80 focus-visible:ring-rose-500/40 focus-visible:border-rose-500"
                : "border-border hover:border-slate-400 dark:hover:border-slate-600",
              className
            )}
            ref={ref}
            {...props}
          />
          {onClear && hasValue && !disabled && (
            <button
              type="button"
              onClick={onClear}
              className="absolute right-3 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
          {endIcon && !onClear && (
            <div className="pointer-events-none absolute right-3.5 flex items-center text-muted-foreground">
              {endIcon}
            </div>
          )}
        </div>
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

Input.displayName = "DSInput";

export interface SearchInputProps extends Omit<InputProps, "startIcon" | "type"> {
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

SearchInput.displayName = "DSSearchInput";
