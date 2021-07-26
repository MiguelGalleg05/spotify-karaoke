import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import {
  AppInfoDialogComponent,
  HotkeyDialogComponent,
} from '@artur-ba/shared/view';
import {
  AuthStore,
  HotkeyService,
  UserSettingsService,
} from '@artur-ba/shared/service';
import { SpotifyDataService } from '@artur-ba/web/spotify/shared/service';

@Component({
  selector: 'artur-ba-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit, OnDestroy {
  user: SpotifyApi.CurrentUsersProfileResponse;
  darkMode = false;

  protected isHotkeyDialogOpen = false;

  protected subscriptions = new Subscription();

  constructor(
    protected readonly authStore: AuthStore,
    protected readonly dialog: MatDialog,
    protected readonly hotkey: HotkeyService,
    protected readonly spotifyData: SpotifyDataService,
    protected readonly userSettings: UserSettingsService,
  ) {}

  async ngOnInit(): Promise<void> {
    this.initHotkeys();
    this.initDarkModeSub();
    this.user = await this.spotifyData.getUserData();
  }

  protected initDarkModeSub(): void {
    const darkModeSub = this.userSettings.darkModeOn$.subscribe((darkMode) => {
      this.darkMode = darkMode;
    });
    this.subscriptions.add(darkModeSub);
  }

  protected initHotkeys(): void {
    const darkModeAction = $localize`:hotkeys.dark-mode:Toggle dark mode`;
    this.subscriptions.add(
      this.hotkey
        .addShortcut({ keys: 'control.d', action: darkModeAction })
        .subscribe(() => this.toggleDarkMode()),
    );
    const showHotKeyAction = $localize`:hotkeys.show-hotkeys:Show hotkeys dialog`;
    this.subscriptions.add(
      this.hotkey
        .addShortcut({ keys: 'control.h', action: showHotKeyAction })
        .subscribe(() => this.openHotKeyDialog()),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  toggleDarkMode(newMode?: boolean): void {
    const mode = newMode ? newMode : !this.darkMode;
    this.userSettings.darkMode(mode);
  }

  openInfoDialog(): void {
    this.dialog.open(AppInfoDialogComponent);
  }

  openHotKeyDialog(): void {
    if (this.isHotkeyDialogOpen) {
      return;
    }
    const hotkeyDialogRef = this.dialog.open(HotkeyDialogComponent, {
      data: this.hotkey.hotkeys,
    });
    hotkeyDialogRef.afterOpened().subscribe(() => {
      this.isHotkeyDialogOpen = true;
    });
    hotkeyDialogRef.afterClosed().subscribe(() => {
      this.isHotkeyDialogOpen = false;
    });
  }

  logout(): void {
    this.authStore.logout();
  }
}
