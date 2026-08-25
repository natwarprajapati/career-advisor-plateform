import { cva } from "class-variance-authority";

export const spinnerVariants = cva("animate-spin text-current shrink-0", {
  variants: {
    size: {
      xs: "h-3.5 w-3.5",
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-12 w-12",
    },
    variant: {
      default: "text-foreground",
      primary: "text-sky-500",
      cyan: "text-cyan-400",
      white: "text-white",
      muted: "text-muted-foreground",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
});
