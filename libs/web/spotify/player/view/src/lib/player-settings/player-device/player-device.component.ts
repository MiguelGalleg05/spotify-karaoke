import { Component, Input } from '@angular/core';

@Component({
  selector: 'artur-ba-player-device',
  templateUrl: './player-device.component.html',
  styleUrls: ['./player-device.component.scss'],
})
export class PlayerDeviceComponent {
  @Input() device: SpotifyApi.UserDevice;
}
