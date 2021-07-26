import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyDataService } from '@artur-ba/web/spotify/shared/service';
import { TrackListColumns } from '@artur-ba/web/spotify/shared/view';

@Component({
  selector: 'artur-ba-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
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
    protected spotifyData: SpotifyDataService,
  ) {}

  async ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const playlistUri = routeParams.get('uri');

    this.playlistTracks = await this.spotifyData.getPlaylistTracks(playlistUri);
    this.playlist = await this.spotifyData.getPlaylist(playlistUri);
  }

  getTracks(): SpotifyApi.TrackObjectFull[] {
    return this.playlistTracks?.items.map(
      (playlistTrack) => playlistTrack.track,
    );
  }
}
