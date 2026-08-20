# 🧭 AI Career Navigator

> **From Resume to Real Employment** — An intelligent, end-to-end career acceleration platform powered by ATS heuristics, client-side PDF processing, AI career mentoring, personalized learning pathways, and a comprehensive Figma-ready Design System with Storybook visual testing.

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Storybook](https://img.shields.io/badge/Storybook-8.6-FF4785?logo=storybook&logoColor=white)](https://storybook.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Design System & Figma Architecture](#-design-system--figma-architecture)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Architecture & Core Services](#-architecture--core-services)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running Locally](#running-locally)
  - [Running Storybook](#running-storybook)
  - [Production Build](#production-build)
- [Database & Storage Setup](#-database--storage-setup)
- [Available Scripts](#-available-scripts)
- [Roadmap](#-roadmap)
- [License](#-license)

---

## 🌟 Overview

**AI Career Navigator** is a comprehensive full-stack career platform designed to help job seekers land real employment opportunities. Built with modern web standards and high-fidelity glassmorphism design, the application provides an interconnected workflow: from automated resume parsing and ATS score diagnostics to interactive resume building, skill gap analysis, AI career consultations, and job application tracking.

### Core Highlights
- **Smart ATS Heuristic Engine**: Real-time evaluation of resumes analyzing keyword density, structure, quantifiable metrics, and clarity with zero external latency.
- **Client-Side PDF Processing**: Extracts raw textual content from uploaded PDF resumes directly in the browser using `pdfjs-dist` and exports high-definition formatted PDFs via `jsPDF` + `html2canvas`.
- **Interactive Resume Builder**: Live step-by-step authoring with instant visual preview and section generation.
- **Modular Design System**: Dedicated design tokens (`src/styles/tokens/`), atomic UI components (`src/design-system/components/`), and 100% W3C / Tokens Studio compatible Figma schema.
- **Storybook Visual Testing**: Isolated component workshop with 12 interactive story suites covering all variants, sizes, and states.
- **Unified Central Dashboard**: Real-time management of created resumes, uploaded documents, enrolled learning resources, applied jobs, and consultation histories.

---

## ✨ Key Features

### 1. 📄 AI Resume Screening & ATS Diagnostics (`/resume-screening`)
- **Direct PDF Parsing**: Drop or upload any `.pdf` or `.txt` resume to automatically extract text client-side.
- **ATS Score Engine (0–100)**: Instant multi-factor evaluation with visual score dials and compatibility levels.
- **Section-Wise Audit**: Detailed pass/fail breakdowns for Contact Information, Experience, Education, Skills, and Summary.
- **Actionable Recommendations**: Clear, practical suggestions to optimize keyword alignment and formatting for applicant tracking systems.

### 2. 📝 Resume Builder & PDF Exporter (`/resume-builder`)
- **Step-by-Step Form Authoring**: Guided sections for Personal Details, Experience, Education, Skills, and Projects.
- **AI Section Copilot**: Generates tailored summaries and role-specific bullet points.
- **Live Interactive Preview**: Real-time rendering of formatted ATS-compliant resumes.
- **One-Click Export & Save**: Synchronizes drafts to Supabase and downloads print-ready PDFs directly in the browser.

### 3. 🎯 Skill Gap Analysis & Roadmap (`/skill-gap`)
- **Target Role Benchmarking**: Compare your current skills against industry standards for popular roles (e.g., Full Stack Developer, Data Scientist, DevOps Engineer).
- **Readiness Metric**: Visual breakdown of matched skills vs. missing competencies with circular gauges.
- **Structured Learning Roadmap**: Phased milestones powered by `LearnerProgressBadge` components with time estimates and curated topics.

### 4. 🤖 AI Career Advisor & Chat (`/resources`)
- **Interactive Career Mentoring**: Consult with an AI career mentor regarding career transitions, system design, interview preparation, and certifications.
- **Topic Quick-Starts**: One-click prompts for fast advisory sessions.
- **History Persistence**: Conversations are saved to Supabase and accessible anytime from the dashboard.

### 5. 💼 Job Matching & Application Tracker (`/jobs`)
- **Curated Job Board**: Role-specific job openings with salary ranges, required experience, and tags.
- **AI Cover Letter Generator**: Generates tailored cover letters for specific companies and job descriptions.
- **Application Status Tracking**: Track applications across stages (`Applied`, `Interviewing`, `Offered`, `Rejected`).

### 6. 📊 Centralized User Dashboard (`/dashboard`)
- **Metric StatCards**: Quick view of total resumes, job applications, enrolled resources, and chats with interactive navigation.
- **Sub-Sections**:
  - `/dashboard/resumes/created` — Manage saved builder drafts with EmptyState placeholders.
  - `/dashboard/resumes/uploaded` — Manage uploaded PDF resumes.
  - `/dashboard/resources` — Track enrolled courses and learning materials.
  - `/dashboard/jobs` — View applied jobs and edit saved cover letters via modal dialogs.
  - `/dashboard/chat-history` — Review past advisor conversations.

---

## 🎨 Design System & Figma Architecture

AI Career Navigator incorporates a production-grade Design System adhering to modern UI engineering practices:

### 1. Figma Blueprint & Tokens
- **[FIGMA_DESIGN_SYSTEM.md](FIGMA_DESIGN_SYSTEM.md)**: Full design specifications covering Obsidian Dark / Crisp Light themes, Plus Jakarta Sans typography scale, 8pt spacing grid, and component variant matrices.
- **[src/styles/tokens/figma-tokens.json](src/styles/tokens/figma-tokens.json)**: W3C Design Tokens Community Group / Tokens Studio JSON schema for 1-click import into Figma Variables.

### 2. Standardized UI Components (`src/design-system/`)
- **`Button`**: Multi-variant button suite (`primary`, `secondary`, `glow`, `glass`, `destructive`, `outline`, `ghost`) with loading spinner and slot delegation (`asChild`).
- **`Badge`**: Status badges with animated dot indicators and semantic colors (`success`, `warning`, `destructive`, `cyan`, `glow`).
- **`LearnerProgressBadge`**: State-aware learner badge with 4 core states (`Default`, `In-Progress`, `Completed`, `Disabled`) and mobile responsive card view.
- **`StatCard`**: High-impact metric widgets with trend badges, ambient glows, and icon containers.
- **`CircularGauge` & `ProgressBar`**: SVG animated ATS score visualizers and gradient progress bars.
- **`Modal` / `Dialog`**: Accessible glassmorphic dialogs with slide-up transitions.
- **`Tabs`**: Pill, glass, and underline variant tab switchers.
- **`EmptyState`**: Empty list placeholders with illustrations, descriptive copy, and action CTAs.
- **`Input` & `SearchInput`**: Text inputs with prefix/suffix icons, clear buttons, and validation helpers.
- **`Textarea`**: Auto-resizing textarea with live character counter.
- **`Avatar` & `AvatarGroup`**: User avatars with status badges and stacked avatars.
- **`Alert`**: Semantic notification banners with dismissibility.
- **`Spinner` & `Skeleton`**: Loading spinners and skeleton content placeholders.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Core Framework** | [React 18](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite 5](https://vitejs.dev/) |
| **Component Testing** | [Storybook 8](https://storybook.js.org/) + [@storybook/test](https://storybook.js.org/docs/writing-tests/interaction-testing) |
| **Styling & Design** | [Tailwind CSS 3](https://tailwindcss.com/), Glassmorphic Design System, HSL Design Tokens |
| **UI Primitives** | [Radix UI Primitives](https://www.radix-ui.com/), [Lucide React Icons](https://lucide.dev/) |
| **Variant Styling** | [class-variance-authority (cva)](https://cva.style/docs) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **State & Data Fetching** | [TanStack React Query v5](https://tanstack.com/query/latest), React Context API |
| **PDF Processing** | [pdfjs-dist](https://mozilla.github.io/pdf.js/) (Text Extraction), [jsPDF](https://github.com/parallax/jsPDF) + [html2canvas](https://html2canvas.hertzen.com/) (PDF Export) |
| **Backend & Database** | [Supabase](https://supabase.com/) (PostgreSQL, Row Level Security, Storage Buckets) |

---

## 📂 Folder Structure

```
Career-Navigator/
├── .storybook/                   # Storybook v8 configuration (main.ts, preview.tsx)
├── public/                       # Static public assets (icons, robots.txt)
├── src/
│   ├── app/                      # Application setup & routing
│   │   ├── providers.tsx         # Global context providers (React Query, Toaster, Helmet)
│   │   └── routes.tsx            # Application route definitions
│   │
│   ├── components/               # Reusable UI & layout components
│   │   ├── dashboard/            # Dashboard sidebar, typewriter text
│   │   ├── home/                 # Landing page sections (Hero, Features, Metrics, CTA, Footer)
│   │   ├── ui/                   # Radix UI primitives & styled components
│   │   ├── DashboardNavbar.tsx   # Top navigation bar with mobile drawer
│   │   ├── Navbar.tsx            # Main landing navbar
│   │   └── NavLink.tsx           # Navigation link helper
│   │
│   ├── contexts/                 # Global state contexts
│   │   └── UserContext.tsx       # User profile session & local persistence
│   │
│   ├── core/                     # Core configuration & TypeScript domain models
│   │   ├── config/               # App constants & environment variable accessors
│   │   └── types/                # Domain types (UserProfile, StoredJob, Resume, etc.)
│   │
│   ├── design-system/            # 🎨 Centralized Design System UI Library
│   │   ├── components/           # Standardized Atomic/Molecular Components
│   │   │   ├── Alert/            # Semantic alert banners
│   │   │   ├── Avatar/           # User avatars & stacked avatar groups
│   │   │   ├── Badge/            # Status badges & animated dot indicators
│   │   │   ├── Button/           # Multi-variant button suite & buttonVariants
│   │   │   ├── Card/             # Glassmorphic and solid container cards
│   │   │   ├── EmptyState/       # Empty state illustrations & actions
│   │   │   ├── Input/            # Text inputs & live search inputs
│   │   │   ├── LearnerProgressBadge/ # State-aware learner progress badges (4 states)
│   │   │   ├── Modal/            # Glassmorphic accessible dialogs
│   │   │   ├── Progress/         # Linear bars & circular ATS score gauges
│   │   │   ├── Spinner/          # Animated loading spinners & skeleton placeholders
│   │   │   ├── StatCard/         # Metric cards with trends & ambient glows
│   │   │   ├── Tabs/             # Pill, glass & underline tab switchers
│   │   │   └── Textarea/         # Auto-resizing textarea with counter
│   │   └── index.ts              # Design System master barrel export
│   │
│   ├── features/                 # Modular feature domain slices & barrel exports
│   │   ├── auth/                 # Authentication & profile handling
│   │   ├── dashboard/            # Dashboard feature helpers
│   │   ├── home/                 # Home page feature exports
│   │   ├── job-matching/         # Job recommendations & cover letter generation
│   │   ├── resources/            # Learning resources & career consultation
│   │   ├── resume-builder/       # Resume creation & editing tools
│   │   ├── resume-screening/     # ATS scoring & resume analysis
│   │   └── skill-gap/            # Skill gap analysis & learning roadmaps
│   │
│   ├── hooks/                    # Custom React hooks (useToast, useMobile)
│   ├── integrations/             # Backend integrations
│   │   └── supabase/             # Supabase client setup & database types
│   ├── lib/                      # Shared helper utilities (clsx/tailwind-merge cn helper)
│   │
│   ├── pages/                    # View pages & screen components
│   │   ├── dashboard/            # Dashboard sub-views (Resumes, Jobs, Resources, Chat history)
│   │   ├── Dashboard.tsx         # User overview dashboard
│   │   ├── Index.tsx             # Landing page
│   │   ├── JobMatching.tsx       # Job board & tailored cover letter generator
│   │   ├── NotFound.tsx          # 404 error page
│   │   ├── ResourceChat.tsx      # AI career mentor consultation chat
│   │   ├── ResumeBuilder.tsx     # Step-by-step resume builder with live preview & export
│   │   ├── ResumeScreening.tsx   # PDF resume upload & ATS scoring diagnostic
│   │   └── SkillGap.tsx          # Target role skill gap analyzer & roadmap
│   │
│   ├── services/                 # Business logic & infrastructure services
│   │   ├── ai/                   # AI services (Heuristic engine, interfaces, contracts)
│   │   └── pdf/                  # PDF processing (extractTextFromPDF, exportElementToPDF)
│   │
│   ├── stories/                  # 📚 Storybook Component Stories & Interaction Tests
│   ├── styles/                   # 🎨 Design Tokens & Global CSS
│   │   ├── tokens/               # Typed Tokens (Colors, Typography, Spacing, Shadows, Radius, figma-tokens.json)
│   │   ├── App.css               # App styles
│   │   └── index.css             # Tailwind base & glassmorphic classes
│   │
│   ├── App.tsx                   # Main React entry component
│   ├── main.tsx                  # Vite application root mounting
│   └── vite-env.d.ts             # TypeScript definitions for Vite environment
│
├── supabase/                     # Supabase backend configuration & migrations
├── FIGMA_DESIGN_SYSTEM.md        # 🎨 Master Figma Design System Blueprint & Specs
├── package.json                  # Project dependencies & npm scripts
├── tailwind.config.ts            # Tailwind CSS configuration & theme tokens
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.ts                # Vite dev server & build settings
```

---

## 🧠 Architecture & Core Services

### Service Layer Design
- **`IAIService` Contract**: Defines uniform interfaces for `analyzeResume`, `generateResumeSection`, `analyzeSkillGap`, `generateCoverLetter`, and `chat`.
- **Deterministic Heuristic Engine**: Real keyword analysis, action verb scoring, and section auditing provide immediate and reliable outputs.
- **Client-Side PDF Engine**:
  - `extractTextFromPDF`: Utilizes `pdfjs-dist` to parse textual layers of uploaded PDF files on the fly.
  - `exportElementToPDF`: Utilizes `html2canvas` and `jsPDF` to generate pixel-perfect A4 PDF documents directly on the client.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.x` or later (LTS recommended)
- **npm**, **pnpm**, or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/career-navigator.git
   cd career-navigator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-supabase-anon-key
```

### Running Locally

Start the local Vite development server:
```bash
npm run dev
```

### Running Storybook

Launch the isolated Storybook component workshop on port `6006`:
```bash
npm run storybook
```

### Production Build

To compile a minified production bundle of the web app:
```bash
npm run build
```

To compile a static Storybook documentation bundle:
```bash
npm run build-storybook
```

To preview the production build locally:
```bash
npm run preview
```

---

## 📜 Available Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Starts the Vite development server |
| `npm run storybook` | Starts the Storybook component explorer on port 6006 |
| `npm run build` | Compiles the production web application into `dist/` |
| `npm run build-storybook` | Compiles static Storybook documentation into `storybook-static/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues |
| `npm run typecheck` | Runs TypeScript compiler checks without emitting files |

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.
# career-advisor-plateform
