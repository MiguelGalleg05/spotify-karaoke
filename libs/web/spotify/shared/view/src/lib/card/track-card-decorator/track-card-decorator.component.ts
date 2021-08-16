import { Component } from '@angular/core';

import { CardDecoratorComponent } from '../card-decorator/card-decorator.component';

@Component({
  selector: 'artur-ba-track-card-decorator',
  templateUrl: '../card-decorator/card-decorator.component.html',
  styleUrls: ['../card-decorator/card-decorator.component.scss'],
})
export class TrackCardDecoratorComponent extends CardDecoratorComponent<SpotifyApi.TrackObjectFull> {
  protected initWithData(): void {
    this.cardImageAlt = $localize`:track-card-decorator.image-alt:Track album cover`;
    this.images = this.data.album.images;
    this.title = this.data.name;
    this.subtitle = `<em> ${this.data.artists[0].name} </em>`;
    this.context = { uris: [this.data.uri] };
  }
}
