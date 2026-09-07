# Portfolio Agent Guide

## Purpose

This portfolio should communicate thoughtful engineering, mature product judgment, and a career built around craft, systems, and customer experience.

The site is intentionally restrained. It should feel modern and atmospheric without becoming a trend-driven "developer portfolio."

Core idea:

> I build software you notice by how it feels.

The visual narrative connects craft → signal → systems → software.

## Priorities

When making changes, optimize in this order:

1. Content clarity
2. Accessibility
3. Maintainability
4. Performance
5. Visual polish
6. Novelty

Never sacrifice a higher priority to improve a lower one.

## Visual rules

- Use the design tokens in `src/styles/tokens.css`.
- Do not hard-code palette colors in components.
- Accent pink is punctuation, not a dominant fill.
- Glows should feel like distant light, not neon signage.
- Elevated surfaces should remain close to the page background.
- Avoid glassmorphism as a default visual treatment.
- Avoid decorative borders around every element.
- Avoid terminal, code-editor, circuit-board, or hacker visual clichés.
- The signal-path motif should remain abstract and elegant.
- Prefer whitespace, typography, and hierarchy over decoration.

## Motion rules

- Motion must never be required to understand content.
- Respect `prefers-reduced-motion`.
- Ambient animation should be slow, sparse, and non-distracting.
- Interface motion should be short and predictable.
- Avoid bouncing, elastic, springy, or playful motion unless deliberately introduced.
- Avoid perpetual motion immediately adjacent to long-form reading content.
- Canvas is reserved for decorative ambient motion.
- SVG is preferred for meaningful scalable decorative structure such as signal paths.

See `docs/MOTION.md`.

## Component rules

Before creating a new component:

1. Check whether an existing primitive can be composed.
2. Keep layout primitives boring and reusable.
3. Keep page-specific composition inside `src/sections`.
4. Keep site copy and navigation in `src/data` where practical.
5. Keep animation implementation inside `src/motion`.
6. Avoid global state unless the feature genuinely requires it.

Do not create abstractions that only have one trivial use unless they simplify a meaningful concern.

## Accessibility rules

- Semantic HTML first.
- Preserve a logical heading hierarchy.
- All interactive elements must be keyboard usable.
- Use visible `:focus-visible` states.
- Do not communicate meaning by color alone.
- Use at least 44px touch targets where appropriate.
- No scroll hijacking.
- No custom cursor.
- No hover-only content.
- Decorative SVG/canvas must be hidden from assistive technology.
- Test at 200% zoom.
- Target WCAG 2.2 AA.

See `docs/ACCESSIBILITY.md`.

## Performance rules

- Do not add animation libraries without a concrete need.
- Prefer CSS, SVG, and small handwritten canvas utilities.
- Cap canvas device pixel ratio.
- Pause ambient animation when the document is hidden.
- Avoid unnecessary React renders inside animation loops.
- Avoid large image assets when CSS/SVG can achieve the result.

## Code style

- React + TypeScript.
- Prefer small components with explicit props.
- Prefer CSS classes over inline styles for visual presentation.
- Keep effects narrowly scoped and clean them up.
- No new runtime dependency without documenting why it is necessary.
- Keep names descriptive rather than clever.

## Content voice

The writing should feel confident, understated, specific, and human.

Avoid generic portfolio phrases such as:

- passionate developer
- coding ninja
- pixel-perfect experiences
- rockstar engineer
- cutting-edge solutions
- I have always loved computers

Prefer concrete language about systems, craft, responsibility, customers, and outcomes.

See `docs/CONTENT_GUIDE.md`.

## Before finishing a change

- Run the project build.
- Check the browser console.
- Keyboard-test new interactions.
- Check reduced-motion behavior when motion changed.
- Check mobile layout.
- Check that no new arbitrary colors, timing values, or spacing values should instead be tokens.
- Update documentation when architecture, visual rules, or conventions change.
