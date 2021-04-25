import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
})
export class WebSpotifySidebarViewModule {}
