# DFS AI Club Website — Project Handoff

**Location:** `C:\Users\Vishnu\Desktop\AI Community Website`  
**Date:** October 14, 2026  
**Primary URL:** `http://localhost:3000/`  

---

## 1. Executive Summary

This project is the official web portal for the **DFS AI Club** within DFS. Its mission is to transform personnel from **AI Superusers into AI Builders**, operating internally as an enterprise startup with an AI solutions marketplace, certified engineering talent, and a structured incubation model.

The application contains two core experiences:
1. **Parent Home (`/`)**: The flagship portal presenting the Vision, Startup Operating Model, Flagship Incubator entry points, and an Idea Submission channel connected to Microsoft Forms.
2. **Start from Scratch (`/normal`, `/engineer`, `/start-from-scratch`)**: The dedicated 8-week builder cohort curriculum, pedagogical framework, and pilot team roster.

---

## 2. Hard Requirements & User Directives (Non-Negotiable)

1. **Background Style**: Solid plain gray (`#edf0f5`). Zero background dots or dot-matrix gradients.
2. **One-Window / One-Scroll Segmentation**:
   - Every primary section is structured to consume exactly one viewport height window (`h-screen` or `min-h-[calc(100vh-4rem)]`).
   - The first view (Hero) occupies full `h-screen` with an expanded `82vh` card so that subsequent sections (e.g. Vision) never peek above the fold.
3. **Hero Card**:
   - Signature Blue-Violet gradient: `linear-gradient(135deg, #5e1ebb 0%, #3538b8 46%, #095fc5 100%)`.
   - Title: `DFS AI Club`
   - Subtext: `Transforming AI Superusers to AI Builders`
   - Body: Concisely describes moving beyond chat interfaces into production software engineering.
4. **Header & Branding**:
   - Logo Asset: `public/dfs-ai-club-logo.png` (official 3D tech crest).
   - Brand Text: `DFS AI CLUB`
   - Header Subtitle: `Marketplace for your solution` placed directly under the brand title.
5. **Vision Section**:
   - Statement: `To establish a unified enterprise marketplace that empowers DFS teams to discover, scale, and maximize the value of internally engineered AI assets.`
   - Exclusively displays **Stage 01: AI Superusers → AI Builders**.
   - Contains exactly 3 checkmarked milestones and fits completely in a single screen view.
6. **CTA Discipline**:
   - **No repetitive CTA buttons.** CTAs appear exclusively at the very end of the page.
   - Action 1: "Join AI Club" (opens registration modal).
   - Action 2: "Have an idea, submit here" (opens Microsoft Forms incubator portal).
7. **Footer**:
   - Minimalist text only: `©️DFS AI Club - 2026`.
8. **Browser Automation**:
   - **Do NOT spawn browser subagents.** Screenshots and visual verification will be provided directly by the user.

---

## 3. Technology Architecture

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS with custom theme extensions
- **Icons**: `lucide-react`
- **Animation/Effects**: `canvas-confetti` (for registration completion)
- **Routing**: `react-router-dom`

### Route Map
| Route | Component | Purpose |
|---|---|---|
| `/` | `src/pages/HomePage.jsx` | DFS AI Club Parent Home |
| `/home` | `src/pages/HomePage.jsx` | Alias for Parent Home |
| `/normal` | `src/pages/StartFromScratchPage.jsx` | 8-Week Cohort (Community View) |
| `/engineer` | `src/pages/StartFromScratchPage.jsx` | 8-Week Cohort (Engineer RFC View) |
| `/start-from-scratch` | `src/pages/StartFromScratchPage.jsx` | Canonical program path |

---

## 4. File Structure & Component Breakdown

```
src/
├── App.jsx                     # Route declarations
├── index.css                   # Plain gray background, scrollbars, gradient utilities
├── pages/
│   ├── HomePage.jsx            # Parent home page container
│   └── StartFromScratchPage.jsx# Flagship cohort program container
└── components/
    ├── home/
    │   ├── HomeNavbar.jsx      # Top header with logo, tagline, smooth scroll links
    │   ├── HomeHero.jsx        # 100vh full-screen signature blue-violet card
    │   ├── HomeVision.jsx      # Stage 01 only: Superusers to Builders
    │   ├── HomeAboutUs.jsx     # 5 Startup operating pillars in compact grid
    │   ├── HomeCtaSection.jsx  # Flagship incubator card + final CTAs
    │   ├── HomeFooter.jsx      # Minimal ©️DFS AI Club - 2026
    │   ├── JoinClubModal.jsx   # Interactive modal for club registration
    │   └── IdeaSubmissionModal.jsx # Microsoft Forms integration modal
    └── scratch/
        ├── ScratchNavbar.jsx   # Dedicated cohort header with return link
        ├── ScratchHero.jsx     # Cohort hero banner
        ├── ScratchLearningMethod.jsx # Heuristic, Enactive, Constructivist + Main Ideology
        ├── ScratchPilotBatch.jsx # Groups A, B, C, D (3 members each with photos/roles)
        └── ScratchStructure.jsx  # 8-week accordion syllabus (Observability, Security, Gateways)
```

---

## 5. Segment-by-Segment Viewport Details

| Segment | Anchor ID | Dimensions | Content |
|---|---|---|---|
| **1. Hero** | `#hero` | `h-screen`, Card `h-[82vh]` | DFS AI Club title, tagline "Where AI Users Become AI Builders", signature blue-violet gradient |
| **2. Vision** | `#vision` | `min-h-[calc(100vh-4rem)]` | Stage 01 only: Superusers → Builders, 3 core checkmarks |
| **3. About Us** | `#about` | `min-h-[calc(100vh-4rem)]` | 5 Startup Pillars: Marketplace, Engineers, Hosted Solutions, Marketing, Certification |
| **4. Programs & CTA** | `#programs` | `min-h-[calc(100vh-4rem)]` | Start from Scratch card + "Ready to Build With Us?" + Footer |

---

## 6. Development & Operational Commands

### Start Local Development Server
```bash
npm run dev
```
Runs at `http://localhost:3000/` with fast HMR.

### Production Build
```bash
npm run build
```
Generates verified distribution bundle into `dist/`. Current build status: **0 errors, 1,617 modules transformed**.
