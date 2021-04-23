import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';

import { PlayerComponent } from './player/player.component';
import { PlayerControlComponent } from './player-control/player-control.component';
import { PlayerSettingsComponent } from './player-settings/player-settings.component';
import { PlayerSongComponent } from './player-song/player-song.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule, MatSliderModule],
  declarations: [
    PlayerComponent,
    PlayerSongComponent,
    PlayerControlComponent,
    PlayerSettingsComponent,
  ],
  exports: [PlayerComponent],
})
export class WebSpotifyPlayerViewModule {}
