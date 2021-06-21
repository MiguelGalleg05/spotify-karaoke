import { Component } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'test-blank',
  template: 'blank',
})
export class BlankComponent {}

export const routesBlank = (routesPaths: string[]): Route[] => [
  ...routesPaths.map((route) => {
    return { path: route, component: BlankComponent };
  }),
  { path: '**', component: BlankComponent },
];
