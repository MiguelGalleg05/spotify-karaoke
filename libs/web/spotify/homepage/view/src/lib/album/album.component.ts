import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyDataService } from '@artur-ba/web/spotify/shared/service';
import { TrackListColumns } from '@artur-ba/web/spotify/shared/view';

@Component({
  selector: 'artur-ba-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  album: SpotifyApi.AlbumTracksResponse;
  readonly columns: TrackListColumns[] = [
    TrackListColumns.count,
    TrackListColumns.title_artist,
    TrackListColumns.time,
  ];

  constructor(
    protected route: ActivatedRoute,
    protected spotifyData: SpotifyDataService
  ) {}

  async ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const albumUri = routeParams.get('uri');

    this.album = await this.spotifyData.getAlbumTracks(albumUri);
  }

  get tracks(): string[] {
    return this.album?.items.map((track) => track.uri);
  }
}
