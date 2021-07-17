import { ActivatedRoute } from '@angular/router';

import {
  PaginationInterface,
  SpotifyDataService,
} from '@artur-ba/web/spotify/shared/service';

export abstract class CardListStrategy<T, R> {
  abstract getData(
    requestParam: R,
    pagination: PaginationInterface,
  ): Promise<SpotifyApi.PagingObject<T>>;

  abstract getRequestParams(): R;
}

export class ArtistAlbumCardListStrategy
  implements CardListStrategy<SpotifyApi.AlbumObjectSimplified, string>
{
  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly spotifyData: SpotifyDataService,
  ) {}

  async getData(
    requestParams: string,
    pagination: PaginationInterface,
  ): Promise<SpotifyApi.PagingObject<SpotifyApi.AlbumObjectSimplified>> {
    return this.spotifyData.getArtistAlbums(requestParams, pagination);
  }

  getRequestParams(): string {
    return this.route.snapshot.params.uri;
  }
}

export class SearchAlbumCardListStrategy
  implements CardListStrategy<SpotifyApi.AlbumObjectSimplified, string>
{
  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly spotifyData: SpotifyDataService,
  ) {}

  async getData(
    requestParams: string,
    pagination: PaginationInterface,
  ): Promise<SpotifyApi.PagingObject<SpotifyApi.AlbumObjectSimplified>> {
    const response = await this.spotifyData.getSearchAlbumResult(
      requestParams,
      pagination,
    );
    return Promise.resolve(response.albums);
  }

  getRequestParams(): string {
    return this.route.snapshot.queryParams.q;
  }
}
