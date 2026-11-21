import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CodeViewer } from './code-viewer';

describe('CodeViewer', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeViewer],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
  });

  it('loads the file and collapses long sources', () => {
    const fixture = TestBed.createComponent(CodeViewer);
    fixture.componentRef.setInput('file', 'select.pt.ts');
    fixture.detectChanges();

    const http = TestBed.inject(HttpTestingController);
    const source = Array.from({ length: 40 }, (_, i) => `const line${i} = ${i};`).join('\n');
    http.expectOne((req) => req.url.endsWith('prime-pt/select.pt.ts')).flush(source);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Show all 40 lines');
    expect(el.textContent).not.toContain('line30');
  });
});
