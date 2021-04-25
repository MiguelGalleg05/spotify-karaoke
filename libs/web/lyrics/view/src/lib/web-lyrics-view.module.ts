import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { WebLyricsMiniLyricsServiceModule } from '@artur-ba/web/lyrics/mini-lyrics/service';

import { LyricsComponent } from './lyrics/lyrics.component';
import { LyricsTextComponent } from './lyrics-text/lyrics-text.component';
import { WebLyricsViewRoutingModule } from './web-lyrics-view-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    WebLyricsMiniLyricsServiceModule,
    WebLyricsViewRoutingModule,
  ],
  declarations: [LyricsComponent, LyricsTextComponent],
  exports: [],
})
export class WebLyricsViewModule {}
