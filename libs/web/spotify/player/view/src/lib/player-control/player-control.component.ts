import { Component } from '@angular/core';

import { PlayerControlService, PlayerStore } from '@artur-ba/shared/service';
import { Observable } from 'rxjs';

@Component({
  selector: 'artur-ba-player-control',
  templateUrl: './player-control.component.html',
  styleUrls: ['./player-control.component.scss'],
})
export class PlayerControlComponent {
  progress$: Observable<number>;
  max: number;
  paused: boolean;

  constructor(
    protected playerStore: PlayerStore,
    protected playerControlService: PlayerControlService
  ) {
    this.playerStore.progress$.subscribe((progress) => {
      this.progress$ = progress;
    });

    this.playerStore.playback$.subscribe((playback) => {
      this.max = playback.duration;
    });

    this.playerStore.paused$.subscribe((paused) => {
      this.paused = paused;
    });
  }

  play(): void {
    this.playerControlService.play();
  }

  pause(): void {
    this.playerControlService.pause();
  }

  nextTrack(): void {
    this.playerControlService.nextTrack();
  }

  prevTrack(): void {
    this.playerControlService.prevTrack();
  }
}
