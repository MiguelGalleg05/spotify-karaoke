import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  SongLazyListComponent,
  SongPlaylistLazyListStrategy,
  TrackListColumns,
} from '@artur-ba/web/spotify/shared/view';
import { SpotifyPlaylistDataService } from '@artur-ba/web/spotify/shared/service';

import { AbstractUriViewComponent } from '../abstract-uri-view/abstract-uri-view.component';

@Component({
  selector: 'artur-ba-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent extends AbstractUriViewComponent {
  playlistTracks: SpotifyApi.PlaylistTrackResponse;
  playlist: SpotifyApi.PlaylistObjectFull;
  readonly columns: TrackListColumns[] = [
    TrackListColumns.image,
    TrackListColumns.album,
    TrackListColumns.title_artist,
    TrackListColumns.time,
  ];

  @ViewChild(SongLazyListComponent)
  protected songLazyList: SongLazyListComponent;

  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly spotifyPlaylistData: SpotifyPlaylistDataService,
  ) {
    super(route);
  }

  protected async getUriData(playlistUri: string): Promise<void> {
    this.playlist = await this.spotifyPlaylistData.getPlaylist(playlistUri);
    this.songLazyList.ngOnInit();
  }

  getStrategy(): SongPlaylistLazyListStrategy {
    return new SongPlaylistLazyListStrategy(
      this.route,
      this.spotifyPlaylistData,
    );
  }
}
