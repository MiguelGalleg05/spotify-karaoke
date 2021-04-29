import { Component, OnDestroy, OnInit } from '@angular/core';

import { AuthStore, UserSettingsService } from '@artur-ba/shared/service';
import { SpotifyDataService } from '@artur-ba/web/spotify/shared/service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'artur-ba-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit, OnDestroy {
  user: SpotifyApi.CurrentUsersProfileResponse;
  darkMode = false;

  protected subscriptions: Subscription[] = [];

  constructor(
    protected spotifyData: SpotifyDataService,
    protected authStore: AuthStore,
    protected userSettings: UserSettingsService
  ) {}

  logout(): void {
    this.authStore.logout();
  }

  async ngOnInit(): Promise<void> {
    this.user = await this.spotifyData.getUserData();
    const darkModeSub = this.userSettings.darkModeOn$.subscribe((darkMode) => {
      this.darkMode = darkMode;
    });
    this.subscriptions.push(darkModeSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  toggleDarkMode(newMode?: boolean): void {
    const mode = newMode ? newMode : !this.darkMode;
    this.userSettings.darkMode(mode);
  }
}
