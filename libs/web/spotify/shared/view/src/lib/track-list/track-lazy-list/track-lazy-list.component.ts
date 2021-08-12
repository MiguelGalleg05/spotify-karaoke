import { Component, Input } from '@angular/core';

import { AbstractLazyListComponent } from '../../lazy-scroll/abstract-lazy-list/abstract-lazy-list.component';
import { TrackListColumns } from '../track-list/track-list.component';

@Component({
  selector: 'artur-ba-track-lazy-list',
  styleUrls: ['./track-lazy-list.component.scss'],
  templateUrl: './track-lazy-list.component.html',
})
export class TrackLazyListComponent extends AbstractLazyListComponent<
  SpotifyApi.TrackObjectFull,
  string
> {
  @Input() columns: TrackListColumns[];
}
