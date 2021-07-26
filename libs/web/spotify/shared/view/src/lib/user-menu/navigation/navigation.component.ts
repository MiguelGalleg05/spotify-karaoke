import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'artur-ba-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  constructor(protected readonly location: Location) {}

  goBack(): void {
    this.location.back();
  }

  goForward(): void {
    this.location.forward();
  }
}
