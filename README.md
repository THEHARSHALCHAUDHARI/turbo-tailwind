# 👻 Wraith Repo (Turborepo Edition)

> *Where ideas become structure.*

**Wraith Repo** is an opinionated, high-performance monorepo starter template built on **Turborepo**. It is designed to scale from a simple side project to a complex ecosystem, featuring a pre-configured Next.js web app with a unique "Spectral" aesthetic and battle-hardened error handling.

## ✨ Key Features

### 🏗️ Monorepo Architecture
- **Powered by Turborepo:** High-performance build system with remote caching capabilities.
- **Shared UI Library:** Pre-configured `@repo/ui` package for sharing components across applications.
- **Shared Configs:** Centralized TypeScript, ESLint, and Tailwind configurations.

### 🎨 Spectral Aesthetics (Web App)
- **Mouse-Follower Glow:** A performance-optimized (60fps) background glow using `useRef` for zero-lag tracking.
- **Orbital Loading:** Custom double-ring orbital animation for route transitions (`loading.tsx`).
- **Global Theme System:** A sophisticated semantic theme ("Earthy" Light / "Void" Dark) defined in `apps/web/app/globals.css`.

### 🛡️ The Safety Suite
The web workspace comes with a complete crash-handling UI so users never see a white screen:
- **`loading.tsx`:** Instant feedback during data fetches.
- **`error.tsx` (Spectral Dissonance):** Handles component-level crashes with recovery options.
- **`global-error.tsx` (Core Failure):** A full-screen system replacement for critical root layout failures.

## ⚡ Tech Stack

- **Monorepo Tool:** [Turborepo](https://turbo.build/)
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** Tailwind CSS + CSS Variables
- **Package Manager:** pnpm
- **Language:** TypeScript

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone [https://github.com/THEHARSHALCHAUDHARI/wraith-repo.git](https://github.com/THEHARSHALCHAUDHARI/wraith-repo.git) my-wraith-app
cd my-wraith-app