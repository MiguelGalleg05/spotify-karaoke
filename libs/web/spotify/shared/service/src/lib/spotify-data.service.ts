import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotifyDataService {
  protected readonly baseURL = 'https://api.spotify.com/v1/';

  constructor(protected httpClient: HttpClient) {}

  /**
   * https://api.spotify.com/v1/albums/{id}/tracks
   * @param albumUri
   * @returns Promise
   */
  getAlbumTracks(albumUri: string): Promise<SpotifyApi.AlbumTracksResponse> {
    return this.httpClient
      .get<SpotifyApi.AlbumTracksResponse>(
        this.baseURL + `albums/${albumUri}/tracks`
      )
      .toPromise();
  }

  getTracks(tracksIds: string[]): Promise<SpotifyApi.MultipleTracksResponse> {
    tracksIds = tracksIds.map((track) => {
      const trackUri = track.split(':');
      return trackUri[trackUri.length - 1];
    });
    const tracksParam = new HttpParams().set('ids', tracksIds.toString());
    return this.httpClient
      .get<SpotifyApi.MultipleTracksResponse>(this.baseURL + 'tracks', {
        params: tracksParam,
      })
      .toPromise();
  }

  /**
   * https://api.spotify.com/v1/me
   * @returns Users data
   */
  getUserData(): Promise<SpotifyApi.CurrentUsersProfileResponse> {
    return this.httpClient
      .get<SpotifyApi.CurrentUsersProfileResponse>(this.baseURL + 'me')
      .toPromise();
  }
}
