import { Component, OnDestroy, computed, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';

import { MultiSelectPt } from '../../../../public/prime-pt/multiselect.pt';
import { PlatformUtil } from '../../../../public/prime-pt/platform.util';
import { SelectPt } from '../../../../public/prime-pt/select.pt';
import { SAMPLE_OPTIONS } from '../../data/components';

type Mode = 'desktop' | 'mobile';

/** Side-by-side comparison of PrimeNG defaults and the BlocSui pass-through. */
@Component({
  selector: 'app-live-preview',
  imports: [FormsModule, SelectModule, MultiSelectModule],
  templateUrl: './live-preview.html',
})
export class LivePreview implements OnDestroy {
  kind = input.required<'select' | 'multiselect'>();

  protected readonly options = SAMPLE_OPTIONS;
  protected readonly selectPt = SelectPt;
  protected readonly multiSelectPt = MultiSelectPt;

  protected readonly mode = signal<Mode>(PlatformUtil.mobile() ? 'mobile' : 'desktop');
  /** Bumped on mode change so PrimeNG re-runs the pass-through from scratch. */
  protected readonly renderKey = signal(0);
  protected readonly renderKeys = computed(() => [this.renderKey()]);

  protected defaultValue: unknown = null;
  protected blocValue: unknown = null;

  protected setMode(mode: Mode): void {
    if (mode === this.mode()) return;
    PlatformUtil.simulateMobile(mode === 'mobile');
    this.mode.set(mode);
    this.defaultValue = null;
    this.blocValue = null;
    this.renderKey.update((k) => k + 1);
  }

  protected summary(value: unknown): string {
    if (value == null || (Array.isArray(value) && value.length === 0)) return 'Nothing selected';
    const values = Array.isArray(value) ? value : [value];
    return `${values.length} selected`;
  }

  ngOnDestroy(): void {
    PlatformUtil.simulateMobile(null);
  }
}
