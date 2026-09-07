# Anthony Pereira — Developer Portfolio

A personal developer portfolio built with React, TypeScript, and Vite.

The site is designed around a simple idea:

> I build software you notice by how it feels.

The visual language combines restrained cyberpunk-sunset atmosphere with editorial typography, subtle motion, and a signal-path motif representing:

**craft → signal → systems → software**

## Philosophy

This portfolio is intentionally simple.

The goal is not to showcase every technology I have used or every project I have touched. It is to communicate how I think about software:

- clarity over novelty
- usability over spectacle
- maintainability over cleverness
- thoughtful systems over isolated features
- engineering that supports the developer and user experiences instead of competing with them

The design draws from my background in coffee, audio engineering, and enterprise software development.

## Tech

- React
- TypeScript
- Vite
- CSS
- Canvas
- SVG

The project intentionally avoids unnecessary runtime dependencies.

## Accessibility

Accessibility is treated as part of the product and engineering foundation, not as a final compliance pass.

The goal is for the site to feel polished without making that polish dependent on a specific input method, visual ability, or motion preference.

The site aims for WCAG 2.2 AA and is built around a few core principles:

- semantic HTML and clear document structure
- logical heading hierarchy and navigation landmarks
- complete keyboard accessibility
- visible `:focus-visible` states
- readable color contrast and typography
- no information conveyed by color alone
- no hover-only interactions
- responsive reflow at narrow widths and high zoom levels
- generous touch targets where appropriate
- decorative Canvas and SVG elements hidden from assistive technology
- no scroll hijacking or custom cursor behavior
- motion that enhances the experience without being required to understand it
- full support for `prefers-reduced-motion`

The ambient particles, blurred lights, and signal-path animation are intentionally decorative. If motion is reduced or unavailable, the content and hierarchy remain complete.

Accessibility decisions should favor clarity and predictability over visual novelty.

See:

- `docs/ACCESSIBILITY.md`
- `docs/MOTION.md`

## Visual System

The site uses a restrained dark palette with subtle neon accents.

Core ideas:

- midnight indigo surfaces
- soft magenta and blue atmospheric glows
- sparse ambient particles
- abstract signal-path animation
- large editorial typography
- generous negative space
- subtle interaction motion

Motion is decorative and never required to understand content.

`prefers-reduced-motion` is respected throughout the site.

## Architecture

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