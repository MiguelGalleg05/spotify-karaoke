import {
  Component,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

import { SpotifyDataService } from '@artur-ba/web/spotify/shared/service';

export enum TrackListColumns {
  count = 'Count',
  image = 'Image',
  title_artist = 'Title_Artist',
  album = 'Album',
  time = 'Time',
}

@Component({
  selector: 'artur-ba-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss'],
})
export class TrackListComponent implements OnChanges {
  @Input() title: string;
  @Input() header = true;
  @Input() columns: TrackListColumns[] = [
    TrackListColumns.image,
    TrackListColumns.title_artist,
    TrackListColumns.album,
    TrackListColumns.time,
  ];
  @Input() tracksUri: string[] = [];
  @Input() tracks: SpotifyApi.TrackObjectFull[] = [];

  readonly songListColumns = TrackListColumns;

  constructor(protected spotifyData: SpotifyDataService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('tracksUri' in changes) {
      this.handleTrackChange(changes.tracksUri);
    }
  }

  protected handleTrackChange(tracksUri: SimpleChange): void {
    if (
      !this.hasValue(tracksUri.currentValue) ||
      !this.wasValueChanged(tracksUri.previousValue, tracksUri.currentValue)
    ) {
      return;
    }
    this.updateTracks();
  }

  protected async updateTracks(): Promise<void> {
    const tracksUri = this.tracksUri?.filter((t) => t !== null);
    if (!tracksUri?.length) {
      return;
    }
    const { tracks } = await this.spotifyData.getTracks(tracksUri);
    this.tracks = tracks;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected hasValue(v: any[] | undefined): boolean {
    return v !== undefined && v.length > 0;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected wasValueChanged(
    prev: any[] | undefined,
    curr: any[] | undefined,
  ): boolean {
    if (prev === undefined && curr !== undefined) {
      return true;
    }
    if (!this.areArraysEqual(prev, curr)) {
      return true;
    }
    return false;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected areArraysEqual(a: any[], b: any[]): boolean {
    return (
      a.length == b.length &&
      a.every(function (element, index) {
        return element === b[index];
      })
    );
  }
}
