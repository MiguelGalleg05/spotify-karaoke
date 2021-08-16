import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  ImageModule,
  PlayModule,
  TrackListModule,
} from '@artur-ba/web/spotify/shared/view';

import { AlbumComponent } from './album/album.component';
import { AlbumRoutingModule } from './album-routing.module';

@NgModule({
  declarations: [AlbumComponent],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    ImageModule,
    PlayModule,
    TrackListModule,
  ],
})
export class AlbumModule {}
