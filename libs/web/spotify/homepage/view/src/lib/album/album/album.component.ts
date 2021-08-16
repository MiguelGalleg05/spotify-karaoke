import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

import {
  AlbumTrackLazyListStrategy,
  TrackListColumns,
} from '@artur-ba/web/spotify/shared/view';
import { SpotifyAlbumDataService } from '@artur-ba/web/spotify/shared/service';

import { AbstractUriViewComponent } from '../../abstract-uri-view/abstract-uri-view.component';

@Component({
  selector: 'artur-ba-album',
  templateUrl: './album.component.html',
  styleUrls: ['../../../../styles/details.scss'],
})
export class AlbumComponent extends AbstractUriViewComponent {
  album: SpotifyApi.AlbumObjectFull;
  readonly columns: TrackListColumns[] = [
    TrackListColumns.title_artist,
    TrackListColumns.time,
  ];

  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly spotifyAlbumData: SpotifyAlbumDataService,
  ) {
    super(route);
  }

  protected async getUriData(albumUri: string): Promise<void> {
    // this.albumTracks = await this.spotifyAlbumData.getAlbumTracks(albumUri);
    this.album = await this.spotifyAlbumData.getAlbum(albumUri);
  }

  getStrategy(): AlbumTrackLazyListStrategy {
    return new AlbumTrackLazyListStrategy(this.route, this.spotifyAlbumData);
  }
}
