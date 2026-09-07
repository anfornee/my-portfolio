# Content Guide

## Voice

Confident, understated, specific, warm.

The portfolio should sound like an experienced person describing real work, not a personal-brand template.

## Core statement

> I build software you notice by how it feels.

This is the primary expression of the site's product philosophy.

## Narrative

The career story is not a list of unrelated pivots.

It is a progression through connected ideas:

### Coffee

Themes:

- craft
- customer experience
- leadership
- ownership
- consistency
- care in the small details

### Audio engineering

Themes:

- signal flow
- systems thinking
- responsibility of each component
- invisible technical work serving the listener
- clarity over spectacle

### Software

Themes:

- maintainable systems
- thoughtful interfaces
- reducing friction
- making complex work feel simple
- engineering that supports rather than interrupts the experience

## Editing the homepage

- Edit hero copy, navigation, repeated principles, range examples, values,
  technology groups, and connect destinations in `src/data/site.ts`.
- Edit Baymax positioning and architectural decisions in
  `src/sections/SelectedWork.tsx`.
- Edit the AI workflow callout in `src/sections/HowIWork.tsx`.
- Edit the coffee, audio, and software narrative in
  `src/sections/CareerPath.tsx`.
- Change homepage section order in `src/App.tsx`.

Keep long editorial passages close to their semantic markup. Use data arrays for
short repeated content where consistent structure makes updates safer.

## Avoid

Avoid generic language such as:

- passionate
- innovative
- cutting-edge
- results-driven
- pixel-perfect
- problem solver
- coding since childhood

Prefer examples and outcomes over adjectives.

## Enterprise work

When proprietary details cannot be shown, describe work through:

1. problem
2. responsibility
3. constraints
4. technical challenge
5. outcome or impact

Do not apologize for the absence of proprietary screenshots.

## Case studies

Future case studies should be concise.

A useful pattern:

- Context
- Problem
- Role
- Approach
- Key decisions
- Outcome
- What changed afterward
