import { Component } from '@angular/core';

import { AbstractListComponent } from '@artur-ba/web/spotify/shared/view';

@Component({
  selector: 'artur-ba-playlist-infinitive-list',
  templateUrl: './playlist-infinitive-list.component.html',
  styleUrls: ['./playlist-infinitive-list.component.scss'],
})
export class PlaylistInfinitiveListComponent extends AbstractListComponent<
  SpotifyApi.ListOfCurrentUsersPlaylistsResponse,
  null
> {}
