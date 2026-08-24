import { User, Briefcase, Cpu, GraduationCap, FileText } from "lucide-react";
import { ExperienceLevel } from "@/core/types";

export const STEPS = [
  { id: 1, title: "Personal Info", icon: User, weight: "20%" },
  { id: 2, title: "Career & Work", icon: Briefcase, weight: "20%" },
  { id: 3, title: "Skills & Domain", icon: Cpu, weight: "20%" },
  { id: 4, title: "Education", icon: GraduationCap, weight: "20%" },
  { id: 5, title: "Resume & Links", icon: FileText, weight: "20%" },
];

export const EXPERIENCE_LEVELS: { id: ExperienceLevel; label: string; sub: string }[] = [
  { id: "fresher", label: "Fresher / Student", sub: "0-1 year experience" },
  { id: "junior", label: "Junior (1-2 yrs)", sub: "Early career professional" },
  { id: "mid", label: "Mid-Level (3-5 yrs)", sub: "Hands-on practitioner" },
  { id: "senior", label: "Senior (5-8 yrs)", sub: "Senior engineer / specialist" },
  { id: "lead", label: "Lead / Executive (8+ yrs)", sub: "Principal & managerial roles" },
];

export const DOMAINS = [
  "Software Engineering & Full Stack",
  "Frontend Development",
  "Backend & Distributed Systems",
  "AI, Machine Learning & Data Science",
  "Cloud Architecture & DevOps",
  "Mobile App Engineering (iOS/Android)",
  "Product Management",
  "UI/UX & Product Design",
  "Cybersecurity & InfoSec",
];

export const POPULAR_SKILLS = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Python",
  "Java",
  "SQL",
  "Next.js",
  "Tailwind CSS",
  "AWS",
  "Docker",
  "Git",
  "GraphQL",
  "System Design",
];

export const DEGREES = [
  "B.Tech / B.E. in Engineering",
  "MCA (Master of Computer Applications)",
  "BCA (Bachelor of Computer Applications)",
  "B.Sc in Computer Science / IT",
  "M.Tech / M.E. in Engineering",
  "MBA / PGDM",
  "M.Sc in Information Technology / CS",
  "Diploma in Engineering",
  "High School (12th Grade)",
  "Other / Self-Taught",
];

export const GRAD_YEARS = Array.from(
  { length: 15 },
  (_, i) => `${new Date().getFullYear() + 3 - i}`
);
