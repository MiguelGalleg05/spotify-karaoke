import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { AddComaPipe } from './add-coma.pipe';
import { ClearUriDataPipe } from './clear-uri-data.pipe';
import { TrackTime } from './track-time.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [TrackTime, AddComaPipe, ClearUriDataPipe],
  exports: [TrackTime, AddComaPipe, ClearUriDataPipe],
})
export class WebSpotifySharedPipeModule {}
