import { Component, computed, signal } from '@angular/core';

const DESKTOP_PX = 1280;
const PHONE_PX = 390;
const BREAKPOINT_PX = 640;

/**
 * Signature demo: drag the simulated viewport narrower and watch the dropdown
 * become a bottom sheet. Pure markup, no PrimeNG, so it can never break.
 */
@Component({
  selector: 'app-viewport-morph',
  templateUrl: './viewport-morph.html',
  styleUrl: './viewport-morph.css',
})
export class ViewportMorph {
  /** 0 = desktop, 100 = phone. */
  protected readonly t = signal(0);

  protected readonly px = computed(() => Math.round(DESKTOP_PX - (this.t() / 100) * (DESKTOP_PX - PHONE_PX)));
  protected readonly isPhone = computed(() => this.px() < BREAKPOINT_PX);
  protected readonly frameWidth = computed(() => `${100 - this.t() * 0.6}%`);

  protected readonly options = [
    'Quarterly operations review for the northern region',
    'Customer onboarding checklist with identity steps',
    'Incident postmortem template',
  ];

  protected onInput(event: Event): void {
    this.t.set(Number((event.target as HTMLInputElement).value));
  }

  protected jump(to: 'desktop' | 'phone'): void {
    this.t.set(to === 'desktop' ? 0 : 100);
  }
}
