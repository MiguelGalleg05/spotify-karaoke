import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  LyricsItem,
  MiniLyricsResponse,
} from '@artur-ba/web/lyrics/mini-lyrics/interface';

@Injectable({
  providedIn: 'root',
})
export class MiniLyricsService {
  readonly miniLyricsProxy = 'minilyrics-proxy';
  readonly miniLyrics = 'minilyrics/l/';

  constructor(protected httpClient: HttpClient) {}

  async getLyrics(lyricsItem: LyricsItem): Promise<string> {
    return this.httpClient
      .get(this.getMiniLyricsAddress(lyricsItem), {
        responseType: 'text',
      })
      .toPromise();
  }

  getLyricsList(title: string, artist: string): Promise<MiniLyricsResponse> {
    const params = new HttpParams({
      fromObject: {
        title,
        artist,
      },
    });
    return this.httpClient
      .get<MiniLyricsResponse>(this.miniLyricsProxy, { params })
      .toPromise();
  }

  protected getMiniLyricsAddress(lyricsItem: LyricsItem): string {
    return this.miniLyrics + lyricsItem.link;
  }
}
