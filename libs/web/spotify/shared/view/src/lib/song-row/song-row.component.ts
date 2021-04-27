import { Component, Input } from '@angular/core';

import { TrackHelper } from '@artur-ba/web/spotify/shared/helper';

import { TrackListColumns } from '../song-list/song-list.component';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[artur-ba-song-row]',
  templateUrl: './song-row.component.html',
  styleUrls: ['./song-row.component.scss'],
})
export class SongRowComponent {
  @Input() track: SpotifyApi.TrackObjectFull;
  @Input() columns: TrackListColumns[];

  readonly songListColumns = TrackListColumns;

  readonly trackHelper = TrackHelper;
}
