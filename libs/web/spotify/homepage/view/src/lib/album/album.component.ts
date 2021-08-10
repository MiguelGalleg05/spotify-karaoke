import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

import { SpotifyAlbumDataService } from '@artur-ba/web/spotify/shared/service';
import { TrackListColumns } from '@artur-ba/web/spotify/shared/view';

import { AbstractUriViewComponent } from '../abstract-uri-view/abstract-uri-view.component';

@Component({
  selector: 'artur-ba-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent extends AbstractUriViewComponent {
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
  ) {
    super(route);
  }

  protected async getUriData(albumUri: string): Promise<void> {
    this.albumTracks = await this.spotifyAlbumData.getAlbumTracks(albumUri);
    this.album = await this.spotifyAlbumData.getAlbum(albumUri);
  }
}
