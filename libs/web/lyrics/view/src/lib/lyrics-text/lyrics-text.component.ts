import { Component, Input, OnInit } from '@angular/core';
import { Lyrics } from '@artur-ba/web/lyrics/model';

@Component({
  selector: 'artur-ba-lyrics-text',
  templateUrl: './lyrics-text.component.html',
  styleUrls: ['./lyrics-text.component.scss'],
})
export class LyricsTextComponent {
  @Input() lyrics: Lyrics;
  @Input() currentTime: number;

  isActive(scriptIndex: number) {
    const currentTime = (this.currentTime - this.lyrics.offset) / 1000;
    const currentScriptStart = this.lyrics.script[scriptIndex].start;
    const nextScriptStart =
      this.lyrics.script[scriptIndex + 1]?.start || Infinity;
    if (currentScriptStart <= currentTime && nextScriptStart > currentTime) {
      return true;
    }
    return false;
  }
}
