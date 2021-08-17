import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';

import { WebLyricsMiniLyricsServiceModule } from '@artur-ba/web/lyrics/mini-lyrics/service';

import { LyricsComponent } from './lyrics/lyrics.component';
import { LyricsSelectionComponent } from './lyrics-selection/lyrics-selection.component';
import { LyricsSelectionDialogComponent } from './lyrics-selection-dialog/lyrics-selection-dialog.component';
import { LyricsTextComponent } from './lyrics-text/lyrics-text.component';
import { WebLyricsViewRoutingModule } from './web-lyrics-view.routing';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    WebLyricsMiniLyricsServiceModule,
    WebLyricsViewRoutingModule,
    FormsModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
  ],
  declarations: [
    LyricsComponent,
    LyricsTextComponent,
    LyricsSelectionComponent,
    LyricsSelectionDialogComponent,
  ],
  exports: [],
})
export class WebLyricsViewModule {}
