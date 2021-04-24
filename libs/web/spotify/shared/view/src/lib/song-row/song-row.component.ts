import { Component, Input } from '@angular/core';

import { TrackHelper } from '@artur-ba/web/spotify/shared/helper';
@Component({
  selector: 'artur-ba-song-row',
  templateUrl: './song-row.component.html',
  styleUrls: ['./song-row.component.scss'],
})
export class SongRowComponent {
  @Input() track: Spotify.Track;

  readonly trackHelper = TrackHelper;
}
