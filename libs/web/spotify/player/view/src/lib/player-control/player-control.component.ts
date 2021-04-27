import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { PlayerControlService } from '@artur-ba/web/spotify/shared/service';
import { PlayerStore } from '@artur-ba/shared/service';

@Component({
  selector: 'artur-ba-player-control',
  templateUrl: './player-control.component.html',
  styleUrls: ['./player-control.component.scss'],
})
export class PlayerControlComponent implements OnInit, OnDestroy {
  progress$: Observable<number>;
  max: number;
  paused: boolean;

  protected subscriptions: Subscription[] = [];

  constructor(
    protected playerStore: PlayerStore,
    protected playerControlService: PlayerControlService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.playerStore.progress$.subscribe((progress) => {
        this.progress$ = progress;
      })
    );

    this.subscriptions.push(
      this.playerStore.playback$.subscribe((playback) => {
        this.max = playback.duration;
      })
    );

    this.subscriptions.push(
      this.playerStore.paused$.subscribe((paused) => {
        this.paused = paused;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
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

  handleSeek(new_position: number): void {
    this.playerControlService.seek(new_position);
  }
}
