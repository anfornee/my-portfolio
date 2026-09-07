# Design System

## Design direction

Midnight editorial with restrained cyberpunk-sunset atmosphere.

The interface should feel:

- dark without being gloomy
- modern without being trend-driven
- minimal without being sterile
- expressive without becoming theatrical
- technical without relying on developer clichés

## Palette

Core tokens live in `src/styles/tokens.css`.

### Surfaces

- Background: `#0D0B18`
- Elevated surface: `#161226`
- Hovered surface: `#1F1933`

### Typography

- Primary text: `#FFFFFF`
- Secondary text: `#9F99B7`

### Accent

- Accent pink: `#FF00A0`
- Selection purple: `#1F1135`

### Semantic colors

- Success: `#05F2DB`
- Warning: `#FF9A00`
- Error: `#FF124F`
- Info: `#00BFFF`

Semantic colors should not become general decorative colors.

## Accent usage

Pink is the site's signature accent, but it should remain scarce.

Good uses:

- focus rings
- active navigation detail
- small eyebrow text
- signal-path highlight
- restrained link decoration
- occasional visual punctuation

Avoid:

- large pink panels
- glowing pink text
- pink borders around every card
- large gradients that overpower content

## Blurred light

Blurred color should feel like distant atmospheric light.

Preferred behavior:

- low opacity
- large radius
- partially off-canvas
- slow or no motion
- never positioned behind text strongly enough to reduce readability

The site should not become glassmorphic.

## Typography

Typography should carry much of the visual identity.

Default stack:

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

The baseline does not fetch a remote font, which preserves performance and privacy.

A future self-hosted font can replace the stack after visual testing.

Use monospace only for small metadata or technical details, not body text.

## Layout

Use generous negative space.

Content width should be constrained so reading never feels stretched across a widescreen display.

The hero may use more dramatic scale than later sections.

## Surfaces

Cards and panels should be introduced only when grouping genuinely helps comprehension.

Prefer hierarchy and whitespace over containers.

## Signal motif

The signal path represents:

craft → signal → systems → software

It should stay abstract.

Avoid literal:

- waveforms
- EQ displays
- patch-bay illustrations
- circuit traces
- oscilloscope UI

The motif may appear as:

- a thin path
- nodes
- a moving pulse
- section transitions
- subtle visual continuity between ideas
