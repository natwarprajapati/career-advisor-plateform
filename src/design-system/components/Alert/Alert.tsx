import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-xl border p-4 text-sm backdrop-blur-md transition-all duration-200 flex items-start gap-3.5",
  {
    variants: {
      variant: {
        default:
          "bg-muted/70 text-foreground border-border",
        info:
          "bg-blue-500/10 text-blue-900 dark:text-blue-200 border-blue-500/30",
        success:
          "bg-emerald-500/10 text-emerald-900 dark:text-emerald-200 border-emerald-500/30",
        warning:
          "bg-amber-500/10 text-amber-900 dark:text-amber-200 border-amber-500/30",
        destructive:
          "bg-rose-500/10 text-rose-900 dark:text-rose-200 border-rose-500/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  onClose?: () => void;
  icon?: React.ReactNode;
}

export function Alert({
  className,
  variant = "default",
  title,
  children,
  onClose,
  icon,
  ...props
}: AlertProps) {
  const defaultIcons = {
    default: <Info className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />,
    info: <Info className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />,
    success: <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />,
    warning: <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />,
    destructive: <AlertCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />,
  };

  const renderIcon = icon || (variant ? defaultIcons[variant] : defaultIcons.default);

  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {renderIcon}
      <div className="flex-1 space-y-1">
        {title && <h5 className="font-bold leading-none tracking-tight">{title}</h5>}
        <div className="text-xs leading-relaxed opacity-90">{children}</div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          type="button"
          className="rounded-lg p-1 opacity-70 hover:opacity-100 hover:bg-black/10 dark:hover:bg-white/10 transition-opacity"
        >
          <X className="h-3.5 w-3.5" />
          <span className="sr-only">Close alert</span>
        </button>
      )}
    </div>
  );
}
