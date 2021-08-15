import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppInfoDialogComponent } from './app-info/app-info.component';
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';
import { HotkeyDialogComponent } from './hotkey-dialog/hotkey-dialog.component';

const exports = [
  CookieBannerComponent,
  AppInfoDialogComponent,
  HotkeyDialogComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
  ],
  declarations: [...exports],
  exports,
})
export class SharedViewModule {}
