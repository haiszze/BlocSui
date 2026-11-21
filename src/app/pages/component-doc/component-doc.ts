import { DOCUMENT } from '@angular/common';
import { Component, DestroyRef, afterNextRender, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { COMPONENT_DOCS, PtKey, findDoc } from '../../data/components';
import { CodeViewer } from '../../shared/code-viewer/code-viewer';
import { DetailsDialog } from '../../shared/details-dialog/details-dialog';
import { LivePreview } from '../../shared/live-preview/live-preview';

interface TocItem {
  id: string;
  label: string;
  mono?: boolean;
}

/** One documentation page for any adaptive component, driven by COMPONENT_DOCS. */
@Component({
  selector: 'app-component-doc',
  imports: [RouterLink, CodeViewer, DetailsDialog, LivePreview],
  templateUrl: './component-doc.html',
})
export class ComponentDocPage {
  /** Bound from the route's `data.slug`. */
  slug = input<string>();

  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly doc = computed(() => findDoc(this.slug()));
  protected readonly next = computed(() => {
    const i = COMPONENT_DOCS.indexOf(this.doc());
    return COMPONENT_DOCS[(i + 1) % COMPONENT_DOCS.length];
  });

  protected readonly toc = computed<TocItem[]>(() => [
    { id: 'preview', label: 'Live preview' },
    ...this.doc().keys.map((k) => ({ id: this.keyId(k), label: k.key, mono: true })),
    { id: 'source', label: 'Source' },
  ]);

  protected readonly active = signal('preview');
  protected readonly platformDialog = signal(false);

  constructor() {
    afterNextRender(() => this.observeSections());
  }

  protected keyId(k: PtKey): string {
    return 'key-' + k.key.replace(/\W+/g, '-');
  }

  protected scrollTo(id: string): void {
    this.document.getElementById(id)?.scrollIntoView({ block: 'start' });
    this.active.set(id);
  }

  private observeSections(): void {
    if (typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) this.active.set(visible[0].target.id);
      },
      { rootMargin: '-80px 0px -60% 0px' },
    );
    this.document.querySelectorAll('[data-toc-section]').forEach((el) => observer.observe(el));
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
