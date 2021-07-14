import { Component, OnDestroy, OnInit } from '@angular/core';

import '@angular/localize/init';
import { Location } from '@angular/common';
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
  selector: 'artur-ba-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit, OnDestroy {
  user: SpotifyApi.CurrentUsersProfileResponse;
  darkMode = false;

  protected isHotkeyDialogOpen = false;

  protected subscriptions: Subscription[] = [];

  constructor(
    protected readonly authStore: AuthStore,
    protected readonly dialog: MatDialog,
    protected readonly hotkey: HotkeyService,
    protected readonly location: Location,
    protected readonly spotifyData: SpotifyDataService,
    protected readonly userSettings: UserSettingsService,
  ) {}

  async ngOnInit(): Promise<void> {
    this.initHotkeys();
    this.user = await this.spotifyData.getUserData();
    const darkModeSub = this.userSettings.darkModeOn$.subscribe((darkMode) => {
      this.darkMode = darkMode;
    });
    this.subscriptions.push(darkModeSub);
  }

  protected initHotkeys(): void {
    const darkModeAction = $localize`:hotkeys.dark-mode:Toggle dark mode`;
    this.subscriptions.push(
      this.hotkey
        .addShortcut({ keys: 'control.d', action: darkModeAction })
        .subscribe(() => this.toggleDarkMode()),
    );
    const showHotKeyAction = $localize`:hotkeys.show-hotkeys:Show hotkeys dialog`;
    this.subscriptions.push(
      this.hotkey
        .addShortcut({ keys: 'control.h', action: showHotKeyAction })
        .subscribe(() => this.openHotKeyDialog()),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
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

  goBack(): void {
    this.location.back();
  }

  goForward(): void {
    this.location.forward();
  }
}
