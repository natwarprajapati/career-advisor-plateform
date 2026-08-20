export const radius = {
  none: "0px",
  xs: "0.25rem",  // 4px
  sm: "0.375rem", // 6px
  md: "0.625rem", // 10px
  lg: "0.875rem", // 14px
  xl: "1.125rem", // 18px
  "2xl": "1.5rem",// 24px
  "3xl": "2rem",  // 32px
  full: "9999px",
} as const;

export type Radius = typeof radius;
