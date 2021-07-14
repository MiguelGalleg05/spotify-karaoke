import { Component, forwardRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  PaginationInterface,
  SpotifyDataService,
} from '@artur-ba/web/spotify/shared/service';
import { AbstractListComponent } from '@artur-ba/web/spotify/shared/view';

@Component({
  selector: 'artur-ba-artist-albums-list',
  templateUrl: './artist-albums-list.component.html',
  styleUrls: ['./artist-albums-list.component.scss'],
  providers: [
    {
      provide: AbstractListComponent,
      useExisting: forwardRef(() => ArtistAlbumsListComponent),
    },
  ],
})
export class ArtistAlbumsListComponent extends AbstractListComponent<
  SpotifyApi.AlbumObjectSimplified,
  string
> {
  protected readonly albumsWrapperTitle = $localize`:artist.albums:Albums`;

  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly spotifyData: SpotifyDataService,
  ) {
    super(route);
  }

  async getData(
    requestParams: string,
    pagination: PaginationInterface,
  ): Promise<SpotifyApi.PagingObject<SpotifyApi.AlbumObjectSimplified>> {
    return this.spotifyData.getArtistAlbums(requestParams, pagination);
  }

  getRequestParams(): string {
    return this.route.snapshot.params.uri;
  }

  getAlbumsWrapperTitle(): string {
    return this.albumsWrapperTitle;
  }
}
