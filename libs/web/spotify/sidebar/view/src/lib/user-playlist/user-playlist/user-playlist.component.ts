import { Component } from '@angular/core';

import { SpotifyPlaylistDataService } from '@artur-ba/web/spotify/shared/service';

import { PlaylistLazyListStrategy } from '../playlist-lazy-list/playlist-lazy-list.strategy';

@Component({
  selector: 'artur-ba-user-playlist',
  templateUrl: './user-playlist.component.html',
  styleUrls: ['./user-playlist.component.scss'],
})
export class UserPlaylistComponent {
  constructor(protected readonly spotifyPlaylist: SpotifyPlaylistDataService) {}

  getStrategy(): PlaylistLazyListStrategy {
    return new PlaylistLazyListStrategy(this.spotifyPlaylist);
  }
}
