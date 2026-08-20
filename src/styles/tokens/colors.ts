export const colors = {
  brand: {
    navy: {
      950: "#080d1a",
      900: "#0f172a",
      800: "#1e293b",
      700: "#334155",
      600: "#475569",
    },
    sky: {
      500: "#0ea5e9",
      400: "#38bdf8",
      300: "#7dd3fc",
      200: "#bae6fd",
      100: "#e0f2fe",
      50: "#f0f9ff",
    },
    cyan: {
      500: "#06b6d4",
      400: "#22d3ee",
      300: "#67e8f9",
    },
  },
  semantic: {
    success: {
      main: "#10b981",
      surface: "rgba(16, 185, 129, 0.12)",
      text: "#059669",
      border: "rgba(16, 185, 129, 0.3)",
    },
    warning: {
      main: "#f59e0b",
      surface: "rgba(245, 158, 11, 0.12)",
      text: "#d97706",
      border: "rgba(245, 158, 11, 0.3)",
    },
    destructive: {
      main: "#ef4444",
      surface: "rgba(239, 68, 68, 0.12)",
      text: "#dc2626",
      border: "rgba(239, 68, 68, 0.3)",
    },
    info: {
      main: "#3b82f6",
      surface: "rgba(59, 130, 246, 0.12)",
      text: "#2563eb",
      border: "rgba(59, 130, 246, 0.3)",
    },
  },
  glass: {
    light: {
      bg: "rgba(255, 255, 255, 0.8)",
      border: "rgba(226, 232, 240, 0.6)",
      shadow: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
    },
    dark: {
      bg: "rgba(15, 23, 42, 0.75)",
      border: "rgba(56, 189, 248, 0.15)",
      shadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
    },
  },
  gradients: {
    primary: "linear-gradient(135deg, #0f172a 0%, #0ea5e9 100%)",
    accent: "linear-gradient(135deg, #0ea5e9 0%, #22d3ee 100%)",
    glow: "linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(34, 211, 238, 0.15))",
    subtle: "linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%)",
  },
} as const;

export type Colors = typeof colors;
