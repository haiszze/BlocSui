import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'blocsui-theme';
const DARK_CLASS = 'primeng-mobile-adapter-dark';

/** Light/dark theme, persisted per browser and shared with PrimeNG's dark selector. */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  readonly theme = signal<Theme>(this.initialTheme());

  constructor() {
    effect(() => {
      const theme = this.theme();
      this.document.documentElement.classList.toggle(DARK_CLASS, theme === 'dark');
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch {
        /* storage unavailable: theme still applies for this visit */
      }
    });
  }

  toggle(): void {
    this.theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
  }

  private initialTheme(): Theme {
    return this.document.documentElement.classList.contains(DARK_CLASS) ? 'dark' : 'light';
  }
}
