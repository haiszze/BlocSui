import { Component, Input, Output, EventEmitter, model, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
// import * as Prism from 'prismjs';

// Import language you want
// import 'prismjs/components/prism-typescript';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.html',
  styleUrls: ['./stats-card.css'],
  standalone: true,
  imports: [ButtonModule],
})
export class StatsCardComponent {
  // code = input<string>('');
  title = input<string>('');
  subtitle = input<string>('');
  emitVisible = output<boolean>();
  description = input<string>('');
  componentType = input<string>('');

  // ngAfterViewInit() {
  //   Prism.highlightAll();
  // }

  setVisible(value: boolean) {
      this.emitVisible.emit(value);
  }
}
