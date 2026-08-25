import { cva } from "class-variance-authority";

export const progressVariants = cva(
  "relative w-full overflow-hidden rounded-full bg-muted/80 backdrop-blur-sm",
  {
    variants: {
      size: {
        sm: "h-1.5",
        md: "h-2.5",
        lg: "h-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);
