import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SpotifyDataService } from './spotify-data.service';

@Injectable({
  providedIn: 'root',
})
export class SpotifyAlbumDataService {
  constructor(protected readonly httpClient: HttpClient) {}

  /**
   * https://api.spotify.com/v1/albums/{uri}/tracks
   * @param albumUri
   * @returns Promise
   */
  getAlbumTracks(albumUri: string): Promise<SpotifyApi.AlbumTracksResponse> {
    return this.httpClient
      .get<SpotifyApi.AlbumTracksResponse>(
        SpotifyDataService.SpotifyApiBaseURL + `albums/${albumUri}/tracks`,
      )
      .toPromise();
  }

  /**
   * https://api.spotify.com/v1/albums/{uri}
   * @param albumUri
   * @returns Promise
   */
  getAlbum(albumUri: string): Promise<SpotifyApi.AlbumObjectFull> {
    return this.httpClient
      .get<SpotifyApi.AlbumObjectFull>(
        SpotifyDataService.SpotifyApiBaseURL + `albums/${albumUri}`,
      )
      .toPromise();
  }
}
