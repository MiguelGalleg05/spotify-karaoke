import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyAlbumDataService } from '@artur-ba/web/spotify/shared/service';
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
    protected spotifyAlbumData: SpotifyAlbumDataService,
  ) {}

  async ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const albumUri = routeParams.get('uri');

    this.albumTracks = await this.spotifyAlbumData.getAlbumTracks(albumUri);
    this.album = await this.spotifyAlbumData.getAlbum(albumUri);
  }
}
