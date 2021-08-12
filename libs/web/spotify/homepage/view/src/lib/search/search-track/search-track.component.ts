import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  SearchTrackLazyListStrategy,
  TrackLazyListComponent,
} from '@artur-ba/web/spotify/shared/view';
import { SpotifySearchDataService } from '@artur-ba/web/spotify/shared/service';

@Component({
  selector: 'artur-ba-search-track',
  templateUrl: './search-track.component.html',
  styleUrls: ['./search-track.component.scss'],
})
export class SearchTrackComponent {
  @ViewChild(TrackLazyListComponent) cardList: TrackLazyListComponent;

  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly spotifySearchData: SpotifySearchDataService,
  ) {}

  getStrategy(): SearchTrackLazyListStrategy {
    return new SearchTrackLazyListStrategy(this.route, this.spotifySearchData);
  }

  search() {
    this.cardList?.ngOnInit();
  }
}
