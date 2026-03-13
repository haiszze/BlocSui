# BlocSui Project

A modular Angular project optimized for mobile, featuring custom Primeng integrations and a scalable architecture.

## Features
- **Custom Primeng Components**: Extended and styled Primeng UI elements for mobile use.
- **Modular Architecture**: Clear separation of core services, shared components, feature modules, and layout.
- **Reusable Components**: Shared library for buttons, modals, loaders, and more.
- **Global Styles & Themes**: CSS-based theming and utility styles.
- **Standalone Components**: Angular Standalone API for easy import and modularity.
- **Testing**: Unit and e2e test setup for robust development.
- **Extensible**: Easily add new features, modules, or shared utilities.

## File Structure
```
src/
├── app/
│   ├── core/                          # Singleton services, guards, interceptors
│   │   ├── guards/                    # Auth and permission guards
│   │   ├── interceptors/              # HTTP interceptors
│   │   ├── services/                  # Auth, API, storage services
│   │   └── models/                    # User and response models
│   ├── shared/                        # Reusable components, directives, pipes
│   │   ├── components/                # Button, modal, loader, etc.
│   │   ├── directives/                # Highlight, tooltip directives
│   │   ├── pipes/                     # Safe HTML, truncate pipes
│   │   └── utils/                     # Validators, helpers
│   ├── features/                      # Feature modules (lazy-loaded)
│   │   ├── dashboard/                 # Dashboard feature
│   ├── layout/                        # Layout components (header, footer, sidebar)
│   ├── app.component.ts               # Root component
│   ├── app.config.ts                  # App configuration
│   └── app.routes.ts                  # Main routing
├── assets/                            # Static assets (images, icons, fonts, i18n)
├── environments/                      # Environment configs
└── styles/                            # Global styles
```

## Usage
- **Select Component**: Allows users to choose options from a dropdown, optimized for mobile. Includes overlapping text option list and custom styling.
- **Stats Card**: Displays code snippets and tags, moved to dashboard for modularity. Can be reused for analytics or info panels.
- **Dialog & Modal**: Custom dialog components for mobile overlays, supporting dynamic content and visibility control.

## Development
- Start: `ng serve` — Launches the local dev server.
- Build: `ng build` — Compiles for production or testing.
- Test: `ng test` — Runs unit tests with Karma.
- E2E: `ng e2e` — Runs end-to-end tests.
- Generate: `ng generate <schematic>` — Scaffold new components, modules, etc.

## Important Behaviors
- All components use Angular Standalone API for easy import and modularity.
- Guards and interceptors are registered in `core` for global access.
- Feature modules are lazy-loaded for performance.
- Shared components are reusable across features.
- Internationalization files are in `assets/i18n`.
- Code follows Angular best practices for scalability and maintainability.
- Custom Primeng themes and presets are available in `src/app/themes/`.
- Layout components provide consistent navigation and structure across the app.
- Utility functions and validators are centralized in `shared/utils/`.

## How to Add a New Feature
1. Create a new folder in `features/` for your module.
2. Scaffold pages, components, and services as needed.
3. Register routes in your feature's routing file.
4. Use shared components and utilities for consistency.
5. Add any new models to `core/models/` if needed.

## Contributing
1. Fork the repo and create a feature branch.
2. Follow the file structure for new modules/components.
3. Write unit tests for new features.
4. Submit a pull request with a clear description.


For more details, see the Angular CLI documentation and Primeng guides.
