/// <reference types="spotify-web-playback-sdk" />
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthStore } from './auth.store';
import { PlayerStore } from './player.store';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(
    protected playerState: PlayerStore,
    protected authStore: AuthStore
  ) {}

  init(): void {
    this.authStore.token$
      .pipe(
        tap((token) => {
          this.initSpotify(token);
        })
      )
      .subscribe();
  }
  protected async initSpotify(token): Promise<void> {
    const { Player } = await this.waitForSpotifyWebPlaybackSDKToLoad();
    const player = new Player({
      name: 'Spotify Karaoke',
      getOAuthToken: (cb) => {
        cb(token);
      },
    });

    player.addListener('initialization_error', ({ message }) => {
      return Promise.reject(new Error(message));
    });
    player.addListener('authentication_error', ({ message }) => {
      return Promise.reject(new Error(message));
    });
    player.addListener('account_error', ({ message }) => {
      return Promise.reject(new Error(message));
    });
    player.addListener('playback_error', ({ message }) => {
      return Promise.reject(new Error(message));
    });

    // Playback status updates
    player.addListener(
      'player_state_changed',
      (state: Spotify.PlaybackState) => {
        this.playerState.setState({ playbackState: state });
      }
    );

    // Ready
    player.addListener('ready', ({ device_id }) => {
      this.playerState.setState({ deviceId: device_id });
    });

    player.addListener('not_ready', ({ device_id }) => {
      return Promise.reject(
        new Error(`Device ID: ${device_id} has gone offline`)
      );
    });

    // Connect to the player!
    player.connect();
    this.playerState.setState({ player });
  }

  protected waitForSpotifyWebPlaybackSDKToLoad(): Promise<typeof Spotify> {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    window.onSpotifyWebPlaybackSDKReady = () => {};

    return new Promise((resolve) => {
      if (window.Spotify) {
        resolve(window.Spotify);
      } else {
        window.onSpotifyWebPlaybackSDKReady = () => {
          resolve(window.Spotify);
        };
      }
    });
  }
}
