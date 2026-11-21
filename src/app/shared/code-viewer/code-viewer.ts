import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, inject, input, signal } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-typescript';

const COLLAPSED_LINES = 22;

/** Read-only source viewer for files in public/prime-pt. */
@Component({
  selector: 'app-code-viewer',
  templateUrl: './code-viewer.html',
})
export class CodeViewer {
  /** File name under public/prime-pt, e.g. "select.pt.ts". */
  file = input.required<string>();

  private readonly http = inject(HttpClient);
  private readonly document = inject(DOCUMENT);

  protected readonly code = signal('');
  protected readonly failed = signal(false);
  protected readonly copied = signal(false);
  protected readonly expanded = signal(false);

  protected readonly url = computed(() => new URL(`prime-pt/${this.file()}`, this.document.baseURI).toString());
  protected readonly lines = computed(() => (this.code() ? this.code().replace(/\n$/, '').split('\n') : []));
  protected readonly collapsible = computed(() => this.lines().length > COLLAPSED_LINES + 4);
  protected readonly highlighted = computed(() => {
    const visible = this.collapsible() && !this.expanded() ? this.lines().slice(0, COLLAPSED_LINES) : this.lines();
    return Prism.highlight(visible.join('\n'), Prism.languages['typescript'], 'typescript');
  });
  protected readonly lineNumbers = computed(() => {
    const count = this.collapsible() && !this.expanded() ? COLLAPSED_LINES : this.lines().length;
    return Array.from({ length: count }, (_, i) => i + 1).join('\n');
  });

  constructor() {
    effect((onCleanup) => {
      this.code.set('');
      this.failed.set(false);
      this.expanded.set(false);
      const sub = this.http.get(this.url(), { responseType: 'text' }).subscribe({
        next: (text) => this.code.set(text),
        error: () => this.failed.set(true),
      });
      onCleanup(() => sub.unsubscribe());
    });
  }

  protected copy(): void {
    navigator.clipboard?.writeText(this.code()).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 1600);
    });
  }
}
