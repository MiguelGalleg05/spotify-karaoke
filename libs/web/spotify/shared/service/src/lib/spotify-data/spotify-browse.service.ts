import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SpotifyDataService } from './spotify-data.service';

@Injectable({
  providedIn: 'root',
})
export class SpotifyBrowseService {
  constructor(protected readonly httpClient: HttpClient) {}

  getFeaturedPlaylists(
    limit = 50,
  ): Promise<SpotifyApi.ListOfFeaturedPlaylistsResponse> {
    const params = new HttpParams().append('limit', limit);

    return this.httpClient
      .get<SpotifyApi.ListOfFeaturedPlaylistsResponse>(
        SpotifyDataService.SpotifyApiBaseURL + 'browse/featured-playlists',
        { params },
      )
      .toPromise();
  }
}
