import { Component, forwardRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  PaginationInterface,
  SpotifyDataService,
} from '@artur-ba/web/spotify/shared/service';
import { AbstractListComponent } from '@artur-ba/web/spotify/shared/view';

@Component({
  selector: 'artur-ba-search-album-list',
  templateUrl: './search-album-list.component.html',
  styleUrls: ['./search-album-list.component.scss'],
  providers: [
    {
      provide: AbstractListComponent,
      useExisting: forwardRef(() => SearchAlbumListComponent),
    },
  ],
})
export class SearchAlbumListComponent extends AbstractListComponent<
  SpotifyApi.AlbumObjectSimplified,
  string
> {
  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly spotifyData: SpotifyDataService
  ) {
    super(route);
  }

  async getData(
    requestParams: string,
    pagination: PaginationInterface
  ): Promise<SpotifyApi.PagingObject<SpotifyApi.AlbumObjectSimplified>> {
    const response = await this.spotifyData.getSearchAlbumResult(
      requestParams,
      pagination
    );
    return Promise.resolve(response.albums);
  }

  getRequestParams(): string {
    return this.route.snapshot.queryParams.q;
  }
}
