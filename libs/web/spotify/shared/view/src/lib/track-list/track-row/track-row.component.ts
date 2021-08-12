import { Component, Input } from '@angular/core';

import { TrackHelper } from '@artur-ba/web/spotify/shared/helper';

import { TrackListColumns } from '../track-list/track-list.component';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[artur-ba-track-row]',
  templateUrl: './track-row.component.html',
  styleUrls: ['./track-row.component.scss'],
})
export class TrackRowComponent {
  @Input() track: SpotifyApi.TrackObjectFull;
  @Input() columns: TrackListColumns[];

  readonly songListColumns = TrackListColumns;

  readonly trackHelper = TrackHelper;
}
