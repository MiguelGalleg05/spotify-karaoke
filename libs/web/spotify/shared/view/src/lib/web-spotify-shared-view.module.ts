import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SongListComponent } from './song-list/song-list.component';
import { SongRowComponent } from './song-row/song-row.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SongRowComponent, SongListComponent],
  exports: [SongListComponent],
})
export class WebSpotifySharedViewModule {}
