import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { Lyrics, LyricsParser } from '@artur-ba/web/lyrics/model';
import { LyricsItem } from '@artur-ba/web/lyrics/mini-lyrics/interface';
import { LyricsSelectionDialogComponent } from '../lyrics-selection-dialog/lyrics-selection-dialog.component';
import { MiniLyricsService } from '@artur-ba/web/lyrics/mini-lyrics/service';
import { PlayerStore } from '@artur-ba/shared/service';

export enum LyricsSearchState {
  SEARCHING = 'SEARCHING',
  SEARCH_SUCCESS = 'SEARCH_SUCCESS',
  SEARCH_FAILED = 'SEARCH_FAILED',
}

export interface LyricsSearchResponse {
  state: LyricsSearchState;
  lyrics?: Lyrics;
}

@Component({
  selector: 'artur-ba-lyrics-selection',
  templateUrl: './lyrics-selection.component.html',
  styleUrls: ['./lyrics-selection.component.scss'],
})
export class LyricsSelectionComponent implements OnInit, OnDestroy {
  @Output() state = new EventEmitter<LyricsSearchResponse>();

  protected track: Spotify.Track;
  protected availableLyrics: LyricsItem[] = [];
  protected subscription = new Subscription();

  constructor(
    protected readonly lyricsAPI: MiniLyricsService,
    protected readonly playerState: PlayerStore,
    protected readonly dialog: MatDialog,
  ) {}

  async ngOnInit(): Promise<void> {
    this.subscription.add(
      this.playerState.currentTrack$.subscribe(async (track) => {
        this.handleSongUpdate(track);
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openLyricsDialog(): void {
    const dialogRef = this.dialog.open(LyricsSelectionDialogComponent, {
      data: { lyrics: this.availableLyrics },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.handleDialogResponse(result);
    });
  }

  protected async handleSongUpdate(track: Spotify.Track): Promise<void> {
    if (!this.isNewTrack(track)) {
      return;
    }
    this.state.emit({ state: LyricsSearchState.SEARCHING });
    this.updateLyrics();
  }

  protected isNewTrack(track: Spotify.Track): boolean {
    if (JSON.stringify(this.track) === JSON.stringify(track)) {
      return false;
    }
    this.track = track;
    return true;
  }

  protected async updateLyrics(): Promise<void> {
    try {
      this.availableLyrics = await this.getAvailableLyrics();
      const lyrics = await this.getBestLyrics();
      this.state.emit({ state: LyricsSearchState.SEARCH_SUCCESS, lyrics });
    } catch (err) {
      this.state.emit({ state: LyricsSearchState.SEARCH_FAILED });
    }
  }

  protected async getAvailableLyrics(): Promise<LyricsItem[]> {
    const lyricsList = await this.lyricsAPI.getLyricsList(
      this.track.name,
      this.track.artists[0].name,
    );
    const lcrEnd = /.*\.lrc$/;
    const lcrLyrics = lyricsList.children.filter((lyrics) =>
      lcrEnd.test(lyrics.link),
    );
    return lcrLyrics.sort(
      (a: LyricsItem, b: LyricsItem) => b.downloads - a.downloads,
    );
  }

  protected async getBestLyrics(): Promise<Lyrics> {
    const bestMatchLyrics =
      this.getLyricsMatchingAlbum() || this.availableLyrics[0];
    return this.getLyricsByLrc(bestMatchLyrics);
  }

  protected getLyricsMatchingAlbum(): LyricsItem | null {
    return this.availableLyrics.find(
      (lyricsItem: LyricsItem) =>
        lyricsItem.album?.toLowerCase() === this.track.album.name.toLowerCase(),
    );
  }

  protected async getLyricsByLrc(lyrics: LyricsItem): Promise<Lyrics> {
    const url = await this.lyricsAPI.getLyrics(lyrics);
    return LyricsParser.lrcParser(url);
  }

  protected async handleDialogResponse(result: LyricsItem): Promise<void> {
    if (result === undefined) {
      return;
    }
    this.state.emit({
      state: LyricsSearchState.SEARCH_SUCCESS,
      lyrics: await this.getLyricsByLrc(result),
    });
  }
}
