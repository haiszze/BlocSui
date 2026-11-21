import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPONENT_DOCS } from '../../data/components';
import { ViewportMorph } from '../../shared/viewport-morph/viewport-morph';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ViewportMorph],
  templateUrl: './home.html',
})
export class Home {
  protected readonly docs = COMPONENT_DOCS;

  protected readonly steps = [
    { title: 'Detect', code: 'PlatformUtil.mobile()', body: 'One branch condition, read by every pass-through key.' },
    { title: 'Relocate', code: "$appendTo = signal('body')", body: 'On phones the overlay leaves its parent, so overflow and z-index stop clipping it.' },
    { title: 'Reshape', code: 'bottom-0 max-h-[80vh]', body: 'Tailwind classes turn the panel into a sheet with a pinned Cancel row.' },
  ];
}
