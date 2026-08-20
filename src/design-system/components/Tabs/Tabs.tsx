import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const tabsListVariants = cva(
  "inline-flex items-center justify-center rounded-xl p-1 text-muted-foreground",
  {
    variants: {
      variant: {
        pills: "bg-muted/80 backdrop-blur-md border border-border/50",
        glass: "bg-card/70 dark:bg-slate-900/60 backdrop-blur-xl border border-border/50 dark:border-sky-500/20 shadow-sm",
        underline: "bg-transparent border-b border-border/80 rounded-none p-0 gap-6",
      },
    },
    defaultVariants: {
      variant: "pills",
    },
  }
);

export interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {}

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsListVariants({ variant }), className)}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    variant?: "pills" | "glass" | "underline";
  }
>(({ className, variant = "pills", ...props }, ref) => {
  const triggerStyles = {
    pills:
      "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm",
    glass:
      "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 text-xs font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-sky-500 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:shadow-sky-500/30",
    underline:
      "inline-flex items-center justify-center whitespace-nowrap pb-3 pt-1 text-sm font-semibold border-b-2 border-transparent transition-all hover:text-foreground data-[state=active]:border-sky-500 data-[state=active]:text-sky-500 rounded-none",
  };

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(triggerStyles[variant], className)}
      {...props}
    />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-3 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 animate-in fade-in-50 duration-200",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
