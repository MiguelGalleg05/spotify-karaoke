import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ImageModule } from '../image/image.module';
import { LazyScrollModule } from '../lazy-scroll/lazy-scroll.module';
import { WebSpotifySharedPipeModule } from '@artur-ba/web/spotify/shared/pipe';

import { SongLazyListComponent } from './song-lazy-list/song-lazy-list.component';
import { SongListComponent } from './song-list/song-list.component';
import { SongRowComponent } from './song-row/song-row.component';

const exports = [SongListComponent, SongLazyListComponent];

@NgModule({
  declarations: [...exports, SongRowComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    ImageModule,
    LazyScrollModule,
    WebSpotifySharedPipeModule,
  ],
  exports,
})
export class SongListModule {}
