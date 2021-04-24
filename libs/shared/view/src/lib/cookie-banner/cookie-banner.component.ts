import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'artur-ba-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss'],
})
export class CookieBannerComponent {
  @Output() cookiesAccept = new EventEmitter();

  handleCookiesAccept(): void {
    this.cookiesAccept.emit();
  }
}
