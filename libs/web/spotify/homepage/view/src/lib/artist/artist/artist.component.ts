import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import {
  TrackHelper,
  UriDataHelper,
} from '@artur-ba/web/spotify/shared/helper';
import { SpotifyDataService } from '@artur-ba/web/spotify/shared/service';

@Component({
  selector: 'artur-ba-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit, OnDestroy {
  artist: SpotifyApi.SingleArtistResponse;
  artistTracks: SpotifyApi.ArtistsTopTracksResponse;
  artistAlbums: SpotifyApi.PagingObject<SpotifyApi.AlbumObjectSimplified>;

  protected readonly albumsWrapperTitle = $localize`:artist.albums:Albums`;
  protected subscriptions: Subscription[] = [];

  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly spotifyData: SpotifyDataService
  ) {}

  ngOnInit(): void {
    const routeParamsSub = this.route.params.subscribe((params) => {
      this.getArtistData(params['uri']);
    });
    this.subscriptions.push(routeParamsSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  imageUrl = (size: number): string => {
    return TrackHelper.getImageUrl(this.artist, size);
  };

  artistAlbumsUrl(): string {
    return `/artist/${UriDataHelper.getClearUri(this.artist?.uri)}/albums`;
  }

  getAlbumsWrapperTitle(): string {
    return this.albumsWrapperTitle;
  }

  protected async getArtistData(artistUri: string): Promise<void> {
    this.artist = await this.spotifyData.getArtist(artistUri);
    this.artistTracks = await this.spotifyData.getArtistTopTracks(artistUri);
    this.artistAlbums = await this.spotifyData.getArtistAlbums(artistUri);
  }
}
