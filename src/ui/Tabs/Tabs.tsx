import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { tabsListVariants } from "./tabsListVariants";

export const Tabs = TabsPrimitive.Root;

export interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {}

export const TabsList = React.forwardRef<
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

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    variant?: "pills" | "glass" | "underline";
  }
>(({ className, variant = "pills", ...props }, ref) => {
  const triggerStyles = {
    pills:
      "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm cursor-pointer",
    glass:
      "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 text-xs font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-sky-500 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:shadow-sky-500/30 cursor-pointer",
    underline:
      "inline-flex items-center justify-center whitespace-nowrap pb-3 pt-1 text-sm font-semibold border-b-2 border-transparent transition-all hover:text-foreground data-[state=active]:border-sky-500 data-[state=active]:text-sky-500 rounded-none cursor-pointer",
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

export const TabsContent = React.forwardRef<
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
