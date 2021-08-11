import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  CardLazyListComponent,
  CardListViewMode,
  SearchPlaylistCardListStrategy,
} from '@artur-ba/web/spotify/shared/view';
import { SpotifySearchDataService } from '@artur-ba/web/spotify/shared/service';

@Component({
  selector: 'artur-ba-search-playlist',
  templateUrl: './search-playlist.component.html',
})
export class SearchPlaylistComponent {
  readonly CardListViewMode = CardListViewMode;

  @ViewChild(CardLazyListComponent) cardList: CardLazyListComponent<
    SpotifyApi.AlbumObjectSimplified,
    string
  >;

  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly spotifySearchData: SpotifySearchDataService,
  ) {}

  getStrategy(): SearchPlaylistCardListStrategy {
    return new SearchPlaylistCardListStrategy(
      this.route,
      this.spotifySearchData,
    );
  }

  search() {
    this.cardList?.ngOnInit();
  }
}
