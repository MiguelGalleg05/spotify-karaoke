import { Component, Input } from '@angular/core';

import { AbstractLazyListComponent } from '../../lazy-scroll/abstract-lazy-list/abstract-lazy-list.component';
import { TrackListColumns } from '../song-list/song-list.component';

@Component({
  selector: 'artur-ba-song-lazy-list',
  styleUrls: ['./song-lazy-list.component.scss'],
  templateUrl: './song-lazy-list.component.html',
})
export class SongLazyListComponent extends AbstractLazyListComponent<
  SpotifyApi.TrackObjectFull,
  string
> {
  @Input() columns: TrackListColumns[];
}
