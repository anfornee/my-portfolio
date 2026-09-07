# Architecture

## Goal

Keep the portfolio easy to understand for both humans and coding agents.

The project should remain small enough that a developer can build a mental model of it quickly.

## Structure

```text
src/
├── components/
│   ├── layout/
│   └── ui/
├── data/
├── motion/
├── sections/
├── styles/
├── App.tsx
└── main.tsx
```

### `components/layout`

Reusable structural primitives such as:

- `Container`
- `Section`
- `SiteHeader`
- `SiteFooter`
- `SkipLink`

These components should know very little about page-specific content.

### `components/ui`

Small reusable interface elements such as text links, buttons, labels, tags, and future cards.

Do not turn this folder into a design-system framework prematurely.

### `data`

Static site content and navigation.

Separating content from presentation makes future editing safer and reduces duplicated markup.

### `motion`

All custom animation systems.

Current responsibilities:

- ambient canvas particles
- reduced-motion detection
- responsive SVG signal-path presentation from shared stage data

Animation code should not leak into unrelated layout components.

### `sections`

Page-level compositions such as:

- `Hero`
- `WorkPreview`
- `StoryPreview`
- future case-study sections

Sections may compose layout and UI primitives but should not redefine global design rules.

### `styles`

Global styling and design tokens.

- `tokens.css` contains the design system values.
- `global.css` contains reset, typography, document behavior, and shared utility classes.

## State

The portfolio currently requires no global application state.

Do not introduce a state-management library unless a future feature creates a real cross-component state problem.

## Dependencies

The baseline intentionally uses only React and browser platform APIs.

Prefer platform capabilities before adding libraries for:

- motion
- class composition
- simple icons
- scroll behavior

A dependency is justified when it meaningfully reduces complexity or improves accessibility/reliability beyond what the local implementation can reasonably provide.
