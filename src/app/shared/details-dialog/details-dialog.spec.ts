import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { DetailsDialog } from './details-dialog';

describe('DetailsDialog', () => {
  it('starts closed', async () => {
    await TestBed.configureTestingModule({ imports: [DetailsDialog], providers: [provideNoopAnimations()] }).compileComponents();
    const fixture = TestBed.createComponent(DetailsDialog);
    fixture.detectChanges();
    expect(fixture.componentInstance.visible()).toBeFalse();
  });
});
