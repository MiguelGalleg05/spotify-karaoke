import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { SpotifyDataService } from '@artur-ba/web/spotify/shared/service';
import { TrackHelper } from '@artur-ba/web/spotify/shared/helper';

@Component({
  selector: 'artur-ba-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit, OnDestroy {
  artist: SpotifyApi.SingleArtistResponse;
  artistTracks: SpotifyApi.ArtistsTopTracksResponse;
  artistAlbums: SpotifyApi.PagingObject<SpotifyApi.AlbumObjectSimplified>;

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

  protected async getArtistData(artistUri: string): Promise<void> {
    this.artist = await this.spotifyData.getArtist(artistUri);
    this.artistTracks = await this.spotifyData.getArtistTopTracks(artistUri);
    this.artistAlbums = await this.spotifyData.getArtistAlbums(artistUri);
  }
}
