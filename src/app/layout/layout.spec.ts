import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Layout } from './layout';

describe('Layout', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Layout], providers: [provideRouter([])] }).compileComponents();
  });

  it('links every documented component in the header', () => {
    const fixture = TestBed.createComponent(Layout);
    fixture.detectChanges();
    const links = Array.from(fixture.nativeElement.querySelectorAll('nav a')).map((a) => (a as HTMLElement).textContent?.trim());
    expect(links).toContain('Select');
    expect(links).toContain('MultiSelect');
  });
});
