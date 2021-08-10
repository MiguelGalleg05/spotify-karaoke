import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  PaginationInterface,
  SpotifyDataService,
} from './spotify-data.service';

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

  /**
   * https://api.spotify.com/v1/me/playlists
   * @param pagination
   * @returns Promise
   */
  getCurrentUserPlaylists(
    pagination?: PaginationInterface,
  ): Promise<
    SpotifyApi.PagingObject<SpotifyApi.ListOfCurrentUsersPlaylistsResponse>
  > {
    const params = SpotifyDataService.appendPaginationParams(
      new HttpParams(),
      pagination,
    );

    return this.httpClient
      .get<
        SpotifyApi.PagingObject<SpotifyApi.ListOfCurrentUsersPlaylistsResponse>
      >(SpotifyDataService.SpotifyApiBaseURL + 'me/playlists', { params })
      .toPromise();
  }
}
