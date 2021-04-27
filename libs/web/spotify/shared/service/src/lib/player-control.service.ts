import { HttpClient } from '@angular/common/http';

import { Injectable, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { PlayerStore } from '@artur-ba/shared/service';

export interface SpotifyPlayRequestApi {
  context_uri?: string;
  uris?: string[];
  offset?: { position: number };
}

@Injectable({
  providedIn: 'root',
})
export class PlayerControlService implements OnDestroy {
  protected player$: Spotify.SpotifyPlayer;
  protected readonly baseURL = 'https://api.spotify.com/v1/';
  protected readonly playerURL = this.baseURL + 'me/player';

  protected playerSub: Subscription;

  constructor(
    protected httpClient: HttpClient,
    protected playerStore: PlayerStore
  ) {
    this.playerSub = this.playerStore.state$.subscribe((state) => {
      this.player$ = state.player;
    });
  }

  ngOnDestroy(): void {
    this.playerSub.unsubscribe();
  }

  transferUserPlayback(
    deviceId: string,
    play: boolean = true
  ): Observable<any> {
    return this.httpClient.put(this.playerURL, {
      device_ids: [deviceId],
      play,
    });
  }

  play(): Promise<void> {
    return this.httpClient.put<void>(`${this.playerURL}/play`, {}).toPromise();
  }

  pause(): Promise<void> {
    return this.httpClient.put<void>(`${this.playerURL}/pause`, {}).toPromise();
  }

  nextTrack(): Promise<void> {
    return this.httpClient.post<void>(`${this.playerURL}/next`, {}).toPromise();
  }

  prevTrack(): Promise<void> {
    return this.httpClient
      .post<void>(`${this.playerURL}/previous`, {})
      .toPromise();
  }

  setVolume(volume: number): Promise<void> {
    this.playerStore.setState({ volume: volume / 100 });
    return this.httpClient
      .put<void>(`${this.playerURL}/volume`, null, {
        params: {
          volume_percent: `${volume}`,
        },
      })
      .toPromise();
  }

  seek(new_position: number) {
    new_position = Math.floor(new_position);
    this.httpClient
      .put(`${this.playerURL}/seek`, null, {
        params: {
          position_ms: `${new_position}`,
        },
      })
      .subscribe();
  }
}
