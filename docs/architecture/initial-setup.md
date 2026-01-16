# Initial Project Architecture

## Overview
This project is initialized as a **Next.js (App Router)** + **Tauri v2** hybrid application. It adheres to the "Split-Brain" architecture where the Frontend (`src-ts`) acts as the presentation layer and the Backend (`src-tauri`) handles system operations.

## Directory Structure
- **Root**: Configuration files only (`package.json`, `next.config.js`, etc.).
- **src-ts/**: Contains all Next.js frontend logic, components, and hooks.
  - `app/`: Next.js App Router pages and layouts.
  - `lib/`: Utilities, including the Logger Bridge.
  - `components/`: UI components (Feature-First or Shadcn/UI style).
- **src-tauri/**: Rust backend and Tauri configuration.
  - `src/`: Rust source code.
  - `capabilities/`: Permission configurations.

## Key Design Decisions
1.  **Strict Separation**: No Node.js APIs in `src-ts`. All system calls go through Tauri Commands.
2.  **Unified Logging**: `src-ts/lib/logger.ts` bridges frontend logs to Rust's `tauri-plugin-log`, ensuring logs are persisted and rotated correctly.
3.  **Static Export**: Next.js is configured with `output: 'export'` to generate a static SPA compatible with Tauri's WebView.
4.  **Tailwind CSS**: Configured via PostCSS for build-time optimization, targeting `src-ts` content.

## Implementation Steps
1.  Scaffold Root Configs.
2.  Initialize `src-ts` with Next.js App Router structure.
3.  Initialize `src-tauri` with Tauri v2 capabilities.
4.  Implement Logger Bridge.
