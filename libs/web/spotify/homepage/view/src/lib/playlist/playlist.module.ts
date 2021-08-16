import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  ImageModule,
  PlayModule,
  TrackListModule,
} from '@artur-ba/web/spotify/shared/view';

import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistRoutingModule } from './playlist-routing.module';

@NgModule({
  declarations: [PlaylistComponent],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    ImageModule,
    PlayModule,
    TrackListModule,
  ],
})
export class PlaylistModule {}
