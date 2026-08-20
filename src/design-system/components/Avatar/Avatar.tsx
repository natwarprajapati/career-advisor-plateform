import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full border border-border/80 shadow-sm",
  {
    variants: {
      size: {
        xs: "h-6 w-6 text-[10px]",
        sm: "h-8 w-8 text-xs",
        md: "h-10 w-10 text-sm",
        lg: "h-12 w-12 text-base",
        xl: "h-16 w-16 text-lg",
        "2xl": "h-20 w-20 text-xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string;
  status?: "online" | "offline" | "busy" | "away";
}

export function Avatar({
  className,
  size = "md",
  src,
  alt = "Avatar",
  fallback = "U",
  status,
  ...props
}: AvatarProps) {
  const statusColors = {
    online: "bg-emerald-500",
    offline: "bg-slate-400",
    busy: "bg-rose-500",
    away: "bg-amber-500",
  };

  return (
    <div className="relative inline-flex shrink-0">
      <AvatarPrimitive.Root
        className={cn(avatarVariants({ size }), className)}
        {...props}
      >
        <AvatarPrimitive.Image
          src={src}
          alt={alt}
          className="aspect-square h-full w-full object-cover"
        />
        <AvatarPrimitive.Fallback className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-tr from-sky-500/20 to-cyan-500/20 font-bold uppercase text-sky-600 dark:text-sky-300">
          {fallback.slice(0, 2)}
        </AvatarPrimitive.Fallback>
      </AvatarPrimitive.Root>
      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full ring-2 ring-background",
            statusColors[status]
          )}
        />
      )}
    </div>
  );
}

export function AvatarGroup({
  children,
  className,
  max = 4,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const childrenArray = React.Children.toArray(children);
  const visibleAvatars = childrenArray.slice(0, max);
  const excess = childrenArray.length - max;

  return (
    <div className={cn("flex items-center -space-x-2.5", className)}>
      {visibleAvatars.map((child, index) => (
        <div key={index} className="ring-2 ring-background rounded-full">
          {child}
        </div>
      ))}
      {excess > 0 && (
        <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted border-2 border-background text-xs font-bold text-muted-foreground ring-2 ring-background">
          +{excess}
        </div>
      )}
    </div>
  );
}
