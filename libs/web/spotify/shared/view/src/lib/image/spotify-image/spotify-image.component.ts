import { Component, Input } from '@angular/core';
import { ImageHelper } from '@artur-ba/web/spotify/shared/helper';

@Component({
  selector: 'artur-ba-spotify-image',
  templateUrl: './spotify-image.component.html',
  styleUrls: ['./spotify-image.component.scss'],
})
export class SpotifyImageComponent {
  @Input() images: SpotifyApi.ImageObject[] =
    ImageHelper.getDefaultImageObjects();
  @Input() alt: string = $localize`:spotify-image.alt:Image alt`;

  getSrc(): string {
    return ImageHelper.getImage300Url(this.images);
  }

  getSrcSet(): string {
    return ImageHelper.getImagesSet(this.images);
  }
}
