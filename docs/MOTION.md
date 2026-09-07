# Motion

## Principle

Motion should behave like good sound design: it supports the experience without demanding attention.

Priority order:

1. Content clarity
2. Feedback
3. Spatial continuity
4. Atmosphere

## Layers

### Ambient motion

Implemented with canvas.

Purpose:

- create depth
- suggest dust, distant sparks, or stars
- keep the dark background from feeling static

Rules:

- sparse particle count
- low opacity
- slow velocity
- no interaction requirement
- pause while the page is hidden
- render at a capped device pixel ratio
- remove animation under reduced-motion preference

Hero glow shapes use transform-only CSS breathing over 32-second alternate cycles.
This motion is confined to the hero and explicitly disabled under reduced motion.
Particle density is capped at 64, with a small warm, smaller-radius variation;
canvas colors are read from design tokens once when the effect starts.

### Structural motion

Implemented with SVG.

Purpose:

- express the signal-path visual language
- create continuity between the site's story and engineering philosophy

Rules:

- subtle stroke movement
- soft moving pulse
- low-intensity glow
- decorative only
- no literal waveform representation

The signal traveler and node blooms share a 14-second requestAnimationFrame clock.
Bloom intensity follows proximity to each node with smooth falloff; the traveler
fades at the open ends. The clock pauses while the document is hidden and is not
started under reduced motion. The path and labels remain visible. Timings live in
CSS tokens; path geometry and bloom reach stay local to the SVG implementation.
The public signal component selects one horizontal or vertical SVG at the mobile
breakpoint, so only the visible orientation animates. Both orientations share the
same stage data, timing, traveler, and node-activation behavior.

### Interface motion

Implemented primarily with CSS.

Purpose:

- communicate hover/focus/state changes
- make interactions feel polished

Rules:

- short duration
- predictable easing
- small displacement
- no bounce or elastic easing by default

## Reduced motion

When `prefers-reduced-motion: reduce` is active:

- ambient particles do not animate
- the signal pulse does not travel
- smooth scrolling is disabled
- transitions are effectively removed
- content remains visually complete

Do not hide content in reduced-motion mode.

## Tokens

Motion timings and easing live in `src/styles/tokens.css`.

Do not introduce arbitrary animation timing inside components when an existing token fits.

## Future scroll reveal

Do not add broad scroll-reveal animation until the static page hierarchy is complete.

If introduced later:

- content should be readable before animation
- reveal distances should be small
- reveal should run once
- reduced-motion users should receive content immediately
