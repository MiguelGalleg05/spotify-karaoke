import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { PlayerStore } from '@artur-ba/shared/service';
@Component({
  selector: 'artur-ba-player-song',
  templateUrl: './player-song.component.html',
  styleUrls: ['./player-song.component.scss'],
})
export class PlayerSongComponent implements OnInit, OnDestroy {
  track: Spotify.Track;

  protected subscriptions = new Subscription();

  constructor(protected playerStore: PlayerStore) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.playerStore.currentTrack$.subscribe((track) => {
        if (this.track !== track) {
          this.track = track;
        }
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
