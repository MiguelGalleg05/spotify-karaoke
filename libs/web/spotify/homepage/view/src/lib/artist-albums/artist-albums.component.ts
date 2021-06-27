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
  artistAlbums: SpotifyApi.PagingObject<SpotifyApi.AlbumObjectSimplified>;

  protected readonly albumsWrapperTitle = $localize`:artist.albums:Albums`;

  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly spotifyData: SpotifyDataService
  ) {}

  async ngOnInit(): Promise<void> {
    const artistUri = this.route.snapshot.params.uri;
    this.artist = await this.spotifyData.getArtist(artistUri);
    this.artistAlbums = await this.spotifyData.getArtistAlbums(artistUri);
  }

  getAlbumsWrapperTitle(): string {
    return this.albumsWrapperTitle;
  }
}
