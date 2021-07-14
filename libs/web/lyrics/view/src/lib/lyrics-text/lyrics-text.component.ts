import { Component, Input } from '@angular/core';
import { Lyrics, LyricsScript } from '@artur-ba/web/lyrics/model';

@Component({
  selector: 'artur-ba-lyrics-text',
  templateUrl: './lyrics-text.component.html',
  styleUrls: ['./lyrics-text.component.scss'],
})
export class LyricsTextComponent {
  @Input() lyrics: Lyrics;
  @Input() currentTime: number;
  readonly globalOffsetMs = 700;
  readonly linesPrepared = 4;
  readonly linesVisible = this.linesPrepared - 1;

  visible(script: LyricsScript): boolean {
    return this.currentScript.includes(script);
  }

  prepared(script: LyricsScript): boolean {
    return this.preparedScript.includes(script);
  }

  get currentScript(): LyricsScript[] {
    const index = this.nextScriptIndex;
    if (
      index <= this.linesVisible ||
      index >= this.lyrics.script.length - this.linesVisible
    ) {
      return this.preparedScript;
    }
    return this.preparedScript.slice(1, -1);
  }

  get preparedScript(): LyricsScript[] {
    const index = this.nextScriptIndex;
    const startSlice =
      index < this.linesPrepared ? 0 : index - this.linesPrepared;
    const endSlice =
      index > this.lyrics.script.length - this.linesPrepared
        ? this.lyrics.script.length
        : index + this.linesPrepared;
    return this.lyrics.script.slice(startSlice, endSlice);
  }

  get nextScriptIndex(): number {
    const currentTime = this.timeWithOffset;
    let index = this.lyrics.script.findIndex(
      (script) => script.start > currentTime,
    );
    if (index === -1) {
      index = this.lyrics.script.length;
    } else if (index === 0) {
      index = 1;
    }
    return index;
  }

  get timeWithOffset(): number {
    return (this.currentTime - this.lyrics.offset + this.globalOffsetMs) / 1000;
  }
}
