import { z } from "zod";

// ─── Step 1: Personal Information ────────────────────────────────────────────
export const step1Schema = z.object({
  name: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Name is too long")
    .regex(
      /^[a-zA-Z\s.'-]+$/,
      "Name can only contain letters, spaces, dots, apostrophes or hyphens"
    ),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[+]?[\d\s\-().]{7,20}$/.test(val),
      "Enter a valid phone number (e.g. +91 9876543210)"
    ),
  email: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
      "Enter a valid email address"
    ),
  location: z.string().max(100, "Location is too long").optional(),
  headline: z
    .string()
    .max(150, "Headline must be 150 characters or fewer")
    .optional(),
});

export type Step1Data = z.infer<typeof step1Schema>;

// ─── Step 2: Career & Work ────────────────────────────────────────────────────
export const step2Schema = z.object({
  experience_level: z.enum(["fresher", "junior", "mid", "senior", "lead"], {
    required_error: "Please select your experience level",
  }),
  current_company: z
    .string()
    .max(100, "Company name is too long")
    .optional(),
  current_role: z.string().max(100, "Role name is too long").optional(),
  years_of_experience: z
    .number()
    .min(0, "Cannot be negative")
    .max(50, "Value seems too high")
    .optional(),
  notice_period: z.string().optional(),
});

export type Step2Data = z.infer<typeof step2Schema>;

// ─── Step 3: Skills & Domain ──────────────────────────────────────────────────
export const step3Schema = z.object({
  domain: z.string().optional(),
  skills: z
    .array(z.string())
    .min(1, "Add at least 1 skill to help AI match you to jobs"),
});

export type Step3Data = z.infer<typeof step3Schema>;

// ─── Step 4: Education ────────────────────────────────────────────────────────
export const step4Schema = z.object({
  education: z.object({
    degree: z.string().min(1, "Please select your highest degree"),
    institution: z
      .string()
      .min(2, "Institution name must be at least 2 characters")
      .max(150, "Institution name is too long"),
    field: z.string().max(100, "Field of study is too long").optional(),
    gradYear: z.string().optional(),
  }),
});

export type Step4Data = z.infer<typeof step4Schema>;

// ─── Step 5: Resume & Links ───────────────────────────────────────────────────
const urlSchema = (label: string) =>
  z
    .string()
    .optional()
    .refine(
      (val) =>
        !val ||
        /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z]{2,}(\/.*)?$/.test(
          val
        ),
      `${label} must be a valid URL starting with https://`
    );

export const step5Schema = z.object({
  linkedin_url: urlSchema("LinkedIn URL"),
  github_url: urlSchema("GitHub URL"),
  portfolio_url: urlSchema("Portfolio URL"),
});

export type Step5Data = z.infer<typeof step5Schema>;

// ─── Per-step schema map (used for dynamic validation in Profile.tsx) ─────────
export const STEP_SCHEMAS = {
  1: step1Schema,
  2: step2Schema,
  3: step3Schema,
  4: step4Schema,
  5: step5Schema,
} as const;
