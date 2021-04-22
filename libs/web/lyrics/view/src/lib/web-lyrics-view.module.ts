import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyricsComponent } from './lyrics/lyrics.component';

import { WebLyricsMiniLyricsServiceModule } from '@artur-ba/web/lyrics/mini-lyrics/service';

@NgModule({
  imports: [CommonModule, WebLyricsMiniLyricsServiceModule],
  declarations: [LyricsComponent],
  exports: [LyricsComponent],
})
export class WebLyricsViewModule {}
