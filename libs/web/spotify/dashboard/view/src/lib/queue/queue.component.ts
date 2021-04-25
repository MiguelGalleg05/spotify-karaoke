import { Component } from '@angular/core';
import { PlayerStore } from '@artur-ba/shared/service';

@Component({
  selector: 'artur-ba-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss'],
})
export class QueueComponent {
  trackWindow: Spotify.PlaybackTrackWindow;

  constructor(protected playerStore: PlayerStore) {
    this.playerStore.trackWindow$.subscribe((trackWindow) => {
      if (this.trackWindow !== trackWindow) {
        this.trackWindow = trackWindow;
      }
    });
  }
}
