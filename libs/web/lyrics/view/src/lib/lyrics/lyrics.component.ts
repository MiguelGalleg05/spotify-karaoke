import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import {
  LyricsSearchResponse,
  LyricsSearchState,
} from '../lyrics-selection/lyrics-selection.component';
import { PlayerStore } from '@artur-ba/shared/service';

@Component({
  selector: 'artur-ba-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss'],
})
export class LyricsComponent implements OnInit, OnDestroy {
  progress$: Observable<number>;
  state: LyricsSearchResponse = { state: LyricsSearchState.SEARCH_FAILED };

  readonly LyricsSearchState = LyricsSearchState;
  protected subscription = new Subscription();

  constructor(protected playerState: PlayerStore) {}

  async ngOnInit(): Promise<void> {
    this.subscription.add(
      this.playerState.progress$.subscribe((pos) => {
        this.progress$ = pos;
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
