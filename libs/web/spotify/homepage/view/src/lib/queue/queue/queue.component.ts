import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { PlayerStore } from '@artur-ba/shared/service';
import { TrackListColumns } from '@artur-ba/web/spotify/shared/view';

@Component({
  selector: 'artur-ba-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss'],
})
export class QueueComponent implements OnInit, OnDestroy {
  trackWindow: Spotify.PlaybackTrackWindow;
  readonly displayColumns: TrackListColumns[] = [
    TrackListColumns.album,
    TrackListColumns.title_artist,
    TrackListColumns.image,
    TrackListColumns.time,
  ];

  protected readonly subscriptions: Subscription = new Subscription();

  constructor(protected readonly playerStore: PlayerStore) {}

  async ngOnInit(): Promise<void> {
    this.subscriptions.add(
      this.playerStore.trackWindow$.subscribe((trackWindow) => {
        if (this.trackWindow !== trackWindow) {
          this.trackWindow = trackWindow;
        }
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  nextTracksUri(): string[] {
    return this.trackWindow?.next_tracks.map((track) => track.uri);
  }
}
