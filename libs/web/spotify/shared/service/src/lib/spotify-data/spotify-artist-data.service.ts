import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  PaginationInterface,
  SpotifyDataService,
} from './spotify-data.service';

@Injectable({
  providedIn: 'root',
})
export class SpotifyArtistDataService {
  constructor(protected readonly httpClient: HttpClient) {}

  /**
   * https://api.spotify.com/v1/artist/{uri}
   * @param artistUri
   * @returns Promise
   */
  getArtist(artistUri: string): Promise<SpotifyApi.SingleArtistResponse> {
    return this.httpClient
      .get<SpotifyApi.SingleArtistResponse>(
        SpotifyDataService.SpotifyApiBaseURL + `artists/${artistUri}`,
      )
      .toPromise();
  }

  /**
   * https://api.spotify.com/v1/artist/{uri}/top-tracks
   * @param artistUri
   * @returns Promise
   */
  async getArtistTopTracks(
    artistUri: string,
  ): Promise<SpotifyApi.ArtistsTopTracksResponse> {
    return this.httpClient
      .get<SpotifyApi.ArtistsTopTracksResponse>(
        SpotifyDataService.SpotifyApiBaseURL +
          `artists/${artistUri}/top-tracks`,
      )
      .toPromise();
  }

  /**
   * https://api.spotify.com/v1/artists/{id}/albums
   * @param artistUri
   * @param pagination pagination params
   * @returns Promise
   */
  async getArtistAlbums(
    artistUri: string,
    pagination?: PaginationInterface,
  ): Promise<SpotifyApi.PagingObject<SpotifyApi.AlbumObjectSimplified>> {
    const include_groups: string[] = ['album'];
    let params = new HttpParams().append(
      'include_groups',
      include_groups.join(','),
    );
    params = SpotifyDataService.appendPaginationParams(params, pagination);

    return this.httpClient
      .get<SpotifyApi.PagingObject<SpotifyApi.AlbumObjectSimplified>>(
        SpotifyDataService.SpotifyApiBaseURL + `artists/${artistUri}/albums`,
        { params },
      )
      .toPromise();
  }
}
