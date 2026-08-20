export const typography = {
  fontFamily: {
    sans: "'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  },
  fontSize: {
    xs: { size: "0.75rem", lineHeight: "1rem", letterSpacing: "0.01em" },
    sm: { size: "0.875rem", lineHeight: "1.25rem", letterSpacing: "0" },
    base: { size: "1rem", lineHeight: "1.5rem", letterSpacing: "0" },
    lg: { size: "1.125rem", lineHeight: "1.75rem", letterSpacing: "-0.01em" },
    xl: { size: "1.25rem", lineHeight: "1.75rem", letterSpacing: "-0.01em" },
    "2xl": { size: "1.5rem", lineHeight: "2rem", letterSpacing: "-0.02em" },
    "3xl": { size: "1.875rem", lineHeight: "2.25rem", letterSpacing: "-0.02em" },
    "4xl": { size: "2.25rem", lineHeight: "2.5rem", letterSpacing: "-0.025em" },
    "5xl": { size: "3rem", lineHeight: "1.16", letterSpacing: "-0.025em" },
    "6xl": { size: "3.75rem", lineHeight: "1.12", letterSpacing: "-0.03em" },
  },
  fontWeight: {
    light: "300",
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },
} as const;

export type Typography = typeof typography;
