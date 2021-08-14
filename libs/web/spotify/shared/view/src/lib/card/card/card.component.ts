import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { PlayButtonStyle } from '../../play/play-button/play-button.component';

@Component({
  selector: 'artur-ba-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() images: SpotifyApi.ImageObject[];
  @Input() title: string;
  @Input() subtitle: string;
  @Input() redirectUrl: string;
  @Input() context_uri: string;

  readonly PlayButtonStyle = PlayButtonStyle;

  protected _cardImageAlt = $localize`:card.image-alt:Card image`;

  set cardImageAlt(cardImageAlt: string) {
    this._cardImageAlt = cardImageAlt;
  }
  get cardImageAlt(): string {
    return this._cardImageAlt;
  }

  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() click = new EventEmitter<void>();

  constructor(protected readonly router: Router) {}

  onClickHandle(): void {
    this.click.emit();
    if (this.redirectUrl) {
      this.router.navigate([this.redirectUrl]);
    }
  }
}
