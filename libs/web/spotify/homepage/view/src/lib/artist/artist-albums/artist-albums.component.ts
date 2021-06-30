import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyDataService } from '@artur-ba/web/spotify/shared/service';

@Component({
  selector: 'artur-ba-artist-albums',
  templateUrl: './artist-albums.component.html',
  styleUrls: ['./artist-albums.component.scss'],
})
export class ArtistAlbumsComponent implements OnInit {
  artist: SpotifyApi.ArtistObjectFull;

  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly spotifyData: SpotifyDataService
  ) {}

  async ngOnInit(): Promise<void> {
    const uri = this.route.snapshot.params.uri;
    this.artist = await this.spotifyData.getArtist(uri);
  }
}
