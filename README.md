# build-with-cursor-deck

Slide deck for the "Build with Cursor #2" talk: *From Pair Programmer to Agent Orchestrator*.

Built with Next.js 16, React 19, Tailwind CSS 4, and Framer Motion.

## Run locally

```bash
git clone https://github.com/agrimsingh/build-with-cursor-deck.git
cd build-with-cursor-deck
pnpm install
pnpm dev
```

Open `http://localhost:3000` (it redirects to `/slides/1`).

## Where to edit content

Main file: `lib/slides.ts`

Each slide is a typed object:

```ts
{
  id: 1,
  title: "Slide title",
  content: `Markdown content`,
  type: "title", // "title" | "content" | "code" | "diagram" | "quote"
  notes: "Optional speaker note",
}
```

The app statically generates one route per slide at `/slides/[id]`.

## Keyboard controls

- `Right Arrow`, `Space`, `Enter`: next slide
- `Left Arrow`, `Backspace`: previous slide
- `Home`: first slide
- `End`: last slide
- `1-9`: jump to slide number (if it exists)

Touch swipes are supported on mobile/tablet.

## Project structure

```txt
app/
  page.tsx                 # Redirects to /slides/1
  slides/[id]/page.tsx     # Dynamic slide route + metadata
  slides/[id]/SlidePresenter.tsx
components/
  Slide.tsx                # Per-slide layout + transitions
  SlideNav.tsx             # Bottom navigation/progress UI
  MarkdownRenderer.tsx
  CodeBlock.tsx
lib/
  slides.ts                # Talk content
  types.ts                 # Slide and navigation types
public/
  logo.svg
  fonts/
```

## Styling and theming

- Global theme tokens and typography: `app/globals.css`
- Slide motion/layout behavior: `components/Slide.tsx`
- Markdown rendering behavior: `components/MarkdownRenderer.tsx`

## Build and deploy

```bash
pnpm build
pnpm start
```

Deploy anywhere Next.js runs (Vercel is the fastest path).

## Notes

- `content/changelog/` is used for ship entries.
- `*.tsbuildinfo` is gitignored.

---

Created by [Agrim Singh](https://x.com/agrimsingh).
