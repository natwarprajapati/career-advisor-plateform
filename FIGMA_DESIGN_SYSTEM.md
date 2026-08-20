# 🎨 Figma Design System Blueprint — AI Career Navigator

> **Source of Truth for Product Design, Tokens & Component Specifications**  
> **Platform**: Web (Responsive: Desktop 1440px / 1280px, Tablet 768px, Mobile 375px)  
> **Aesthetic Theme**: Futuristic Glassmorphism, Deep Obsidian Navy & Radiant Cyan/Sky Accents  
> **Typography Family**: Plus Jakarta Sans  

---

## 📑 Table of Contents
1. [Design Philosophy & Visual Language](#1-design-philosophy--visual-language)
2. [Color Palette & Semantic Tokens](#2-color-palette--semantic-tokens)
3. [Typography Hierarchy](#3-typography-hierarchy)
4. [Spacing, Sizing & 8pt Grid System](#4-spacing-sizing--8pt-grid-system)
5. [Elevation, Shadows & Glassmorphism](#5-elevation-shadows--glassmorphism)
6. [Radii & Border System](#6-radii--border-system)
7. [Responsive Breakpoints & Layout Grids](#7-responsive-breakpoints--layout-grids)
8. [Core Component Anatomy & Figma Variant Specs](#8-core-component-anatomy--figma-variant-specs)
9. [Figma Setup & Token Import Guide](#9-figma-setup--token-import-guide)

---

## 1. Design Philosophy & Visual Language

AI Career Navigator delivers a high-velocity, empowering experience for job seekers and career switchers. The visual language blends:
- **Depth & Precision**: Layered obsidian glass surfaces (`backdrop-blur-xl`), subtle translucent borders, and focused ambient glows.
- **Dynamic Energy**: High-contrast luminous blue/cyan accents (`#38bdf8`, `#22d3ee`) highlighting key insights, ATS scores, and AI recommendations.
- **Clarity & Accessibility**: High-legibility typography with calibrated optical weights, high contrast ratios (WCAG AAA for body text, AA for accent UI elements), and clear feedback states.

```
┌────────────────────────────────────────────────────────┐
│  AI Career Navigator Visual Stack                      │
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │ Overlays: Ambient Glows & Modal Backdrops        │  │
│  └──────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────┐  │
│  │ Cards / Dialogs: Glass Surfaces (Blur + Border)  │  │
│  └──────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────┐  │
│  │ Base: Deep Gradient Mesh Background (Dark/Light) │  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────┘
```

---

## 2. Color Palette & Semantic Tokens

All color values are defined in **Hex**, **HSL**, and **Figma Variable** formats.

### 2.1 Brand & Core Accents

| Token Name | Figma Variable | Hex Code | HSL Value | Use Case |
| :--- | :--- | :--- | :--- | :--- |
| `navy.950` | `Color/Brand/Navy-950` | `#080d1a` | `hsl(220, 60%, 7%)` | Dark mode base background |
| `navy.900` | `Color/Brand/Navy-900` | `#0f172a` | `hsl(220, 50%, 11%)` | Dark mode surface / card background |
| `navy.800` | `Color/Brand/Navy-800` | `#1e293b` | `hsl(220, 35%, 18%)` | Dark mode elevated borders & inputs |
| `navy.700` | `Color/Brand/Navy-700` | `#334155` | `hsl(220, 25%, 27%)` | Dark mode subtle borders |
| `navy.600` | `Color/Brand/Navy-600` | `#475569` | `hsl(220, 20%, 35%)` | Muted slate text / inactive states |
| `sky.500` | `Color/Brand/Sky-500` | `#0ea5e9` | `hsl(199, 89%, 48%)` | Primary brand action color |
| `sky.400` | `Color/Brand/Sky-400` | `#38bdf8` | `hsl(199, 95%, 60%)` | Secondary brand glow & hover state |
| `cyan.400` | `Color/Brand/Cyan-400` | `#22d3ee` | `hsl(187, 92%, 53%)` | Accent highlights & gradients |
| `cyan.300` | `Color/Brand/Cyan-300` | `#67e8f9` | `hsl(186, 94%, 69%)` | High-impact badge & glowing borders |

### 2.2 Semantic Feedback Tokens

| Token Name | Figma Variable | Hex Code | Purpose |
| :--- | :--- | :--- | :--- |
| `success.default` | `Color/Semantic/Success` | `#10b981` | High ATS score (>80), skill match passed |
| `success.surface` | `Color/Semantic/Success-Bg` | `rgba(16, 185, 129, 0.12)`| Success badge & alert background |
| `warning.default` | `Color/Semantic/Warning` | `#f59e0b` | Medium ATS score (50-79), missing skills |
| `warning.surface` | `Color/Semantic/Warning-Bg` | `rgba(245, 158, 11, 0.12)`| Warning alert background |
| `destructive.default`| `Color/Semantic/Destructive`| `#ef4444` | Low ATS score (<50), critical gaps, delete action |
| `destructive.surface`| `Color/Semantic/Destructive-Bg`| `rgba(239, 68, 68, 0.12)`| Danger toast & destructive button hover |
| `info.default` | `Color/Semantic/Info` | `#3b82f6` | Guidance hints, AI mentorship callouts |
| `info.surface` | `Color/Semantic/Info-Bg` | `rgba(59, 130, 246, 0.12)` | Info cards & tips background |

### 2.3 Light Mode vs Dark Mode Mappings

| UI Role | Light Mode Value | Dark Mode Value |
| :--- | :--- | :--- |
| `surface-canvas` | `#ffffff` | `#080d1a` |
| `surface-card` | `rgba(255, 255, 255, 0.85)` | `rgba(15, 23, 42, 0.75)` |
| `surface-popover` | `#ffffff` | `#0f172a` |
| `border-subtle` | `rgba(226, 232, 240, 0.8)` | `rgba(51, 65, 85, 0.5)` |
| `border-prominent`| `rgba(203, 213, 225, 1)` | `rgba(56, 189, 248, 0.3)` |
| `text-primary` | `#0f172a` | `#f8fafc` |
| `text-secondary` | `#475569` | `#94a3b8` |
| `text-muted` | `#64748b` | `#64748b` |

---

## 3. Typography Hierarchy

Primary Typeface: **Plus Jakarta Sans**  
Google Fonts URL: `https://fonts.google.com/specimen/Plus+Jakarta+Sans`

| Text Style | Size | Line Height | Weight | Letter Spacing | Case | Figma Style Name |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display 2XL** | 64px (4.0rem) | 72px (1.125) | 800 (ExtraBold) | -0.025em | Default | `Typography/Display/2XL` |
| **Display XL** | 48px (3.0rem) | 56px (1.16) | 700 (Bold) | -0.02em | Default | `Typography/Display/XL` |
| **Heading 1** | 36px (2.25rem) | 44px (1.22) | 700 (Bold) | -0.02em | Default | `Typography/Heading/H1` |
| **Heading 2** | 30px (1.875rem)| 38px (1.26) | 700 (Bold) | -0.015em | Default | `Typography/Heading/H2` |
| **Heading 3** | 24px (1.5rem) | 32px (1.33) | 600 (SemiBold) | -0.01em | Default | `Typography/Heading/H3` |
| **Heading 4** | 20px (1.25rem) | 28px (1.4) | 600 (SemiBold) | -0.005em | Default | `Typography/Heading/H4` |
| **Body Large** | 18px (1.125rem)| 28px (1.55) | 400 (Regular) | 0 | Default | `Typography/Body/Large` |
| **Body Regular** | 16px (1.0rem) | 24px (1.5) | 400 (Regular) | 0 | Default | `Typography/Body/Regular` |
| **Body Medium** | 16px (1.0rem) | 24px (1.5) | 500 (Medium) | 0 | Default | `Typography/Body/Medium` |
| **Body Small** | 14px (0.875rem)| 20px (1.42) | 400 (Regular) | 0 | Default | `Typography/Body/Small` |
| **Caption** | 12px (0.75rem) | 16px (1.33) | 500 (Medium) | +0.01em | Default | `Typography/Caption/Default`|
| **Overline** | 11px (0.6875rem)| 14px (1.27)| 700 (Bold) | +0.08em | UPPERCASE | `Typography/Overline` |
| **Code / Mono** | 13px (0.8125rem)| 18px (1.38)| 500 (Medium) | 0 | Default | `Typography/Mono` |

---

## 4. Spacing, Sizing & 8pt Grid System

Every layout component and inner padding aligns to a standard **4px / 8px incremental scale**:

| Token Name | Value | Rem Equivalent | Figma Auto-Layout Gap / Padding |
| :--- | :--- | :--- | :--- |
| `space.0_5` | 2px | 0.125rem | Micro borders, badge dot offsets |
| `space.1` | 4px | 0.25rem | Tight list spacing, icon offsets |
| `space.1_5` | 6px | 0.375rem | Compact badge padding |
| `space.2` | 8px | 0.5rem | Small buttons padding, input inner icon spacing |
| `space.3` | 12px | 0.75rem | Medium button vertical padding |
| `space.4` | 16px | 1.0rem | Standard card padding (mobile), button horizontal padding |
| `space.5` | 20px | 1.25rem | Standard container gutter |
| `space.6` | 24px | 1.5rem | Desktop card inner padding, grid gaps |
| `space.8` | 32px | 2.0rem | Section sub-headings, modal inner padding |
| `space.10` | 40px | 2.5rem | Section spacing (compact) |
| `space.12` | 48px | 3.0rem | Layout hero element spacing |
| `space.16` | 64px | 4.0rem | Major page section padding |
| `space.20` | 80px | 5.0rem | Landing page vertical section padding |
| `space.24` | 96px | 6.0rem | Hero banner top padding |

---

## 5. Elevation, Shadows & Glassmorphism

### 5.1 Glassmorphism Recipe (Figma Effects)
To replicate the AI Career Navigator glass surface in Figma:
1. **Fill**: Linear Gradient `180deg` from `rgba(255, 255, 255, 0.08)` to `rgba(255, 255, 255, 0.03)` (Dark Mode) OR `rgba(255, 255, 255, 0.85)` to `rgba(240, 249, 255, 0.75)` (Light Mode).
2. **Stroke**: Inside 1px, `rgba(255, 255, 255, 0.12)` (Dark Mode) OR `rgba(226, 232, 240, 0.6)` (Light Mode).
3. **Effects Layer**:
   - `Layer Blur`: `20px` (or `Backdrop Blur: 16px` for background passthrough)
   - `Drop Shadow`: `X: 0, Y: 8, Blur: 24, Spread: -4, Color: rgba(15, 23, 42, 0.25)`

### 5.2 Elevation Tokens

| Level | Token | Figma Effect Spec | Purpose |
| :--- | :--- | :--- | :--- |
| **Level 1** | `shadow.sm` | `0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)` | Tags, small inputs, buttons |
| **Level 2** | `shadow.md` | `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.06)` | Standard cards, dropdowns |
| **Level 3** | `shadow.lg` | `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.05)`| Hovered cards, floating nav |
| **Level 4** | `shadow.xl` | `0 20px 25px -5px rgba(0,0,0,0.15), 0 8px 10px -6px rgba(0,0,0,0.08)`| Modals, sheets, dialogs |
| **Glow Blue**| `shadow.glow-sky` | `0 0 25px rgba(56, 189, 248, 0.35)` | Active tabs, primary CTAs |
| **Glow Cyan**| `shadow.glow-cyan`| `0 0 25px rgba(34, 211, 238, 0.35)` | AI recommendations & high score |

---

## 6. Radii & Border System

| Token Name | Radius Value | Rem | Recommended Figma Usage |
| :--- | :--- | :--- | :--- |
| `radius.sm` | 6px | 0.375rem | Badges, tooltips, small chips |
| `radius.md` | 10px | 0.625rem | Input fields, secondary buttons |
| `radius.lg` | 14px | 0.875rem | Standard buttons, small cards |
| `radius.xl` | 18px | 1.125rem | Primary content cards, stat widgets |
| `radius.2xl` | 24px | 1.5rem | Modals, floating navigation bars |
| `radius.full` | 9999px | 9999px | Avatars, pills, circular score rings |

---

## 7. Responsive Breakpoints & Layout Grids

### 7.1 Grid System Specifications

```
Desktop (1440px):
├── Margin: 64px ─────── [ 12 Columns, Gutter: 24px, Max Width: 1280px ] ─────── Margin: 64px ──┤

Tablet (768px):
├── Margin: 32px ─────── [  8 Columns, Gutter: 16px, Max Width: 704px ] ──────── Margin: 32px ──┤

Mobile (375px):
├── Margin: 16px ─────── [  4 Columns, Gutter: 12px, Max Width: 343px ] ──────── Margin: 16px ──┤
```

---

## 8. Core Component Anatomy & Figma Variant Specs

### 8.1 Button Component (`DS/Button`)
- **Variant Dimensions**:
  - `Size=Small`: Height 36px, Padding: 8px 14px, Font: 13px/500, Corner Radius: 8px, Icon: 16px
  - `Size=Medium`: Height 42px, Padding: 10px 18px, Font: 14px/600, Corner Radius: 10px, Icon: 18px
  - `Size=Large`: Height 50px, Padding: 14px 24px, Font: 16px/600, Corner Radius: 12px, Icon: 20px
  - `Size=Icon`: 42px × 42px square, Corner Radius: 10px
- **Styles / Variants**:
  - `Primary`: Solid Sky-500 (`#0ea5e9`), Text White, Hover: Sky-400 + subtle glow
  - `Secondary`: Slate Navy Tint (`rgba(30, 41, 59, 0.7)`), Border 1px (`rgba(56, 189, 248, 0.2)`), Text Sky-400
  - `Glass`: Transparent with `backdrop-blur`, Border `rgba(255,255,255,0.15)`, Text White
  - `Glow`: Gradient Sky-500 to Cyan-400 with outer glow shadow
  - `Outline`: Transparent, Border 1px Solid Slate-700, Text Slate-200
  - `Ghost`: Completely transparent, Hover background `rgba(255,255,255,0.06)`
  - `Destructive`: Solid Rose-500 (`#ef4444`), Text White
- **States**: `Default`, `Hover`, `Active`, `Focus-Visible`, `Disabled`, `Loading (with Spinner)`

### 8.2 Badge Component (`DS/Badge`)
- **Properties**: `Variant` (Default, Primary, Secondary, Success, Warning, Destructive, Glass, Outline), `Size` (Sm, Md, Lg), `HasDot` (Boolean), `HasIcon` (Boolean)
- **Anatomy**: `[Dot/Icon] + [Label Text] + [Dismiss Button (optional)]`

### 8.3 StatCard Component (`DS/StatCard`)
- **Anatomy**:
  - Top Row: Metric Title (Text-Muted 14px) + Icon Container (40×40px Rounded-xl with glowing background)
  - Middle: Primary Metric Value (Bold 30px / H2)
  - Bottom: Trend Badge (`+12.5%` Emerald / `-3.2%` Rose) + Subtitle caption (`vs last month`)
- **Visuals**: Glassmorphic background with 1px animated gradient border on hover.

### 8.4 Circular Score Gauge (`DS/ScoreGauge`)
- **Usage**: ATS Match Score, Skill Proficiency Meter, Profile Completion
- **Sizes**: `Small (80px)`, `Medium (120px)`, `Large (180px)`
- **Color Ranges**:
  - `80 - 100`: Emerald Gradient (`#10b981` to `#34d399`)
  - `50 - 79`: Amber/Sky Gradient (`#38bdf8` to `#f59e0b`)
  - `0 - 49`: Rose Gradient (`#ef4444` to `#f87171`)

### 8.5 Modal & Dialog (`DS/Modal`)
- **Anatomy**:
  - Backdrop: `rgba(8, 13, 26, 0.8)` with `backdrop-blur-md`
  - Container: Width 480px / 640px, Corner Radius 20px, Border 1px `rgba(56, 189, 248, 0.2)`
  - Header: Title (H3 20px) + Description (14px Slate-400) + Close Icon (20px)
  - Content: Dynamic slot with 24px padding
  - Footer: Actions alignment Right (Cancel Ghost Button + Confirm Primary/Glow Button)

---

## 9. Figma Setup & Token Import Guide

### How to use with Tokens Studio for Figma:
1. In Figma, open the **Tokens Studio for Figma** plugin (or Figma Native Variables).
2. Go to **Settings > Tools > Load Tokens from File**.
3. Select `src/design-system/tokens/figma-tokens.json` generated in this repository.
4. Click **Apply to Document** to immediately map all Colors, Typography, Spacing, and Elevation variables!
