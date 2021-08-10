import { Component } from '@angular/core';

import { AbstractLazyListComponent } from '@artur-ba/web/spotify/shared/view';

@Component({
  selector: 'artur-ba-playlist-lazy-list',
  templateUrl: './playlist-lazy-list.component.html',
  styleUrls: ['./playlist-lazy-list.component.scss'],
})
export class PlaylistLazyListComponent extends AbstractLazyListComponent<
  SpotifyApi.ListOfCurrentUsersPlaylistsResponse,
  null
> {}
