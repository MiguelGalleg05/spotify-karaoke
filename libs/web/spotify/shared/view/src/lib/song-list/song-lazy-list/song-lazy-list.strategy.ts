import { ActivatedRoute } from '@angular/router';

import {
  PaginationInterface,
  SpotifyAlbumDataService,
  SpotifyPlaylistDataService,
} from '@artur-ba/web/spotify/shared/service';

import { AbstractLazyListStrategy } from '../../lazy-scroll/abstract-lazy-list/abstract-lazy-list.strategy';

export abstract class SongUriLazyListStrategy<
  T,
> extends AbstractLazyListStrategy<T, string> {
  constructor(protected readonly route: ActivatedRoute) {
    super();
  }

  abstract getData(
    requestParam: string,
    pagination: PaginationInterface,
  ): Promise<SpotifyApi.PagingObject<T>>;

  getRequestParams(): string {
    return this.route.snapshot.params['uri'];
  }
}

export class SongAlbumLazyListStrategy extends SongUriLazyListStrategy<SpotifyApi.TrackObjectFull> {
  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly spotifyAlbumData: SpotifyAlbumDataService,
  ) {
    super(route);
  }

  getData(
    requestParam: string,
    pagination: PaginationInterface,
  ): Promise<SpotifyApi.PagingObject<SpotifyApi.TrackObjectFull>> {
    return this.spotifyAlbumData.getAlbumTracks(
      requestParam,
      pagination,
    ) as Promise<SpotifyApi.PagingObject<SpotifyApi.TrackObjectFull>>;
  }
}

export class SongPlaylistLazyListStrategy extends SongUriLazyListStrategy<SpotifyApi.TrackObjectFull> {
  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly spotifyPlaylistData: SpotifyPlaylistDataService,
  ) {
    super(route);
  }

  async getData(
    requestParam: string,
    pagination: PaginationInterface,
  ): Promise<SpotifyApi.PagingObject<SpotifyApi.TrackObjectFull>> {
    const response = await this.spotifyPlaylistData.getPlaylistTracks(
      requestParam,
      pagination,
    );
    const items = response.items.map((playlistTrack) => playlistTrack.track);
    return Promise.resolve({ ...response, items });
  }
}
