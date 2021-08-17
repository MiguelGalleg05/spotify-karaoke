import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { LyricsItem } from '@artur-ba/web/lyrics/mini-lyrics/interface';

export interface LyricsSelectionDialogData {
  lyrics: LyricsItem[];
}

@Component({
  selector: 'artur-ba-lyrics-selection-dialog',
  templateUrl: './lyrics-selection-dialog.component.html',
  styleUrls: ['./lyrics-selection-dialog.component.scss'],
})
export class LyricsSelectionDialogComponent {
  selectedLyrics: LyricsItem;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: LyricsSelectionDialogData,
  ) {}

  getLyricsString(lyrics: LyricsItem): string {
    let response = `${lyrics.artist} - ${lyrics.title}`;
    response = lyrics.album ? `${response} - ${lyrics.album}` : response;
    return response;
  }
}
