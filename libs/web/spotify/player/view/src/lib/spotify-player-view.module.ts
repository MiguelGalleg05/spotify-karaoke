import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

import { ImageModule } from '@artur-ba/web/spotify/shared/view';
import { WebSpotifySharedDirectivesModule } from '@artur-ba/web/spotify/shared/directives';
import { WebSpotifySharedPipeModule } from '@artur-ba/web/spotify/shared/pipe';

import { PlayerAvailableDevicesComponent } from './player-settings/player-available-devices/player-available-devices.component';
import { PlayerComponent } from './player/player.component';
import { PlayerControlComponent } from './player-control/player-control.component';
import { PlayerDeviceComponent } from './player-settings/player-device/player-device.component';
import { PlayerFreeComponent } from './player-free/player-free.component';
import { PlayerSettingsComponent } from './player-settings/player-settings.component';
import { PlayerSongComponent } from './player-song/player-song.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    MatMenuModule,
    MatTooltipModule,
    RouterModule.forChild([]),
    WebSpotifySharedPipeModule,
    WebSpotifySharedDirectivesModule,
    ImageModule,
  ],
  declarations: [
    PlayerComponent,
    PlayerSongComponent,
    PlayerControlComponent,
    PlayerSettingsComponent,
    PlayerAvailableDevicesComponent,
    PlayerDeviceComponent,
    PlayerFreeComponent,
  ],
  exports: [PlayerComponent, PlayerFreeComponent],
})
export class WebSpotifyPlayerViewModule {}
