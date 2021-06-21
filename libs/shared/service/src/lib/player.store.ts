/// <reference types="spotify-web-playback-sdk" />
import { Injectable } from '@angular/core';

import { debounceTime, filter, map } from 'rxjs/operators';
import { Observable, of, timer } from 'rxjs';

import { StateInterface } from './state-interface';

export interface PlayerState {
  player: Spotify.SpotifyPlayer;
  deviceId: string;
  playbackState: Spotify.PlaybackState;
  volume: number;
}

@Injectable({
  providedIn: 'root',
})
export class PlayerStore extends StateInterface<PlayerState> {
  readonly playback$ = this.state$?.pipe(
    filter((d) => !!d.playbackState),
    map((d) => d.playbackState)
  ) as Observable<Spotify.PlaybackState>;

  readonly trackWindow$ = this.playback$.pipe(
    filter((p) => !!p),
    map((p) => p.track_window)
  ) as Observable<Spotify.PlaybackTrackWindow>;

  readonly currentTrack$ = this.trackWindow$.pipe(
    filter((p) => !!p),
    map((p) => p.current_track)
  ) as Observable<Spotify.Track>;

  readonly paused$ = this.playback$.pipe(
    filter((p) => !!p),
    map((p) => p.paused)
  ) as Observable<boolean>;

  readonly volume$ = this.state$.pipe(
    filter((p) => p.volume !== undefined),
    map((p) => p.volume)
  ) as Observable<number>;

  readonly progress$ = this.playback$.pipe(
    debounceTime(20),
    map(({ paused, position }) => {
      if (paused) {
        return of(position);
      }
      const progressTimer$ = timer(0, 1000);
      return progressTimer$.pipe(
        map((x) => x * 1000),
        map((x) => x + position)
      );
    })
  ) as Observable<Observable<number>>;
}
