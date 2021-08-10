import { Component } from '@angular/core';

import { SpotifyPlaylistDataService } from '@artur-ba/web/spotify/shared/service';

import { PlaylistListStrategy } from '../playlist-infinitive-list/playlist-infinitive-list.strategy';

@Component({
  selector: 'artur-ba-user-playlist',
  templateUrl: './user-playlist.component.html',
  styleUrls: ['./user-playlist.component.scss'],
})
export class UserPlaylistComponent {
  constructor(protected readonly spotifyPlaylist: SpotifyPlaylistDataService) {}

  getStrategy(): PlaylistListStrategy {
    return new PlaylistListStrategy(this.spotifyPlaylist);
  }
}
