import { Slide } from "./types";

export const slides: Slide[] = [
  // ============================================================
  // SLIDE 1: Title Slide
  // ============================================================
  {
    id: 1,
    title: "Build with Cursor #2",
    content: `From Pair Programmer to Agent Orchestrator

**Agrim Singh**

Feb 17, 2025`,
    type: "title",
  },

  // ============================================================
  // SLIDE 2: The Glass Ceiling
  // ============================================================
  {
    id: 2,
    title: "You've Hit a Glass Ceiling",
    content: `You're fast with Cursor. But you've felt the friction. You repeat yourself. You clean up AI slop. You onboard a new, forgetful intern every single morning. You've hit the glass ceiling of conversational development.

\`\`\`
PANEL 1: The Dream              PANEL 2: The Reality

  You        Agent                  You         Agent
  :-) -------> [AI]                 ;-( ------> [AI]
 "Build it!"   |                      "No, not
               v                       like that!"
            [Code]
                                      // AI comment
                                      try { ... } catch
                                      const x = foo as any;
\`\`\``,
    type: "diagram",
  },

  // ============================================================
  // SLIDE 3: The Path to Mastery
  // ============================================================
  {
    id: 3,
    title: "The 3 Stages of AI Mastery",
    content: `## Overview of the talk

\`\`\`
      /\\
     /  \\
    /____\\         <-- 3. The Orchestrator (Builds Engines)
   /      \\
  /________\\       <-- 2. The Architect (Designs Systems)
 /          \\
/____________\\     <-- 1. The Operator (Automates Self)
\`\`\``,
    type: "diagram",
  },

  // ============================================================
  // SLIDE 4: Part 1 - The Operator's Toolkit
  // ============================================================
  {
    id: 4,
    title: "The Operator: Automate Yourself",
    content: `## Part 1: The Operator's Toolkit

Your first step is to stop repeating yourself. If you can write down a piece of feedback, you can automate it.

We'll look at two primitives for this: **Commands** and **Skills**.

\`\`\`
   _________________
  / _______________ \\
 / |  ___________  | \\
|  | |           | |  |
|  | |  [+] /    | |  |
|  | |___________| |  |
|  |_______________|  |
 \\___________________/
\`\`\``,
    type: "content",
  },

  // ============================================================
  // SLIDE 5: Commands vs. Skills
  // ============================================================
  {
    id: 5,
    title: "Verbs vs. Adjectives",
    content: `## Commands vs. Skills

| Primitive | What It Is | When It Fires | Analogy |
|-----------|------------|---------------|---------|
| **Commands** | One-shot workflows | Manually, with \`/slash\` | **Verbs:** Things you *do* |
| **Skills** | Persistent knowledge packs | Auto-triggered by context | **Adjectives:** Things the agent *knows* |`,
    type: "content",
  },

  // ============================================================
  // SLIDE 6: Command /deslop
  // ============================================================
  {
    id: 6,
    title: "Command: /deslop",
    content: `## Command: /deslop

This command diffs against \`main\` and removes AI slop: extra comments, weird defensive checks, and unnecessary \`as any\` casts.

\`\`\`
BEFORE:                           AFTER:

// Ensure value is positive      function process(value) {
function process(value) {           if (value < 0) {
  try {                             throw new Error();
    if (value < 0) {              }
      throw new Error();            return (value as any) * 2;
    }
    return (value as any) * 2;
  } catch (e) {
    console.error(e);
  }
}
\`\`\``,
    type: "diagram",
    notes: "Show /deslop prompt live",
  },

  // ============================================================
  // SLIDE 7: Command /rams
  // ============================================================
  {
    id: 7,
    title: "Command: /rams",
    content: `## Command: /rams

Turns your agent into a senior design engineer. Runs a full accessibility and visual design review based on WCAG and Dieter Rams' principles.

\`\`\`
═══════════════════════════════════════════════════
RAMS DESIGN REVIEW: component.tsx
═══════════════════════════════════════════════════

CRITICAL (1 issue)
───────────────────
[A11Y] Line 24: Button missing accessible name
  <button><CloseIcon /></button>
  Fix: Add aria-label="Close"

═══════════════════════════════════════════════════
SUMMARY: 1 critical, 2 serious, 0 moderate
Score: 78/100
═══════════════════════════════════════════════════
\`\`\``,
    type: "diagram",
    notes: "Show /rams prompt live",
  },

  // ============================================================
  // SLIDE 8: Command /council
  // ============================================================
  {
    id: 8,
    title: "Command: /council",
    content: `## Command: /council

When I don't know what I don't know, I call a council. It spawns 10 agents to explore a codebase and report back.

\`\`\`
  You: /council "auth system"
   |
   v
[Agent]
   |--> [Sub-Agent 1: DB Schema]
   |--> [Sub-Agent 2: API Routes]
   |--> [Sub-Agent 3: Middleware]
   |--> [Sub-Agent 4: UI Components]
   |--> ... (x10)
   |
   v
[Synthesized Report]
\`\`\``,
    type: "diagram",
    notes: "Show /council prompt live",
  },

  // ============================================================
  // SLIDE 9: Skill Loadout (Combined)
  // ============================================================
  {
    id: 9,
    title: "My Skill Loadout",
    content: `## Skills = taste + leverage

These are the 4 skills I use most in real projects:

| Skill | Why it matters |
|-------|----------------|
| **emilkowal-animations** | Gives UI motion real product taste |
| **agent-browser** | Lets agents verify UI in a real browser |
| **eslint-line-limit** | Forces smaller files and cleaner architecture |
| **vercel-react-best-practices** | Bakes in production React patterns |

Stretch skills I add when needed: \`project-scaffold\`, \`web-design-guidelines\`, \`humanizer\`, \`code-simplifier\`.`,
    type: "content",
  },

  // ============================================================
  // SLIDE 10: Part 2 - The Architect's Playbook
  // ============================================================
  {
    id: 10,
    title: "The Architect: Design for Delegation",
    content: `## Part 2: The Architect's Playbook

You've automated yourself. Now, you need to automate your project's standards.

This is where you stop giving orders and start **designing systems for agents to work within**.

\`\`\`
     ______________________
    /                     /|
   /_____________________/ |
   |    |    ____   |    | |
   |    |   |    |  |    | |
   |    |   |____|  |    | |
   |    |           |    | /
   |____|___________|____|/
\`\`\``,
    type: "content",
  },

  // ============================================================
  // SLIDE 11: AGENTS.md isn't enough
  // ============================================================
  {
    id: 11,
    title: "The Map, Not the Encyclopedia",
    content: `## The Problem: AGENTS.md isn't enough

The modern approach: \`AGENTS.md\` is a slim map (~100 lines) that just *points* to deeper docs.

| BEFORE | AFTER |
|--------|-------|
| AGENTS.md (3000 lines) | AGENTS.md (~100 lines) |
| All rules, architecture, conventions | Map to docs/ & specs/ |
| All setup instructions | Key commands, non-negotiable rules |
| — | .cursor/rules/, docs/architecture.md, specs/{system}.md |`,
    type: "content",
  },

  // ============================================================
  // SLIDE 12: project-scaffold
  // ============================================================
  {
    id: 12,
    title: "Skill: project-scaffold",
    content: `## Skill: project-scaffold

A skill that embodies this philosophy. Generates an entire agent-friendly project structure.

\`\`\`
project-root/
├── AGENTS.md
├── .cursor/rules/
├── docs/
│   ├── architecture.md
│   ├── quality.md
│   └── plans/
├── specs/
│   └── {system}.md
└── .agents/workflows/
    └── implement-and-verify.md
\`\`\``,
    type: "diagram",
  },

  // ============================================================
  // SLIDE 13: The Three Essential Rules
  // ============================================================
  {
    id: 13,
    title: "The 3 Rules That Actually Matter",
    content: `## Instead of a giant rules file

Three auto-injected rules in \`.cursor/rules/\`:

1. **read-spec-before-coding.mdc** — Agent must read the spec before writing code
2. **update-docs-after-changes.mdc** — Agent must update docs when it changes behavior
3. **artifacts-to-disk.mdc** — Agent must write artifacts to disk, not just chat`,
    type: "content",
  },

  // ============================================================
  // SLIDE 14: Multi-Agent Review Loop
  // ============================================================
  {
    id: 14,
    title: "Your Agent Needs a Code Review, Too",
    content: `## Your Agent Needs a Code Review, Too

You don't review the agent's code. You spawn two *new* agents to do it for you. The \`implement-and-verify.md\` workflow.

\`\`\`
[Agent A: Implementer]
       | Writes code
       v
+--------------------+
|   [Changed Code]   |
+--------------------+
       |
       +-----> [Agent B: Spec Reviewer]
       |       "Does it match the spec?"
       |
       +-----> [Agent C: Behavioral Reviewer]
               "Are there edge cases?"
       |
       v
[Agent A: Implementer]
       | Fixes issues
       v
     (Loop)
\`\`\``,
    type: "diagram",
  },

  // ============================================================
  // SLIDE 15: Living Quality Scorecard
  // ============================================================
  {
    id: 15,
    title: "Is Your Codebase Healthy?",
    content: `## The Living Quality Scorecard

Introduce \`docs/quality.md\`. Grade every domain of your app from A to F. When an agent works on a feature, its final step is to update the grade.

| Domain | Grade | Notes |
|--------|-------|-------|
| Auth | B | Missing rate limiting |
| API | A | Well documented |
| UI Components | C | Inconsistent patterns |
| Tests | B+ | Good coverage, slow |`,
    type: "content",
  },

  // ============================================================
  // SLIDE 16: Part 3 - The Orchestrator
  // ============================================================
  {
    id: 16,
    title: "The Orchestrator: Build Your Factory",
    content: `## Part 3: The Orchestrator's Engine

You've automated yourself and your project. Now, let the agents run.

This is about **building engines for autonomy**, not just having conversations.

\`\`\`
[Task] -> [Agent] -> [Code] -> [Test] -> [Deploy] -> [Task]
  ^          |          |        |          |        |
  |__________|__________|________|__________|________|
 (Assembly Line)
\`\`\``,
    type: "content",
  },

  // ============================================================
  // SLIDE 17: Context is malloc, not free
  // ============================================================
  {
    id: 17,
    title: "Context is malloc, not free",
    content: `## The Core Problem of Long-Running Agents

LLM context is like C memory. You can \`malloc\` (read files, run commands), but there is no \`free\`. The only way to prevent context pollution is to kill the process and start a fresh one.

\`\`\`
Context Window (128k tokens)

[/////////////////             ] 50%
[///////////////////////////   ] 80%
[/////////////////////////////!] 99% -> KERNEL PANIC / GARBAGE OUTPUT
\`\`\``,
    type: "diagram",
  },

  // ============================================================
  // SLIDE 18: The Ralph Wiggum Technique
  // ============================================================
  {
    id: 18,
    title: "The Ralph Wiggum Technique",
    content: `## The Ralph Wiggum Technique

Shell scripts (\`ralph-wiggum-cursor\`) that run \`cursor-agent\` in a loop, treating git as the agent's long-term memory.

\`\`\`
+--------------------+
|   RALPH_TASK.md    |
| [ ] Task 1         |
| [ ] Task 2         |
+--------------------+
         ^
         | reads
+--------------------+
| ralph-loop.sh      | --- runs --> [cursor-agent]
| - Check progress   |
| - Commit to git    |
| - Loop or exit     |
+--------------------+
         | commits
         v
+--------------------+
|   Git History      |
+--------------------+
\`\`\``,
    type: "diagram",
  },

  // ============================================================
  // SLIDE 19: Autonomous Iteration & Context Rotation
  // ============================================================
  {
    id: 19,
    title: "The Autonomous Loop",
    content: `## Pattern: Autonomous Iteration & Context Rotation

Ralph runs until the checkboxes are done. It tracks token usage and automatically rotates context—kills the agent and starts a fresh one—every 80k tokens.

Token tracking: 🟢 🟡 🔴`,
    type: "content",
  },

  // ============================================================
  // SLIDE 20: Gutter Detection & Learning Loop
  // ============================================================
  {
    id: 20,
    title: "Self-Correcting Systems",
    content: `## Pattern: Gutter Detection & The Learning Loop

If the agent gets stuck, Ralph has "gutter detection." It kills the agent and writes a "Sign" to \`guardrails.md\`—a lesson. The next agent reads the guardrail and doesn't repeat the mistake.

\`\`\`
Agent 1: --fails--> [Wall]
   |
   v
[guardrails.md]
"Don't use that library"
   ^
   | reads
Agent 2: --> [Goes around wall]
\`\`\``,
    type: "diagram",
  },

  // ============================================================
  // SLIDE 21: Parallel Agents with Worktrees
  // ============================================================
  {
    id: 21,
    title: "True Multi-Agent Orchestration",
    content: `## Pattern: Parallel Agents with Worktrees

The \`--parallel\` flag spawns N agents, each in an isolated git worktree, to work on N different tasks simultaneously. It auto-merges when they're done.

\`\`\`
main ---
   |
   +-- (worktree: task-1) [Agent 1] -- merge --
   |
   +-- (worktree: task-2) [Agent 2] -- merge -----> main
   |
   +-- (worktree: task-3) [Agent 3] -- merge --
\`\`\``,
    type: "diagram",
  },

  // ============================================================
  // SLIDE 22: The Journey, Recapped
  // ============================================================
  {
    id: 22,
    title: "The 3 Stages of AI Mastery",
    content: `## The Journey, Recapped

\`\`\`
      /\\
     /##\\
    /####\\
   /######\\      <-- 3. Orchestrator (Autonomous Engines)
  /########\\
 /##########\\     <-- 2. Architect (System Design)
/############\\    <-- 1. Operator (Personal Automation)
\`\`\``,
    type: "diagram",
  },

  // ============================================================
  // SLIDE 23: Your Homework
  // ============================================================
  {
    id: 23,
    title: "Your Homework",
    content: `## Concrete call to action

- **This week:** Create one command. Steal \`/deslop\`.
- **This month:** Try \`project-scaffold\` on a side project.
- **This quarter:** Run an autonomous loop on a non-critical task.`,
    type: "content",
  },

  // ============================================================
  // SLIDE 24: Thank You & Q&A
  // ============================================================
  {
    id: 24,
    title: "Thank You",
    content: `[https://x.com/agrimsingh](https://x.com/agrimsingh)`,
    type: "title",
  },
];

export function getSlide(id: number): Slide | undefined {
  return slides.find((s) => s.id === id);
}

export function getTotalSlides(): number {
  return slides.length;
}
