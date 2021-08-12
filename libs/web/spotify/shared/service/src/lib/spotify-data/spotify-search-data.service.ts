import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  PaginationInterface,
  SpotifyDataService,
} from './spotify-data.service';

@Injectable({
  providedIn: 'root',
})
export class SpotifySearchDataService {
  constructor(protected readonly httpClient: HttpClient) {}

  /**
   * Get the search album results for a given query.
   * @param query The search query.
   * @param pagination The pagination parameters.
   * @returns A Promise that resolves to the search results.
   */
  getSearchAlbumResult(
    q: string,
    pagination?: PaginationInterface,
  ): Promise<SpotifyApi.AlbumSearchResponse> {
    let params = new HttpParams()
      .append('q', encodeURI(q))
      .append('type', 'album');
    params = SpotifyDataService.appendPaginationParams(params, pagination);

    return this.httpClient
      .get<SpotifyApi.AlbumSearchResponse>(
        SpotifyDataService.SpotifyApiBaseURL + 'search',
        { params },
      )
      .toPromise();
  }

  /**
   * Get the search playlist results for a given query.
   * @param query The search query.
   * @param pagination The pagination parameters.
   * @returns A Promise that resolves to the search results.
   */
  getSearchPlaylistResult(
    q: string,
    pagination?: PaginationInterface,
  ): Promise<SpotifyApi.PlaylistSearchResponse> {
    let params = new HttpParams()
      .append('q', encodeURI(q))
      .append('type', 'playlist');
    params = SpotifyDataService.appendPaginationParams(params, pagination);

    return this.httpClient
      .get<SpotifyApi.PlaylistSearchResponse>(
        SpotifyDataService.SpotifyApiBaseURL + 'search',
        {
          params,
        },
      )
      .toPromise();
  }

  /**
   * Get the search track results for a given query.
   * @param query The search query.
   * @param pagination The pagination parameters.
   * @returns A Promise that resolves to the search results.
   */
  getSearchTrackResult(
    q: string,
    pagination?: PaginationInterface,
  ): Promise<SpotifyApi.TrackSearchResponse> {
    let params = new HttpParams()
      .append('q', encodeURI(q))
      .append('type', 'track');
    params = SpotifyDataService.appendPaginationParams(params, pagination);

    return this.httpClient
      .get<SpotifyApi.TrackSearchResponse>(
        SpotifyDataService.SpotifyApiBaseURL + 'search',
        {
          params,
        },
      )
      .toPromise();
  }
}
