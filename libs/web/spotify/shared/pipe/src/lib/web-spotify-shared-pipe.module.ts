import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { TrackTime } from './millisecond.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [TrackTime],
  exports: [TrackTime],
})
export class WebSpotifySharedPipeModule {}
