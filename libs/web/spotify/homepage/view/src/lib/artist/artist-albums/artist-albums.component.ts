import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  ArtistAlbumCardListStrategy,
  CardListViewMode,
} from '@artur-ba/web/spotify/shared/view';
import { SpotifyArtistDataService } from '@artur-ba/web/spotify/shared/service';

@Component({
  selector: 'artur-ba-artist-albums',
  templateUrl: './artist-albums.component.html',
  styleUrls: ['./artist-albums.component.scss'],
})
export class ArtistAlbumsComponent implements OnInit {
  artist: SpotifyApi.ArtistObjectFull;
  readonly CardListViewMode = CardListViewMode;

  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly spotifyArtistData: SpotifyArtistDataService,
  ) {}

  async ngOnInit(): Promise<void> {
    const uri = this.route.snapshot.params.uri;
    this.artist = await this.spotifyArtistData.getArtist(uri);
  }

  getStrategy(): ArtistAlbumCardListStrategy {
    return new ArtistAlbumCardListStrategy(this.route, this.spotifyArtistData);
  }
}
