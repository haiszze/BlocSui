import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { COMPONENT_DOCS } from '../data/components';
import { ThemeToggle } from '../shared/theme-toggle/theme-toggle';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ThemeToggle],
})
export class Layout {
  protected readonly docs = COMPONENT_DOCS;
  protected readonly year = new Date().getFullYear();
}
