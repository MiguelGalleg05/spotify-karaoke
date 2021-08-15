import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlayerControlService } from '../player-control.service';

import { SpotifyDataService } from './spotify-data.service';

@Injectable({
  providedIn: 'root',
})
export class SpotifyPlayerService {
  constructor(
    protected readonly httpClient: HttpClient,
    protected readonly player: PlayerControlService,
  ) {}

  /**
   * https://api.spotify.com/v1/me/player
   * @returns Promise
   */
  getCurrentPlayback(): Promise<SpotifyApi.CurrentPlaybackResponse> {
    return this.httpClient
      .get<SpotifyApi.CurrentPlaybackResponse>(
        SpotifyDataService.SpotifyApiBaseURL + 'me/player',
      )
      .toPromise();
  }

  /**
   * https://api.spotify.com/v1/me/player/devices
   * @returns Promise
   */
  getAvailableDevices(): Promise<SpotifyApi.UserDevicesResponse> {
    return this.httpClient
      .get<SpotifyApi.UserDevicesResponse>(
        SpotifyDataService.SpotifyApiBaseURL + 'me/player/devices',
      )
      .toPromise();
  }

  /**
   * PUT https://api.spotify.com/v1/me/player
   * @param deviceId
   * @returns Promise
   */
  setCurrentDevice(deviceId: string): Promise<void> {
    const context = { device_ids: [deviceId] };
    return this.httpClient
      .put<void>(SpotifyDataService.SpotifyApiBaseURL + 'me/player', context)
      .toPromise();
  }

  /**
   * PUT https://api.spotify.com/v1/me/player/play
   * @param context
   * @returns Promise
   */
  play(context: SpotifyApi.PlayParameterObject): Promise<void> {
    return this.player.play(context);
    if (!context.context_uri && !context.uris) {
      return Promise.reject(new Error('context_uri or uris are required'));
    }

    return this.httpClient
      .put<void>(
        SpotifyDataService.SpotifyApiBaseURL + 'me/player/play',
        context,
      )
      .toPromise();
  }
}
