import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () => import('./layout/layout').then((m) => m.Layout),
    children: [
      {
        path: 'home',
        title: 'BlocSui · Adaptive PrimeNG blocks',
        loadComponent: () => import('./pages/home/home').then((m) => m.Home),
      },
      {
        path: 'select',
        title: 'Select · BlocSui',
        data: { slug: 'select' },
        loadComponent: () => import('./pages/component-doc/component-doc').then((m) => m.ComponentDocPage),
      },
      {
        path: 'multiselect',
        title: 'MultiSelect · BlocSui',
        data: { slug: 'multiselect' },
        loadComponent: () => import('./pages/component-doc/component-doc').then((m) => m.ComponentDocPage),
      },
    ],
  },
  { path: '**', redirectTo: 'home' },
];
