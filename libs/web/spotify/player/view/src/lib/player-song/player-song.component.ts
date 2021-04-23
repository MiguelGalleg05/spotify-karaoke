import { Component } from '@angular/core';

import { PlayerStore } from '@artur-ba/shared/service';
@Component({
  selector: 'artur-ba-player-song',
  templateUrl: './player-song.component.html',
  styleUrls: ['./player-song.component.scss'],
})
export class PlayerSongComponent {
  track: Spotify.Track;

  constructor(protected playerStore: PlayerStore) {
    this.playerStore.currentTrack$.subscribe((track) => {
      if (this.track !== track) {
        this.track = track;
      }
    });
  }

  get image64Url(): string {
    const img = this.track.album.images.filter((image) => image.height == 64);
    if (img[0]) {
      return img[0].url;
    }
  }
}
