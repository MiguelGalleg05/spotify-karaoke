import { Component } from '@angular/core';

import { CardListViewMode } from '@artur-ba/web/spotify/shared/view';
import { SpotifyDataService } from '@artur-ba/web/spotify/shared/service';

@Component({
  selector: 'artur-ba-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  albumSearchResult: SpotifyApi.AlbumSearchResponse;
  playlistSearchResult: SpotifyApi.PlaylistSearchResponse;
  queryParams = { q: '' };

  readonly CardListViewMode = CardListViewMode;

  readonly albumsWrapperTitle = $localize`:search.albumsWrapper:Albums`;
  readonly playlistWrapperTitle = $localize`:search.playlistsWrapper:Playlists`;

  constructor(protected readonly spotifyData: SpotifyDataService) {}

  async search(searchQuery: string): Promise<void> {
    this.queryParams.q = encodeURI(searchQuery);
    this.albumSearchResult = await this.spotifyData.getSearchAlbumResult(
      searchQuery,
    );
    this.playlistSearchResult = await this.spotifyData.getSearchPlaylistResult(
      searchQuery,
    );
  }

  getAlbumsWrapperTitle(): string {
    return this.albumsWrapperTitle;
  }
}
