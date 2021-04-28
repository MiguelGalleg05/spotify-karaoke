import { Component, OnInit } from '@angular/core';

import { AuthStore } from '@artur-ba/shared/service';
import { SpotifyDataService } from '@artur-ba/web/spotify/shared/service';

@Component({
  selector: 'artur-ba-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {
  user: SpotifyApi.CurrentUsersProfileResponse;

  constructor(
    protected spotifyData: SpotifyDataService,
    protected authStore: AuthStore
  ) {}

  logout(): void {
    this.authStore.logout();
  }

  async ngOnInit(): Promise<void> {
    this.user = await this.spotifyData.getUserData();
  }
}
