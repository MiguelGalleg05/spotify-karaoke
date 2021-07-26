import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SpotifyImageComponent } from './spotify-image/spotify-image.component';

const exports = [SpotifyImageComponent];

@NgModule({
  declarations: [...exports],
  imports: [CommonModule],
  exports,
})
export class ImageModule {}
