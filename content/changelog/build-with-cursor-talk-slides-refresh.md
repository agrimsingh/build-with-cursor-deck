---
title: "Build with Cursor talk deck refresh and config cleanup"
category: "update"
createdAt: "2026-02-17"
---

The slide deck in `lib/slides.ts` was fully rewritten and expanded into a talk-focused flow that covers operator, architect, and orchestrator workflows for Cursor-based development. The update also adds concrete command demos (`/deslop`, `/rams`, `/council`) and richer diagram-heavy content to support a live presentation format.

Project config was modernized by replacing `next.config.ts` with `next.config.mjs`, pinning TypeScript and React/Node type package ranges to current resolved versions, and updating lockfile state accordingly.

This ship also excludes local TypeScript build metadata from version control by ignoring `*.tsbuildinfo`.
