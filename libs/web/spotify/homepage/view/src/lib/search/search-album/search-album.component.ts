import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  CardListComponent,
  CardListViewMode,
  SearchAlbumCardListStrategy,
} from '@artur-ba/web/spotify/shared/view';
import { SpotifyDataService } from '@artur-ba/web/spotify/shared/service';

@Component({
  selector: 'artur-ba-search-album',
  templateUrl: './search-album.component.html',
  styleUrls: ['./search-album.component.scss'],
})
export class SearchAlbumComponent {
  readonly CardListViewMode = CardListViewMode;
  @ViewChild(CardListComponent) cardList: CardListComponent<
    SpotifyApi.AlbumObjectSimplified,
    string
  >;

  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly spotifyData: SpotifyDataService,
  ) {}

  getStrategy(): SearchAlbumCardListStrategy {
    return new SearchAlbumCardListStrategy(this.route, this.spotifyData);
  }

  search() {
    this.cardList?.ngOnInit();
  }
}
