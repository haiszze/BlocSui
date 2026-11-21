# BlocSui Project

A modular Angular project optimized for mobile, featuring custom Primeng integrations and a scalable architecture.

## Features
- **Adaptive Select and MultiSelect**: PrimeNG pass-through recipes by @Haissze (`public/prime-pt/*.pt.ts`) that keep a dropdown on desktop and switch to a bottom sheet with a sticky Cancel row on mobile.
- **Live preview**: each component page shows PrimeNG's default next to the BlocSui version, with a Desktop/Mobile switch powered by `PlatformUtil.simulateMobile()`.
- **Resize demo**: the home page has a draggable viewport that shows the dropdown turning into a bottom sheet below 640px.
- **Source viewer**: syntax-highlighted source with line numbers, copy, download, and collapse for long files.
- **Light and dark themes**: follows the system setting, remembers your choice, and shares PrimeNG's dark selector.
- **Section index**: component pages have a sticky "On this page" index that highlights the current section.

## File Structure
```
public/prime-pt/          # Pass-through recipes (served as source and imported by the app)
src/app/
├── core/                 # ThemeService
├── data/components.ts    # Content for every component page (single source of truth)
├── layout/               # Header, footer, theme toggle
├── pages/
│   ├── home/             # Hero, resize demo, component index
│   └── component-doc/    # One data-driven page for /select and /multiselect
├── shared/
│   ├── code-viewer/      # Highlighted source viewer
│   ├── details-dialog/   # PlatformUtil explainer
│   ├── live-preview/     # Default vs BlocSui comparison
│   ├── theme-toggle/
│   └── viewport-morph/   # Draggable resize demo
└── themes/noir.ts        # PrimeNG preset
```

## Adding a component
1. Add `public/prime-pt/<name>.pt.ts`.
2. Add an entry to `COMPONENT_DOCS` in `src/app/data/components.ts`.
3. Add a route in `app.routes.ts` with `data: { slug: '<name>' }`.

## Development
- Start: `ng serve` — Launches the local dev server.
- Build: `ng build` — Compiles for production or testing.
- Test: `ng test` — Runs unit tests with Karma.
- Generate: `ng generate <schematic>` — Scaffold new components, modules, etc.
