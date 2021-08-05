import { Component, OnInit } from '@angular/core';

import { SpotifyPlayerService } from '@artur-ba/web/spotify/shared/service';

@Component({
  selector: 'artur-ba-player-available-devices',
  templateUrl: './player-available-devices.component.html',
  styleUrls: ['./player-available-devices.component.scss'],
})
export class PlayerAvailableDevicesComponent implements OnInit {
  userDevices: SpotifyApi.UserDevicesResponse;

  constructor(protected readonly spotifyPlayerService: SpotifyPlayerService) {}

  ngOnInit(): void {
    this.getDevices();
  }

  updateDeviceList(): void {
    this.getDevices();
  }

  async selectDevice({ id }: SpotifyApi.UserDevice): Promise<void> {
    await this.spotifyPlayerService.setCurrentDevice(id);
    this.updateDeviceList();
  }

  protected async getDevices(): Promise<void> {
    this.userDevices = await this.spotifyPlayerService.getAvailableDevices();
  }
}
