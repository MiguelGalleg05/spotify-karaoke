import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [CookieBannerComponent],
  exports: [CookieBannerComponent],
})
export class SharedViewModule {}
