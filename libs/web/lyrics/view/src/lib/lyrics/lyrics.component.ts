import { Component, Input, OnInit } from '@angular/core';
import { MiniLyricsResponse } from '@artur-ba/web/lyrics/mini-lyrics/interface';

import { MiniLyricsService } from 'libs/web/lyrics/mini-lyrics/service/src/lib/mini-lyrics.service';
// import { MiniLyricsService } from '@artur-ba/web/lyrics/mini-lyrics/service/src/lib/mini-lyrics.service';

@Component({
  selector: 'artur-ba-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss'],
})
export class LyricsComponent implements OnInit {
  lyrics: string;

  constructor(protected lyricsAPI: MiniLyricsService) {}

  async ngOnInit(): Promise<void> {
    this.lyrics = await this.lyricsAPI.getLyrics('hound dog', 'elvis presley');
  }
}
