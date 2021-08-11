import { ActivatedRoute } from '@angular/router';

import {
  PaginationInterface,
  SpotifyArtistDataService,
  SpotifySearchDataService,
} from '@artur-ba/web/spotify/shared/service';

import { AbstractLazyListStrategy } from '../../lazy-scroll/abstract-lazy-list/abstract-lazy-list.strategy';

export class ArtistAlbumCardListStrategy
  implements AbstractLazyListStrategy<SpotifyApi.AlbumObjectSimplified, string>
{
  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly spotifyArtistData: SpotifyArtistDataService,
  ) {}

  async getData(
    requestParams: string,
    pagination: PaginationInterface,
  ): Promise<SpotifyApi.PagingObject<SpotifyApi.AlbumObjectSimplified>> {
    return this.spotifyArtistData.getArtistAlbums(requestParams, pagination);
  }

  getRequestParams(): string {
    return this.route.snapshot.params.uri;
  }
}

export abstract class SearchCardListStrategy<T>
  implements AbstractLazyListStrategy<T, string>
{
  constructor(protected readonly route: ActivatedRoute) {}

  abstract getData(
    requestParam: string,
    pagination: PaginationInterface,
  ): Promise<SpotifyApi.PagingObject<T>>;

  getRequestParams(): string {
    return this.route.snapshot.queryParams.q;
  }
}

export class SearchAlbumCardListStrategy extends SearchCardListStrategy<SpotifyApi.AlbumObjectSimplified> {
  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly spotifySearchData: SpotifySearchDataService,
  ) {
    super(route);
  }

  async getData(
    requestParams: string,
    pagination: PaginationInterface,
  ): Promise<SpotifyApi.PagingObject<SpotifyApi.AlbumObjectSimplified>> {
    const response = await this.spotifySearchData.getSearchAlbumResult(
      requestParams,
      pagination,
    );
    return Promise.resolve(response.albums);
  }
}

export class SearchPlaylistCardListStrategy extends SearchCardListStrategy<SpotifyApi.PlaylistObjectSimplified> {
  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly spotifySearchData: SpotifySearchDataService,
  ) {
    super(route);
  }

  async getData(
    requestParams: string,
    pagination: PaginationInterface,
  ): Promise<SpotifyApi.PagingObject<SpotifyApi.PlaylistObjectSimplified>> {
    const response = await this.spotifySearchData.getSearchPlaylistResult(
      requestParams,
      pagination,
    );
    return Promise.resolve(response.playlists);
  }
}
