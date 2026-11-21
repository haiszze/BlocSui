import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withViewTransitions,
} from '@angular/router';
import { providePrimeNG } from 'primeng/config';

import { CalendarPt } from '../../public/prime-pt/calendar.pt';
import { routes } from './app.routes';
import { Noir } from './themes/noir';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }),
      withViewTransitions({ skipInitialTransition: true }),
    ),
    provideAnimationsAsync(),
    provideHttpClient(),
    providePrimeNG({
      pt: {
        datepicker: CalendarPt,
      },
      theme: {
        preset: Noir,
        options: {
          darkModeSelector: '.primeng-mobile-adapter-dark',
        },
      },
    }),
  ],
};
