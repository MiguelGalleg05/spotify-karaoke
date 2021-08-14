import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { CardListViewMode } from '@artur-ba/web/spotify/shared/view';
import { SpotifyArtistDataService } from '@artur-ba/web/spotify/shared/service';
import { UriDataHelper } from '@artur-ba/web/spotify/shared/helper';

import { AbstractUriViewComponent } from '../../abstract-uri-view/abstract-uri-view.component';

@Component({
  selector: 'artur-ba-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['../../../../styles/details.scss'],
})
export class ArtistComponent extends AbstractUriViewComponent {
  artist: SpotifyApi.SingleArtistResponse;
  artistTracks: SpotifyApi.ArtistsTopTracksResponse;
  artistAlbums: SpotifyApi.PagingObject<SpotifyApi.AlbumObjectSimplified>;

  readonly CardListViewMode = CardListViewMode;
  readonly albumsWrapperTitle = $localize`:artist.albums:Albums`;
  protected subscriptions = new Subscription();

  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly spotifyArtistData: SpotifyArtistDataService,
  ) {
    super(route);
  }

  artistAlbumsUrl(): string {
    return `/artist/${UriDataHelper.getClearUri(this.artist?.uri)}/albums`;
  }

  protected getUriData(uri: string): void {
    this.getArtistData(uri);
  }

  protected async getArtistData(artistUri: string): Promise<void> {
    this.artist = await this.spotifyArtistData.getArtist(artistUri);
    this.artistTracks = await this.spotifyArtistData.getArtistTopTracks(
      artistUri,
    );
    this.artistAlbums = await this.spotifyArtistData.getArtistAlbums(artistUri);
  }
}
