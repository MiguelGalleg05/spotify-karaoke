import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SpotifyDataService } from './spotify-data.service';

@Injectable({
  providedIn: 'root',
})
export class SpotifyPlayerService {
  constructor(protected readonly httpClient: HttpClient) {}

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
   * PUT https://api.spotify.com/v1/me/player
   * @param context_uri
   * @returns Promise
   */
  playContext(context_uri): Promise<void> {
    const context = { context_uri };
    return this.httpClient
      .put<void>(
        SpotifyDataService.SpotifyApiBaseURL + 'me/player/play',
        context,
      )
      .toPromise();
  }

  /**
   * PUT https://api.spotify.com/v1/me/player/play
   * @param uri
   * @returns Promise
   */
  playUri(uri: string | string[]): Promise<void> {
    uri = Array.isArray(uri) ? uri : [uri];
    const context = { uris: uri };
    return this.httpClient
      .put<void>(
        SpotifyDataService.SpotifyApiBaseURL + 'me/player/play',
        context,
      )
      .toPromise();
  }
}
