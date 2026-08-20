export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.08)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  glowSky: "0 0 25px rgba(56, 189, 248, 0.35)",
  glowCyan: "0 0 25px rgba(34, 211, 238, 0.35)",
  glowSuccess: "0 0 25px rgba(16, 185, 129, 0.35)",
  glowDestructive: "0 0 25px rgba(239, 68, 68, 0.35)",
  glass: "0 8px 32px 0 rgba(15, 23, 42, 0.2)",
} as const;

export type Shadows = typeof shadows;
