import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AppInfoDialogComponent } from './app-info/app-info.component';
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';
import { HotkeyDialogComponent } from './hotkey-dialog/hotkey-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
  ],
  declarations: [
    CookieBannerComponent,
    AppInfoDialogComponent,
    HotkeyDialogComponent,
  ],
  exports: [
    CookieBannerComponent,
    AppInfoDialogComponent,
    HotkeyDialogComponent,
  ],
})
export class SharedViewModule {}
