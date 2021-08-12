import { Component } from '@angular/core';

import { CardListViewMode } from '@artur-ba/web/spotify/shared/view';
import { SpotifySearchDataService } from '@artur-ba/web/spotify/shared/service';

@Component({
  selector: 'artur-ba-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  albumSearchResult: SpotifyApi.AlbumSearchResponse;
  playlistSearchResult: SpotifyApi.PlaylistSearchResponse;
  trackSearchResult: SpotifyApi.TrackSearchResponse;
  queryParams = { q: '' };

  readonly CardListViewMode = CardListViewMode;

  readonly albumsWrapperTitle = $localize`:search.albumsWrapper:Albums`;
  readonly playlistWrapperTitle = $localize`:search.playlistsWrapper:Playlists`;
  readonly trackWrapperTitle = $localize`:search.trackWrapper:Tracks`;

  constructor(protected readonly spotifySearchData: SpotifySearchDataService) {}

  async search(searchQuery: string): Promise<void> {
    this.queryParams.q = encodeURI(searchQuery);
    this.albumSearchResult = await this.spotifySearchData.getSearchAlbumResult(
      searchQuery,
    );
    this.playlistSearchResult =
      await this.spotifySearchData.getSearchPlaylistResult(searchQuery);
    this.trackSearchResult = await this.spotifySearchData.getSearchTrackResult(
      searchQuery,
      { limit: 5, offset: 0, total: null },
    );
  }
}
