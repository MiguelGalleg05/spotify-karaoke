import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { PlayerControlService } from '@artur-ba/web/spotify/shared/service';
import { PlayerStore } from '@artur-ba/shared/service';

@Component({
  selector: 'artur-ba-player-settings',
  templateUrl: './player-settings.component.html',
  styleUrls: ['./player-settings.component.scss'],
})
export class PlayerSettingsComponent implements OnInit, OnDestroy {
  readonly loud = 50;
  volume = 0;

  protected subscriptions: Subscription[] = [];

  constructor(
    protected playerStore: PlayerStore,
    protected playerControlService: PlayerControlService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.playerStore.volume$.subscribe((volume) => {
        this.volume = volume;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  handleVolumeChange(event: number | null): void {
    if (event === null) {
      return;
    }
    this.setVolume(event);
  }

  isLoud(): boolean {
    return this.volume >= this.loud;
  }

  isMute(): boolean {
    return this.volume === 0;
  }

  protected setVolume(volume: number): void {
    this.playerControlService.setVolume(volume);
  }

  mute(): void {
    this.setVolume(0);
  }
}
