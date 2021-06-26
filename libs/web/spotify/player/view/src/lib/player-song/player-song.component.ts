import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { PlayerStore } from '@artur-ba/shared/service';
import { TrackHelper } from '@artur-ba/web/spotify/shared/helper';
@Component({
  selector: 'artur-ba-player-song',
  templateUrl: './player-song.component.html',
  styleUrls: ['./player-song.component.scss'],
})
export class PlayerSongComponent implements OnInit, OnDestroy {
  track: Spotify.Track;

  protected subscriptions: Subscription[] = [];

  constructor(protected playerStore: PlayerStore) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.playerStore.currentTrack$.subscribe((track) => {
        if (this.track !== track) {
          this.track = track;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  get image64Url(): string {
    return TrackHelper.getImage64Url(this.track?.album);
  }
}
