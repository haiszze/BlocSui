import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Home } from './home';

describe('Home', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Home], providers: [provideRouter([])] }).compileComponents();
  });

  it('switches the demo to a bottom sheet at phone width', () => {
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Dropdown');

    const range = el.querySelector('input[type=range]') as HTMLInputElement;
    range.value = '100';
    range.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(el.textContent).toContain('Bottom sheet');
    expect(el.textContent).toContain('390px');
  });
});
