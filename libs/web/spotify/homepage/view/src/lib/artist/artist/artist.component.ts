import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { CardListViewMode } from '@artur-ba/web/spotify/shared/view';
import { SpotifyDataService } from '@artur-ba/web/spotify/shared/service';
import { UriDataHelper } from '@artur-ba/web/spotify/shared/helper';

@Component({
  selector: 'artur-ba-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit, OnDestroy {
  artist: SpotifyApi.SingleArtistResponse;
  artistTracks: SpotifyApi.ArtistsTopTracksResponse;
  artistAlbums: SpotifyApi.PagingObject<SpotifyApi.AlbumObjectSimplified>;

  readonly CardListViewMode = CardListViewMode;
  readonly albumsWrapperTitle = $localize`:artist.albums:Albums`;
  protected subscriptions = new Subscription();

  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly spotifyData: SpotifyDataService,
  ) {}

  ngOnInit(): void {
    const routeParamsSub = this.route.params.subscribe((params) => {
      this.getArtistData(params['uri']);
    });
    this.subscriptions.add(routeParamsSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  artistAlbumsUrl(): string {
    return `/artist/${UriDataHelper.getClearUri(this.artist?.uri)}/albums`;
  }

  protected async getArtistData(artistUri: string): Promise<void> {
    this.artist = await this.spotifyData.getArtist(artistUri);
    this.artistTracks = await this.spotifyData.getArtistTopTracks(artistUri);
    this.artistAlbums = await this.spotifyData.getArtistAlbums(artistUri);
  }
}
