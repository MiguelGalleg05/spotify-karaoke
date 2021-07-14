import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyDataService } from '@artur-ba/web/spotify/shared/service';
import { TrackHelper } from '@artur-ba/web/spotify/shared/helper';
import { TrackListColumns } from '@artur-ba/web/spotify/shared/view';

@Component({
  selector: 'artur-ba-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  albumTracks: SpotifyApi.AlbumTracksResponse;
  album: SpotifyApi.AlbumObjectFull;
  readonly columns: TrackListColumns[] = [
    TrackListColumns.count,
    TrackListColumns.title_artist,
    TrackListColumns.time,
  ];

  constructor(
    protected route: ActivatedRoute,
    protected spotifyData: SpotifyDataService,
  ) {}

  async ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const albumUri = routeParams.get('uri');

    this.albumTracks = await this.spotifyData.getAlbumTracks(albumUri);
    this.album = await this.spotifyData.getAlbum(albumUri);
  }

  get tracks(): string[] {
    return this.albumTracks?.items.map((track) => track.uri);
  }

  get image300Url(): string {
    return TrackHelper.getImage300Url(this.album);
  }
}
