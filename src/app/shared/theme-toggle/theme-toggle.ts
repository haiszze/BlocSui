import { Component, computed, inject } from '@angular/core';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <button
      type="button"
      (click)="theme.toggle()"
      [attr.aria-label]="label()"
      [attr.title]="label()"
      class="grid size-9 place-items-center rounded-lg border border-line text-ink-soft transition-colors hover:border-line-strong hover:text-ink"
    >
      <i class="pi text-sm" [class.pi-moon]="!isDark()" [class.pi-sun]="isDark()"></i>
    </button>
  `,
})
export class ThemeToggle {
  protected readonly theme = inject(ThemeService);
  protected readonly isDark = computed(() => this.theme.theme() === 'dark');
  protected readonly label = computed(() => (this.isDark() ? 'Switch to light theme' : 'Switch to dark theme'));
}
