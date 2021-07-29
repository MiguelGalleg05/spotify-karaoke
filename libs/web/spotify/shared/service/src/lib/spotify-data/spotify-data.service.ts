import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

export interface PaginationInterface {
  limit: number;
  next?: string | null;
  offset: number;
  previous?: string | null;
  total: number;
}

@Injectable({
  providedIn: 'root',
})
export class SpotifyDataService {
  static readonly SpotifyApiBaseURL = 'https://api.spotify.com/v1/';
  /**
   * More details on available APIs
   * https://developer.spotify.com/documentation/web-api/reference/
   * This file was splitted to multiple files to keep the file size down
   * Each of the files has a comment with the API endpoint
   * This was splitted by logical groupings
   */

  constructor(protected readonly httpClient: HttpClient) {}

  static appendPaginationParams(
    params: HttpParams,
    pagination?: PaginationInterface,
  ): HttpParams {
    if (!pagination) {
      return params;
    }

    const pagination_params = ['limit', 'offset'];
    pagination_params.forEach((pagination_param) => {
      if (pagination[pagination_param]) {
        params = params.append(pagination_param, pagination[pagination_param]);
      }
    });
    return params;
  }

  /**
   * https://api.spotify.com/v1/traks?tracksUri
   * @param tracksIds
   * @returns Promise
   */
  getTracks(tracksIds: string[]): Promise<SpotifyApi.MultipleTracksResponse> {
    tracksIds = tracksIds.map((track) => {
      const trackUri = track.split(':');
      return trackUri[trackUri.length - 1];
    });
    const tracksParam = new HttpParams().set('ids', tracksIds.toString());
    return this.httpClient
      .get<SpotifyApi.MultipleTracksResponse>(
        SpotifyDataService.SpotifyApiBaseURL + 'tracks',
        {
          params: tracksParam,
        },
      )
      .toPromise();
  }

  /**
   * https://api.spotify.com/v1/me
   * @returns Promise
   */
  getUserData(): Promise<SpotifyApi.CurrentUsersProfileResponse> {
    return this.httpClient
      .get<SpotifyApi.CurrentUsersProfileResponse>(
        SpotifyDataService.SpotifyApiBaseURL + 'me',
      )
      .toPromise();
  }
}
