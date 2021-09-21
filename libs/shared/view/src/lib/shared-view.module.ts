import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppInfoDialogComponent } from './app-info/app-info.component';
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';
import { HotkeyDialogComponent } from './hotkey-dialog/hotkey-dialog.component';
import { LanguageComponent } from './language/language.component';

const exports = [
  CookieBannerComponent,
  AppInfoDialogComponent,
  HotkeyDialogComponent,
  LanguageComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
  ],
  declarations: [...exports],
  exports,
})
export class SharedViewModule {}
