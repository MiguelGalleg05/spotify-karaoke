import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ImageModule } from '../image/image.module';
import { LazyScrollModule } from '../lazy-scroll/lazy-scroll.module';
import { WebSpotifySharedPipeModule } from '@artur-ba/web/spotify/shared/pipe';

import { TrackLazyListComponent } from './track-lazy-list/track-lazy-list.component';
import { TrackListComponent } from './track-list/track-list.component';
import { TrackRowComponent } from './track-row/track-row.component';

const exports = [TrackListComponent, TrackLazyListComponent];

@NgModule({
  declarations: [...exports, TrackRowComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    ImageModule,
    LazyScrollModule,
    WebSpotifySharedPipeModule,
  ],
  exports,
})
export class TrackListModule {}
