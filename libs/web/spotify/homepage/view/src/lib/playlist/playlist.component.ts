import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

import { SpotifyPlaylistDataService } from '@artur-ba/web/spotify/shared/service';
import { TrackListColumns } from '@artur-ba/web/spotify/shared/view';

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

  constructor(
    protected route: ActivatedRoute,
    protected spotifyPlaylistData: SpotifyPlaylistDataService,
  ) {
    super(route);
  }

  protected async getUriData(playlistUri: string): Promise<void> {
    this.playlistTracks = await this.spotifyPlaylistData.getPlaylistTracks(
      playlistUri,
    );
    this.playlist = await this.spotifyPlaylistData.getPlaylist(playlistUri);
  }

  getTracks(): SpotifyApi.TrackObjectFull[] {
    return this.playlistTracks?.items.map(
      (playlistTrack) => playlistTrack.track,
    );
  }
}
