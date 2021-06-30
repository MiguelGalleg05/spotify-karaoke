import { Component } from '@angular/core';

import { SpotifyDataService } from '@artur-ba/web/spotify/shared/service';

@Component({
  selector: 'artur-ba-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  albumSearchResult: any;
  queryParams = { q: '' };

  protected readonly albumsWrapperTitle = $localize`:search.albumsWrapper:Albums`;

  constructor(protected readonly spotifyData: SpotifyDataService) {}

  async search(searchQuery: string): Promise<void> {
    this.queryParams.q = searchQuery;
    this.albumSearchResult = await this.spotifyData.getSearchAlbumResult(
      searchQuery
    );
  }

  getAlbumsWrapperTitle(): string {
    return this.albumsWrapperTitle;
  }
}
