import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SpotifyDataService } from './spotify-data.service';

@Injectable({
  providedIn: 'root',
})
export class SpotifyPlaylistDataService {
  constructor(protected readonly httpClient: HttpClient) {}

  /**
   * https://api.spotify.com/v1/playlists/{uri}
   * @param playlistUri
   * @returns Promise
   */
  getPlaylist(playlistUri: string): Promise<SpotifyApi.PlaylistObjectFull> {
    return this.httpClient
      .get<SpotifyApi.PlaylistObjectFull>(
        SpotifyDataService.SpotifyApiBaseURL + `playlists/${playlistUri}`,
      )
      .toPromise();
  }

  /**
   * https://api.spotify.com/v1/albums/{uri}/tracks
   * @param playlistUri
   * @returns Promise
   */
  getPlaylistTracks(
    playlistUri: string,
  ): Promise<SpotifyApi.PlaylistTrackResponse> {
    return this.httpClient
      .get<SpotifyApi.PlaylistTrackResponse>(
        SpotifyDataService.SpotifyApiBaseURL +
          `playlists/${playlistUri}/tracks`,
      )
      .toPromise();
  }
}
