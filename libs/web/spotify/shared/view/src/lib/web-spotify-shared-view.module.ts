import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WebSpotifySharedPipeModule } from '@artur-ba/web/spotify/shared/pipe';

import { SongListComponent } from './song-list/song-list.component';
import { SongRowComponent } from './song-row/song-row.component';

@NgModule({
  imports: [
    CommonModule,
    WebSpotifySharedPipeModule,
    RouterModule.forChild([]),
  ],
  declarations: [SongRowComponent, SongListComponent],
  exports: [SongListComponent],
})
export class WebSpotifySharedViewModule {}
