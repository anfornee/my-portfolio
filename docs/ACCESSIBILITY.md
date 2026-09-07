# Accessibility

Target: WCAG 2.2 AA.

Accessibility is part of the architecture, not a final QA step.

## Semantic structure

Use:

- `header`
- `nav`
- `main`
- `section`
- `footer`

Maintain one clear `h1` and logical heading order below it.

## Keyboard

Every interactive control must work without a pointer.

The site includes a skip-to-content link.

Use `:focus-visible` to provide a strong focus indication without adding noise to ordinary pointer interactions.

## Motion

Respect `prefers-reduced-motion`.

Decorative motion must not be required to understand state, navigation, or content.

## Decorative graphics

Ambient canvas and signal-path SVG are decorative.

They must be hidden from the accessibility tree.

## Touch

Interactive targets should generally provide at least a 44px usable area on touch devices.

## Color

Never use color as the only indication of:

- errors
- status
- active selection
- focus
- navigation meaning

Verify actual foreground/background combinations when new colors are introduced.

## Zoom and reflow

The layout should remain usable at 200% zoom without requiring horizontal scrolling for normal page content.

Avoid fixed heights for text-heavy areas.

## Links

Link text should describe the destination or action.

Do not rely on only an arrow icon to explain what a link does.

## Testing checklist

Before major releases:

- keyboard-only navigation
- visible focus
- reduced motion
- 200% zoom
- narrow mobile viewport
- browser accessibility tree spot-check
- automated accessibility audit
